package mk.ukim.finki.trip2mk.Dao;

import mk.ukim.finki.trip2mk.entities.Znamenitosti;

import java.util.List;

public interface ZnamenitostiDao {
    List<Znamenitosti> findAll();

    Znamenitosti findById(long znamenitostId);
}
