package mk.ukim.finki.trip2mk.Dao;

import mk.ukim.finki.trip2mk.entities.Korisnici;

import java.util.List;
import java.util.Optional;

public interface KorisniciDao {

    void create(Korisnici korisnik);
    void delete(Korisnici korisnik);
    Korisnici save(Korisnici korisnik);

    Korisnici findById(long id);
    List<Korisnici> findAll();

    Optional<Korisnici> findByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    Korisnici findUserByToken(String token);
}
