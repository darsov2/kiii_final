package mk.ukim.finki.trip2mk.controller;

import mk.ukim.finki.trip2mk.entities.Znamenitosti;
import mk.ukim.finki.trip2mk.service.ZnamenitostiService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:3000")
@RequestMapping("/api/landmarks")
public class ZnamenitostiController {
    private final ZnamenitostiService znamenitostiService;

    public ZnamenitostiController(ZnamenitostiService znamenitostiService) {
        this.znamenitostiService = znamenitostiService;
    }

    @GetMapping()
    public List<Znamenitosti> getAllZnamenitosti()
    {
        return znamenitostiService.findAll();
    }

    @GetMapping("/{id}")
    public Znamenitosti getZnamenitostById(@PathVariable Long id)
    {
        return znamenitostiService.findById(id);
    }

}
