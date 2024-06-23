package mk.ukim.finki.trip2mk.Dao;

import mk.ukim.finki.trip2mk.entities.Gradovi;

import java.util.List;

public interface GradoviDao {
    Gradovi findById(Long gradoviId);
    List<Gradovi> findAll();
}
