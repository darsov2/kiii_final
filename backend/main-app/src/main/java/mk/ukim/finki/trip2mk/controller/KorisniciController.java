package mk.ukim.finki.trip2mk.controller;


import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Mislenja;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;
import mk.ukim.finki.trip2mk.service.KorisniciService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class KorisniciController {

    private final KorisniciService korisniciService;

    public KorisniciController(KorisniciService korisniciService) {
        this.korisniciService = korisniciService;
    }

    @GetMapping
    List<Korisnici> getUsers(){
        return korisniciService.findAll();
    }

    @GetMapping("/find/{id}")
    Korisnici getKorisnik(@PathVariable Long id){
        return korisniciService.findById(id);
    }

    @GetMapping("/remove/{id}")
    void deleteUser(@PathVariable Long id){
        korisniciService.delete(id);
    }

    @PostMapping("/create")
    void create(@RequestParam String username,
                @RequestParam String password,
                @RequestParam String ime,
                @RequestParam String prezime,
                @RequestParam String telefonskiBroj,
                @RequestParam String email){
        korisniciService.create(username, password, ime, prezime, telefonskiBroj, email);
    }
}
