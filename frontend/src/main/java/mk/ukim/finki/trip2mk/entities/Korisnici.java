package mk.ukim.finki.trip2mk.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Korisnici { //todo userDetails extends;
    @Id
    @GeneratedValue
    private long korisnikId;
    private String username;
    private String password;
    private String ime;
    private String prezime;
    private String telefonskiBroj;
    private String email;

    public Korisnici(String username, String password, String ime, String prezime, String telefonskiBroj, String email) {
        this.username = username;
        this.password = password;
        this.ime = ime;
        this.prezime = prezime;
        this.telefonskiBroj = telefonskiBroj;
        this.email = email;
    }

    public Korisnici() {
    }
}
