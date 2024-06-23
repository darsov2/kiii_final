package mk.ukim.finki.trip2mk.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class TipoviZnamenitosti {
    @Id
    @GeneratedValue
    private long tipZnamenitostId;
    private String tip;

    public TipoviZnamenitosti(String tip) {
        this.tip = tip;
    }

    public TipoviZnamenitosti() {
    }
}
