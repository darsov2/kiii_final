package mk.ukim.finki.trip2mk.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Gradovi {
    @Id
    @GeneratedValue
    private long gradId;
    private String ime;
    private String opis;
    @OneToMany(mappedBy = "grad")
    private List<Znamenitosti> znamenitosti;
    @ManyToOne
    @JoinColumn(name = "regionId", foreignKey = @ForeignKey(name= "fk_gradovi_regioni"))
    private Regioni region;
    @OneToMany(mappedBy = "grad")
    private List<GradoviSliki> sliki;
    private String latitude;
    private String longitude;
    @OneToMany(mappedBy = "grad")
    private List<Planovi> planovi;
    private String dopolnitelniAktivnosti;


    public Gradovi(String ime, String opis, Regioni region) {
        this.ime = ime;
        this.opis = opis;
        this.region = region;

        this.znamenitosti = new ArrayList<>();
    }

    public Gradovi() {
    }
}
