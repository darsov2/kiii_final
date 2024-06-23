package mk.ukim.finki.trip2mk.service;

import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;

import java.util.List;

public interface ZnamenitostiService {
    List<Znamenitosti> findAll();

    Znamenitosti findById(long znamenitostId);

}
