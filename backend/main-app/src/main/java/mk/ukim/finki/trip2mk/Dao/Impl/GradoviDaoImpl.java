package mk.ukim.finki.trip2mk.Dao.Impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import mk.ukim.finki.trip2mk.Dao.GradoviDao;
import mk.ukim.finki.trip2mk.entities.Gradovi;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradoviDaoImpl implements GradoviDao {

    @PersistenceContext
    EntityManager em;

    @Override
    public Gradovi findById(Long gradoviId) {
        return em.find(Gradovi.class, gradoviId);
    }

    @Override
    public List<Gradovi> findAll() {
        return em.createQuery("select g from Gradovi g order by g.id").getResultList();
    }
}
