package mk.ukim.finki.trip2mk.service.Impl;

import mk.ukim.finki.trip2mk.Dao.ZnamenitostiDao;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;
import mk.ukim.finki.trip2mk.service.ZnamenitostiService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZnamenitostiServiceImpl implements ZnamenitostiService {
    private final ZnamenitostiDao znamenitostiDao;

    public ZnamenitostiServiceImpl(ZnamenitostiDao znamenitostiDao) {
        this.znamenitostiDao = znamenitostiDao;
    }

    @Override
    public List<Znamenitosti> findAll() {
        return znamenitostiDao.findAll();
    }

    @Override
    public Znamenitosti findById(long znamenitostId) {
        return znamenitostiDao.findById(znamenitostId);
    }

}
