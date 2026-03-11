package mk.ukim.finki.trip2mk;

import mk.ukim.finki.trip2mk.Dao.KorisniciDao;
import mk.ukim.finki.trip2mk.dto.SignUpRequest;
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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
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
    void hasUserWithUsername_userExists_returnsTrue() {
        when(userRepository.existsByUsername("alice")).thenReturn(true);

        assertThat(userService.hasUserWithUsername("alice")).isTrue();
    }

    @Test
    void hasUserWithUsername_userNotExists_returnsFalse() {
        when(userRepository.existsByUsername("unknown")).thenReturn(false);

        assertThat(userService.hasUserWithUsername("unknown")).isFalse();
    }

    @Test
    void hasUserWithEmail_emailExists_returnsTrue() {
        when(userRepository.existsByEmail("alice@example.com")).thenReturn(true);

        assertThat(userService.hasUserWithEmail("alice@example.com")).isTrue();
    }

    @Test
    void validUsernameAndPassword_correctCredentialsActiveUser_returnsUser() {
        Korisnici user = new Korisnici();
        user.setUsername("alice");
        user.setPassword("encoded_pass");
        user.setAktiven(true);
        when(userRepository.findByUsername("alice")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("raw_pass", "encoded_pass")).thenReturn(true);

        Optional<Korisnici> result = userService.validUsernameAndPassword("alice", "raw_pass");

        assertThat(result).isPresent();
        assertThat(result.get().getUsername()).isEqualTo("alice");
    }

    @Test
    void validUsernameAndPassword_wrongPassword_returnsEmpty() {
        Korisnici user = new Korisnici();
        user.setUsername("alice");
        user.setPassword("encoded_pass");
        user.setAktiven(true);
        when(userRepository.findByUsername("alice")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("wrong", "encoded_pass")).thenReturn(false);

        Optional<Korisnici> result = userService.validUsernameAndPassword("alice", "wrong");

        assertThat(result).isEmpty();
    }

    @Test
    void validUsernameAndPassword_inactiveUser_returnsEmpty() {
        Korisnici user = new Korisnici();
        user.setUsername("alice");
        user.setPassword("encoded_pass");
        user.setAktiven(false);
        when(userRepository.findByUsername("alice")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("raw_pass", "encoded_pass")).thenReturn(true);

        Optional<Korisnici> result = userService.validUsernameAndPassword("alice", "raw_pass");

        assertThat(result).isEmpty();
    }

    @Test
    void saveUser_encodesPasswordAndPersists() {
        SignUpRequest request = new SignUpRequest();
        request.setUsername("bob");
        request.setPassword("plain_pass");
        request.setName("Bob");
        request.setEmail("bob@example.com");

        when(passwordEncoder.encode(anyString())).thenReturn("encoded_pass");
        Korisnici saved = new Korisnici();
        saved.setUsername("bob");
        saved.setPassword("encoded_pass");
        saved.setIme("Bob");
        when(userRepository.save(any(Korisnici.class))).thenReturn(saved);

        Korisnici result = userService.saveUser(request);

        assertThat(result.getUsername()).isEqualTo("bob");
        assertThat(result.getPassword()).isEqualTo("encoded_pass");
        verify(userRepository).save(any(Korisnici.class));
    }
}
