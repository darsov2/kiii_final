package mk.ukim.finki.trip2mk;

import mk.ukim.finki.trip2mk.controller.GradoviController;
import mk.ukim.finki.trip2mk.entities.Gradovi;
import mk.ukim.finki.trip2mk.service.GradoviService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(value = GradoviController.class, excludeAutoConfiguration = SecurityAutoConfiguration.class)
class GradoviControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GradoviService gradoviService;

    @Test
    void findAll_returnsOkWithCityList() throws Exception {
        Gradovi g = new Gradovi("Skopje", "Capital of North Macedonia", null);
        when(gradoviService.findAll()).thenReturn(List.of(g));

        mockMvc.perform(get("/api/gradovi"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].ime").value("Skopje"));
    }

    @Test
    void findById_returnsOkWithCity() throws Exception {
        Gradovi g = new Gradovi("Ohrid", "Pearl of the Balkans", null);
        when(gradoviService.findById(1L)).thenReturn(g);

        mockMvc.perform(get("/api/gradovi/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.ime").value("Ohrid"))
                .andExpect(jsonPath("$.opis").value("Pearl of the Balkans"));
    }
}
