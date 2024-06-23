package mk.ukim.finki.trip2mk.Dao;

import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Mislenja;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;

import java.util.List;

public interface MislenjaDao {
    void kreirajMislenje(int ocenka, String opis, Znamenitosti znamenitost, Korisnici korisnik);
    void izbrisiMislenje(long id);
    void azurirajMislenje(long id, int ocenka, String opis, Znamenitosti znamenitost, Korisnici korisnik);

    Mislenja findById(long id);
    List<Mislenja> najdiGiSite();

}
