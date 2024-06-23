package mk.ukim.finki.trip2mk.Dao.Impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.NoResultException;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import mk.ukim.finki.trip2mk.Dao.KorisniciDao;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KorisniciDaoImpl implements KorisniciDao {
    @PersistenceContext
    EntityManager em;
    @Override
    public void create(Korisnici korisnik) {
        em.persist(korisnik);
    }

    @Override
    public void delete(Korisnici korisnik) {
        em.remove(korisnik);
    }

    @Override
    @Transactional
    public Korisnici save(Korisnici korisnik) {
        em.persist(korisnik);
        return korisnik;
    }

    @Override
    public Korisnici findById(long id) {
        return em.find(Korisnici.class, id);
    }

    @Override
    public List<Korisnici> findAll() {
        return em.createQuery("SELECT k FROM Korisnici k ORDER BY korisnikId").getResultList();
    }

    @Override
    public Optional<Korisnici> findByUsername(String username) {
        try {
            Korisnici korisnik = em.createQuery("SELECT u FROM Korisnici u WHERE u.username = :username", Korisnici.class)
                    .setParameter("username", username)
                    .getSingleResult();
            return Optional.of(korisnik);
        } catch (NoResultException e) {
            return Optional.empty();
        }
    }

    @Override
    public boolean existsByUsername(String username) {
        Long count = em.createQuery("SELECT COUNT(u) FROM Korisnici u WHERE u.username = :username", Long.class)
                .setParameter("username", username)
                .getSingleResult();
        return count > 0;
    }

    @Override
    public boolean existsByEmail(String email) {
        Long count = em.createQuery("SELECT COUNT(u) FROM Korisnici u WHERE u.email = :email", Long.class)
                .setParameter("email", email)
                .getSingleResult();
        return count > 0;
    }

    @Override
    public Korisnici findUserByToken(String token)
    {
        return (Korisnici) em.createQuery("SELECT u from Korisnici u where u.token = :token")
                .setParameter("token", token)
                .getSingleResult();
    }
}
