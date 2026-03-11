package mk.ukim.finki.trip2mk;

import mk.ukim.finki.trip2mk.Dao.GradoviDao;
import mk.ukim.finki.trip2mk.entities.Gradovi;
import mk.ukim.finki.trip2mk.service.Impl.GradoviServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class GradoviServiceImplTest {

    @Mock
    private GradoviDao gradoviDao;

    @InjectMocks
    private GradoviServiceImpl gradoviService;

    @Test
    void findAll_returnsAllCities() {
        Gradovi g1 = new Gradovi("Skopje", "Capital of North Macedonia", null);
        Gradovi g2 = new Gradovi("Ohrid", "Pearl of the Balkans", null);
        when(gradoviDao.findAll()).thenReturn(List.of(g1, g2));

        List<Gradovi> result = gradoviService.findAll();

        assertThat(result).hasSize(2);
        assertThat(result.get(0).getIme()).isEqualTo("Skopje");
        assertThat(result.get(1).getIme()).isEqualTo("Ohrid");
    }

    @Test
    void findById_returnsMatchingCity() {
        Gradovi g = new Gradovi("Bitola", "Second largest city", null);
        when(gradoviDao.findById(1L)).thenReturn(g);

        Gradovi result = gradoviService.findById(1L);

        assertThat(result.getIme()).isEqualTo("Bitola");
        assertThat(result.getOpis()).isEqualTo("Second largest city");
    }

    @Test
    void findAll_emptyList_returnsEmptyList() {
        when(gradoviDao.findAll()).thenReturn(List.of());

        List<Gradovi> result = gradoviService.findAll();

        assertThat(result).isEmpty();
    }
}
