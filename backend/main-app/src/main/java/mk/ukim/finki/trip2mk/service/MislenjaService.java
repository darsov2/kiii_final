package mk.ukim.finki.trip2mk.service;

import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Mislenja;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;

import java.util.List;

public interface MislenjaService {
    void create(int ocenka, String opis, long znamenitost, long korisnik);
    void delete(long id);
    void save(long id, int ocenka, String opis, Znamenitosti znamenitost, Korisnici korisnik);

    Mislenja findById(long id);
    List<Mislenja> findAll();
    List<Mislenja> findByCityId(Long id);
}
