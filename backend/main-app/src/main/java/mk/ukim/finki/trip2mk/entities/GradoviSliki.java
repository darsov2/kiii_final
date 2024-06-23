package mk.ukim.finki.trip2mk.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class GradoviSliki {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String slikaUrl;

    @ManyToOne
    @JoinColumn(name = "gradId", foreignKey = @ForeignKey(name = "fk_sliki_gradovi"))
    @JsonIgnore
    private Gradovi grad;
}
