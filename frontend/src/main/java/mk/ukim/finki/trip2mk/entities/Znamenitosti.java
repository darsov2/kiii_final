package mk.ukim.finki.trip2mk.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Znamenitosti {
    @Id
    @GeneratedValue
    private long znamenitostId;
    @ManyToOne
    @JoinColumn(name = "regionId", foreignKey = @ForeignKey(name = "fk_znamenitosti_regioni"))
    private Regioni region;
    @ManyToOne
    @JoinColumn(name = "gradId", foreignKey = @ForeignKey(name = "fk_znamenitosti_gradovi"))
    private Gradovi grad;
    private String opis;
    private String wikiData;
    private String osmId;
    private Double latitude;
    private Double longtitude;
    @ManyToOne
    @JoinColumn(name = "tipZnamenitostId", foreignKey = @ForeignKey(name = "fk_znamenitosti_tip_znamenitosti"))
    private TipoviZnamenitosti tipZnamenitost;

    public Znamenitosti(Regioni region, Gradovi grad, String opis, String wikiData, String osmId, Double latitude, Double longtitude, TipoviZnamenitosti tipZnamenitost) {
        this.region = region;
        this.grad = grad;
        this.opis = opis;
        this.wikiData = wikiData;
        this.osmId = osmId;
        this.latitude = latitude;
        this.longtitude = longtitude;
        this.tipZnamenitost = tipZnamenitost;
    }

    public Znamenitosti() {
    }
}
