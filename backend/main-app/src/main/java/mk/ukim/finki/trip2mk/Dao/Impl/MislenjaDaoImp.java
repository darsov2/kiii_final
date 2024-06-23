package mk.ukim.finki.trip2mk.Dao.Impl;


import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import mk.ukim.finki.trip2mk.Dao.MislenjaDao;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Mislenja;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MislenjaDaoImp implements MislenjaDao {

    @PersistenceContext
    EntityManager em;
    @Override
    @Transactional
    public void create(Mislenja mislenje) {
        em.persist(mislenje);
    }

    @Override
    public void delete(Mislenja mislenje) {
        em.remove(mislenje);
    }

    @Override
    public void save(Mislenja mislenje) {
        em.persist(mislenje);
    }

    @Override
    public Mislenja findById(long id) {
        return em.find(Mislenja.class, id);
    }

    @Override
    public List<Mislenja> findAll() {
        return em.createQuery("SELECT m FROM Mislenja m ORDER BY mislenjeId").getResultList();
    }

    @Override
    public List<Mislenja> findByCityId(Long id) {
        return em.createQuery("select m from Mislenja m where m.znamenitost.id = :id").setParameter("id", id).getResultList();
    }
}
