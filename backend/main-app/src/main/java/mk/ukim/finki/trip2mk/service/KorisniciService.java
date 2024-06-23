package mk.ukim.finki.trip2mk.service;

import mk.ukim.finki.trip2mk.entities.Korisnici;

import java.util.List;

public interface KorisniciService {

    void create(String username, String password, String ime, String prezime, String telefonskiBroj, String email);
    void delete(long id);
    void save(long id, String username, String password, String ime, String prezime, String telefonskiBroj, String email);

    Korisnici findById(long id);
    List<Korisnici> findAll();

    void confirmAccount(String token);
}
