package mk.ukim.finki.trip2mk.controller;

import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.entities.Mislenja;
import mk.ukim.finki.trip2mk.entities.Znamenitosti;
import mk.ukim.finki.trip2mk.service.KorisniciService;
import mk.ukim.finki.trip2mk.service.MislenjaService;
import mk.ukim.finki.trip2mk.service.ZnamenitostiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/reviews")
public class MislenjaController {
    private final MislenjaService mislenjaService;
    private final KorisniciService korisniciService;
    private final ZnamenitostiService znamenitostiService;


    public MislenjaController(MislenjaService mislenjaService, KorisniciService korisniciService, ZnamenitostiService znamenitostiService) {
        this.mislenjaService = mislenjaService;
        this.korisniciService = korisniciService;
        this.znamenitostiService = znamenitostiService;
    }

    @GetMapping
    List<Mislenja> getReviews() {
        return mislenjaService.findAll();
    }

    @GetMapping("/find/{id}")
    Mislenja getReviewForUser(@PathVariable Long id) {
        return mislenjaService.findById(id);
    }

    @GetMapping("/find/city/{id}")
    List<Mislenja> getReviewsForCity(@PathVariable Long id){
        return mislenjaService.findByCityId(id);
    }

    @GetMapping("/remove/{id}")
    void deleteReviewForUser(@PathVariable Long id) {
        mislenjaService.delete(id);
    }

    @PostMapping("/create")
    void create(@RequestParam int ocenka,
                @RequestParam String opis,
                @RequestParam long znamenitostId,
                @RequestParam long korisnikId) {

        mislenjaService.create(ocenka, opis, znamenitostId, korisnikId);

    }
}
