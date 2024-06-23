package mk.ukim.finki.trip2mk.Dao;

import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Mislenja;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;

import java.util.List;

public interface MislenjaDao {
    void create(Mislenja mislenje);
    void delete(Mislenja mislenje);
    void save(Mislenja mislenje);

    Mislenja findById(long id);
    List<Mislenja> findAll();
    List<Mislenja> findByCityId(Long id);

}
