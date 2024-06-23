package mk.ukim.finki.trip2mk.controller;

import mk.ukim.finki.trip2mk.entities.Planovi;
import mk.ukim.finki.trip2mk.service.PlanoviService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/plans")
public class PlanoviController {

    private final PlanoviService planoviService;

    public PlanoviController(PlanoviService planoviService) {
        this.planoviService = planoviService;
    }


    @GetMapping
    List<Planovi> getPlans(){
        return planoviService.findAll();
    }

    @GetMapping("/find/{id}")
    Planovi getPlanForCity(@PathVariable Long id){
        return planoviService.findById(id);
    }

    @GetMapping("/remove/{id}")
    void deletePlanForCity(@PathVariable Long id){
        planoviService.delete(id);
    }

    @PostMapping("/create")
    void createPlan(@RequestParam boolean ekskurzija,
                       @RequestParam String ime,
                       @RequestParam int brDenovi){
        planoviService.create(ekskurzija, ime, brDenovi, null);
    }

}
