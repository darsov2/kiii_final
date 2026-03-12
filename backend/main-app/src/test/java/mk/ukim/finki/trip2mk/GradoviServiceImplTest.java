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
        when(gradoviDao.findAll()).thenReturn(List.of(
                new Gradovi("Skopje", "Capital", null),
                new Gradovi("Ohrid", "Lake city", null)
        ));

        assertThat(gradoviService.findAll()).hasSize(2);
    }

    @Test
    void findById_returnsCorrectCity() {
        when(gradoviDao.findById(1L)).thenReturn(new Gradovi("Bitola", "Second city", null));

        assertThat(gradoviService.findById(1L).getIme()).isEqualTo("Bitola");
    }
}
