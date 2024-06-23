package mk.ukim.finki.trip2mk.Dao;

import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Mislenja;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;

import java.util.List;

public interface KorisniciDao {

    void kreirajKorisnik(String username, String password, String ime, String prezime, String telefonskiBroj, String email);
    void izbrisiKorisnik(long id);
    void azurirajKorisnik(long id, String username, String password, String ime, String prezime, String telefonskiBroj, String email);

    Korisnici findById(long id);
    List<Korisnici> najdiGiSite();

}
