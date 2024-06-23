package mk.ukim.finki.trip2mk.Dao.Impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import mk.ukim.finki.trip2mk.Dao.ZnamenitostiDao;
import mk.ukim.finki.trip2mk.entities.Planovi;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZnamenitostiDaoImpl implements ZnamenitostiDao {
    @PersistenceContext
    EntityManager em;

    @Override
    public List<Znamenitosti> findAll() {
        return em.createQuery("SELECT z from Znamenitosti z ORDER BY z.id").getResultList();
    }

    @Override
    public Znamenitosti findById(long znamenitostId) {
        return em.find(Znamenitosti.class, znamenitostId);
    }
}
