package mk.ukim.finki.trip2mk;

import com.fasterxml.jackson.databind.ObjectMapper;
import mk.ukim.finki.trip2mk.controller.AuthController;
import mk.ukim.finki.trip2mk.dto.LoginRequest;
import mk.ukim.finki.trip2mk.dto.SignUpRequest;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.service.KorisniciService;
import mk.ukim.finki.trip2mk.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(value = AuthController.class, excludeAutoConfiguration = SecurityAutoConfiguration.class)
class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private UserService userService;

    @MockBean
    private KorisniciService korisniciService;

    @MockBean
    private ApplicationEventPublisher eventPublisher;

    @Test
    void login_validCredentials_returnsOkWithAuthResponse() throws Exception {
        Korisnici user = new Korisnici();
        user.setUsername("alice");
        user.setIme("Alice");
        user.setUloga("USER");
        when(userService.validUsernameAndPassword("alice", "pass")).thenReturn(Optional.of(user));

        LoginRequest request = new LoginRequest();
        request.setUsername("alice");
        request.setPassword("pass");

        mockMvc.perform(post("/auth/authenticate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Alice"))
                .andExpect(jsonPath("$.role").value("USER"));
    }

    @Test
    void login_invalidCredentials_returnsUnauthorized() throws Exception {
        when(userService.validUsernameAndPassword("alice", "wrong")).thenReturn(Optional.empty());

        LoginRequest request = new LoginRequest();
        request.setUsername("alice");
        request.setPassword("wrong");

        mockMvc.perform(post("/auth/authenticate")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isUnauthorized());
    }

    @Test
    void signup_newUser_returnsCreated() throws Exception {
        Korisnici user = new Korisnici();
        user.setUsername("bob");
        user.setIme("Bob");
        user.setToken("some-token");
        when(userService.hasUserWithUsername("bob")).thenReturn(false);
        when(userService.hasUserWithEmail("bob@example.com")).thenReturn(false);
        when(userService.saveUser(any(SignUpRequest.class))).thenReturn(user);
        doNothing().when(eventPublisher).publishEvent(any());

        SignUpRequest request = new SignUpRequest();
        request.setUsername("bob");
        request.setPassword("pass");
        request.setName("Bob");
        request.setEmail("bob@example.com");

        mockMvc.perform(post("/auth/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated());
    }

    @Test
    void signup_existingUsername_throwsException() throws Exception {
        when(userService.hasUserWithUsername("alice")).thenReturn(true);

        SignUpRequest request = new SignUpRequest();
        request.setUsername("alice");
        request.setPassword("pass");
        request.setName("Alice");
        request.setEmail("alice@example.com");

        mockMvc.perform(post("/auth/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().is5xxServerError());
    }
}
