package mk.ukim.finki.trip2mk.Dao.Impl;


import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
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
    public void kreirajMislenje(int ocenka, String opis, Znamenitosti znamenitost, Korisnici korisnik) {
        Mislenja mislenje = new Mislenja(ocenka, opis, znamenitost, korisnik);
        em.persist(mislenje);
    }

    @Override
    public void izbrisiMislenje(long id) {
        Mislenja mislenje = findById(id);
        em.remove(mislenje);
    }

    @Override
    public void azurirajMislenje(long id, int ocenka, String opis, Znamenitosti znamenitost, Korisnici korisnik) {
        Mislenja mislenje = findById(id);
        mislenje.setOcenka(ocenka);
        mislenje.setOpis(opis);
        mislenje.setZnamenitost(znamenitost);
        mislenje.setKorisnik(korisnik);
        em.persist(mislenje);
    }

    @Override
    public Mislenja findById(long id) {
        return em.find(Mislenja.class, id);
    }

    @Override
    public List<Mislenja> najdiGiSite() {
        return em.createQuery("SELECT m FROM Mislenja m ORDER BY mislenjeId").getResultList();
    }
}
