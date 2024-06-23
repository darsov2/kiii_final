package mk.ukim.finki.trip2mk.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Regioni {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long regionId;
    private String opis;
    @OneToMany
    @JoinColumn(name = "gradId", foreignKey = @ForeignKey(name = "fk_regioni_gradovi"))
    private List<Gradovi> gradovi;

    public Regioni(String opis) {
        this.opis = opis;
        this.gradovi = new ArrayList<>();
    }

    public Regioni() {
    }
}
