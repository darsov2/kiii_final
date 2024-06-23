package mk.ukim.finki.trip2mk.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Planovi {
    @Id
    @GeneratedValue
    private long planId;
    @ManyToMany
    @JoinTable(name = "planovi_stavki",
            joinColumns = @JoinColumn(name = "znamenitostId", foreignKey = @ForeignKey(name = "fk_planovi_planovi_stavki")),
            inverseJoinColumns = @JoinColumn(name = "planId", foreignKey = @ForeignKey(name = "fk_planovi_stavki_planovi")))
    private List<Znamenitosti> znamenitosti;

    public Planovi() {
        this.znamenitosti = new ArrayList<>();
    }
}
