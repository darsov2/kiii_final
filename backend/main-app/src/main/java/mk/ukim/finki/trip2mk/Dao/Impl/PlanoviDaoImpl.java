package mk.ukim.finki.trip2mk.Dao.Impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import mk.ukim.finki.trip2mk.Dao.PlanoviDao;
import mk.ukim.finki.trip2mk.entities.Planovi;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanoviDaoImpl implements PlanoviDao {

    @PersistenceContext
    EntityManager em;
    @Override
    public void create(Planovi plan) {
        em.persist(plan);
    }

    @Override
    public void delete(Planovi plan) {
        em.remove(plan);
    }

    @Override
    public void save(Planovi plan) {
        em.persist(plan);
    }

    @Override
    public Planovi findById(long id) {
        return em.find(Planovi.class, id);
    }

    @Override
    public List<Planovi> findAll() {
        return em.createQuery("SELECT p FROM Planovi p ORDER BY planId").getResultList();
    }
}
