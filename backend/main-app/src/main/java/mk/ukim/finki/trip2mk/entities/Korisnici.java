package mk.ukim.finki.trip2mk.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Entity
@Data
@Table(name = "users")
public class Korisnici  { //todo userDetails extends;
    @Id
    @GeneratedValue
    private long korisnikId;
    private String username;
    private String password;
    private String ime;
    private String prezime;
    private String telefonskiBroj;
    private String email;
    private String uloga;
    private String token;
    private Boolean aktiven;

    public Korisnici(String username, String password, String ime, String prezime, String telefonskiBroj, String email, String token) {
        this.username = username;
        this.password = password;
        this.ime = ime;
        this.prezime = prezime;
        this.telefonskiBroj = telefonskiBroj;
        this.email = email;
        this.token = token;
        this.aktiven = false;
    }

    public Korisnici() {
    }

}
