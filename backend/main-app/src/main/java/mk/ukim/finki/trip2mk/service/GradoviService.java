package mk.ukim.finki.trip2mk.service;

import mk.ukim.finki.trip2mk.entities.Gradovi;

import java.util.List;

public interface GradoviService {
    Gradovi findById(Long gradoviId);

    List<Gradovi> findAll();
}
