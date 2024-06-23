package mk.ukim.finki.trip2mk.service.Impl;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.trip2mk.Dao.GradoviDao;
import mk.ukim.finki.trip2mk.entities.Gradovi;
import mk.ukim.finki.trip2mk.service.GradoviService;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class GradoviServiceImpl implements GradoviService {

    private final GradoviDao gradoviDao;

    @Override
    public Gradovi findById(Long gradoviId) {
        return gradoviDao.findById(gradoviId);
    }

    @Override
    public List<Gradovi> findAll() {
        return gradoviDao.findAll();
    }
}
