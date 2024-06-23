package mk.ukim.finki.trip2mk.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class ZnamenitostiSliki {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String slikaUrl;

    @ManyToOne
    @JoinColumn(name = "znamenitostId", foreignKey = @ForeignKey(name = "fk_sliki_znamenitosti"))
    @JsonIgnore
    Znamenitosti znamenitost;
}
