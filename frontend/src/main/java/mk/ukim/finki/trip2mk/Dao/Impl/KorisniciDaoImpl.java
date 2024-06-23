package mk.ukim.finki.trip2mk.Dao.Impl;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import mk.ukim.finki.trip2mk.Dao.KorisniciDao;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import org.hibernate.persister.entity.EntityPersister;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KorisniciDaoImpl implements KorisniciDao {
    @PersistenceContext
    EntityManager em;
    @Override
    public void kreirajKorisnik(String username, String password, String ime, String prezime, String telefonskiBroj, String email) {
        Korisnici korisnik = new Korisnici(username, password, ime, prezime, telefonskiBroj, email);
        em.persist(korisnik);
    }

    @Override
    public void izbrisiKorisnik(long id) {
        Korisnici korisnik = findById(id);
        em.remove(korisnik);
    }

    @Override
    public void azurirajKorisnik(long id, String username, String password, String ime, String prezime, String telefonskiBroj, String email) {
        Korisnici korisnik = findById(id);
        korisnik.setUsername(username);
        korisnik.setPassword(password);
        korisnik.setIme(ime);
        korisnik.setPrezime(prezime);
        korisnik.setTelefonskiBroj(telefonskiBroj);
        korisnik.setEmail(email);
        em.persist(korisnik);
    }

    @Override
    public Korisnici findById(long id) {
        return em.find(Korisnici.class, id);
    }

    @Override
    public List<Korisnici> najdiGiSite() {
        return em.createQuery("SELECT k FROM Korisnici k ORDER BY korisnikId").getResultList();
    }
}
