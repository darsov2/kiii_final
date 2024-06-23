package mk.ukim.finki.trip2mk.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
public class PlanStavki {
    @Id
    @GeneratedValue
    private long planStavkaId;
    @ManyToOne
    @JoinColumn(name = "znamenitostId", foreignKey = @ForeignKey(name = "fk_plan_stavki_znamenitosti"))
    private Znamenitosti znamenitost;
    private int redenBroj;
    @Temporal(TemporalType.TIME)
    private Date cas;
    private int den;
    @ManyToOne
    @JoinColumn(name = "plan_id", foreignKey = @ForeignKey(name = "fk_planstavka_plan"))
    @JsonIgnore
    private Planovi plan;

    public PlanStavki(Znamenitosti znamenitost, int redenBroj, Date cas) {
        this.znamenitost = znamenitost;
        this.redenBroj = redenBroj;
        this.cas = cas;
    }

    public PlanStavki() {
    }
}
