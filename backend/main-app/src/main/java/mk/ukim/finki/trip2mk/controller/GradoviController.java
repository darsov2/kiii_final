package mk.ukim.finki.trip2mk.controller;

import lombok.RequiredArgsConstructor;
import mk.ukim.finki.trip2mk.entities.Gradovi;
import mk.ukim.finki.trip2mk.service.GradoviService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/gradovi")
public class GradoviController {

    private final GradoviService gradoviService;

    @GetMapping("/{id}")
    public Gradovi getGradById(@PathVariable Long id)
    {
        return gradoviService.findById(id);
    }

    @GetMapping()
    public List<Gradovi> findAll()
    {
        return gradoviService.findAll();
    }
}
