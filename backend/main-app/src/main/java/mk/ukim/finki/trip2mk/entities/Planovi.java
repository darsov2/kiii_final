package mk.ukim.finki.trip2mk.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Planovi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long planId;
    private boolean ekskurzija;
    private String ime;
    private int brDenovi;
    @ManyToOne
    @JoinColumn(name = "gradId", foreignKey=@ForeignKey(name = "fk_planovi_grad"))
    @JsonIgnore
    private Gradovi grad;
    @OneToMany(mappedBy = "plan")
    private List<PlanStavki> znamenitosti;

    public Planovi(boolean ekskurzija, String ime, int brDenovi, Gradovi grad) {
        this.ekskurzija = ekskurzija;
        this.brDenovi = brDenovi;
        this.ime = ime;
        this.grad = grad;
        this.znamenitosti = new ArrayList<>();
    }

    public Planovi() {
        this.znamenitosti = new ArrayList<>();
    }
}
