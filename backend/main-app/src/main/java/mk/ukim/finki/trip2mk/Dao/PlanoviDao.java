package mk.ukim.finki.trip2mk.Dao;

import mk.ukim.finki.trip2mk.entities.Planovi;

import java.util.List;

public interface PlanoviDao {
    void create(Planovi plan);
    void delete(Planovi plan);
    void save(Planovi plan);

    Planovi findById(long id);
    List<Planovi> findAll();
}
