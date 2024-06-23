package mk.ukim.finki.trip2mk.Dao;

import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Planovi;

import java.util.List;

public interface PlanoviDao {
    void kreirajPlan();
    void izbrisiPlan(long id);
    void azurirajPlan(long id);

    Planovi findById(long id);
    List<Planovi> najdiGiSite();
}
