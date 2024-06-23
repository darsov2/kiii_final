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
    public void kreirajPlan() { //todo pa dali treba vaka???? OOOOO TIIIII
        Planovi plan = new Planovi();
        em.persist(plan);
    }

    @Override
    public void izbrisiPlan(long id) {
        Planovi plan = findById(id);
        em.remove(plan);
    }

    @Override
    public void azurirajPlan(long id) {
        Planovi plan = findById(id);
        //todo planovi azuriranje
        em.persist(plan);
    }

    @Override
    public Planovi findById(long id) {
        return em.find(Planovi.class, id);
    }

    @Override
    public List<Planovi> najdiGiSite() {
        return em.createQuery("SELECT p FROM Planovi p ORDER BY planId").getResultList();
    }
}
