package mk.ukim.finki.trip2mk;

import mk.ukim.finki.trip2mk.Dao.KorisniciDao;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.service.Impl.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @Mock
    private KorisniciDao userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserServiceImpl userService;

    @Test
    void validUsernameAndPassword_correctCredentials_returnsUser() {
        Korisnici user = new Korisnici();
        user.setUsername("alice");
        user.setPassword("encoded");
        user.setAktiven(true);
        when(userRepository.findByUsername("alice")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("pass", "encoded")).thenReturn(true);

        assertThat(userService.validUsernameAndPassword("alice", "pass")).isPresent();
    }

    @Test
    void validUsernameAndPassword_wrongPassword_returnsEmpty() {
        Korisnici user = new Korisnici();
        user.setPassword("encoded");
        user.setAktiven(true);
        when(userRepository.findByUsername("alice")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("wrong", "encoded")).thenReturn(false);

        assertThat(userService.validUsernameAndPassword("alice", "wrong")).isEmpty();
    }

    @Test
    void hasUserWithUsername_returnsCorrectResult() {
        when(userRepository.existsByUsername("alice")).thenReturn(true);
        when(userRepository.existsByUsername("unknown")).thenReturn(false);

        assertThat(userService.hasUserWithUsername("alice")).isTrue();
        assertThat(userService.hasUserWithUsername("unknown")).isFalse();
    }
}
