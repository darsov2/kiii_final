package mk.ukim.finki.trip2mk.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Mislenja {
    @Id
    @GeneratedValue
    private long mislenjeId;
    private int ocenka;
    private String opis;
    @ManyToOne
    @JoinColumn(name = "znamenitostId", foreignKey = @ForeignKey(name = "fk_mislenja_znamenitosti"))
    private Znamenitosti znamenitost;
    @ManyToOne
    @JoinColumn(name = "korisnikId", foreignKey = @ForeignKey(name = "fk_mislenja_korisnici"))
    private Korisnici korisnik;

    public Mislenja(int ocenka, String opis, Znamenitosti znamenitost, Korisnici korisnik) {
        this.ocenka = ocenka;
        this.opis = opis;
        this.znamenitost = znamenitost;
        this.korisnik = korisnik;
    }

    public Mislenja() {
    }
}
