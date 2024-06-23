package mk.ukim.finki.trip2mk.service;

import mk.ukim.finki.trip2mk.entities.Gradovi;
import mk.ukim.finki.trip2mk.entities.Planovi;

import java.util.List;

public interface PlanoviService {
    void create(boolean ekskurzija, String ime, int brDenovi, Gradovi grad);
    void delete(long id);
    void save(long id, boolean ekskurzija, String ime, int brDenovi, Gradovi grad);

    Planovi findById(long id);
    List<Planovi> findAll();
}
