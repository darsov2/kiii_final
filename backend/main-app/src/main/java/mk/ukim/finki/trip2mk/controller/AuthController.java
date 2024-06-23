package mk.ukim.finki.trip2mk.controller;

//import jakarta.validation.Valid;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import mk.ukim.finki.trip2mk.dto.AuthResponse;
import mk.ukim.finki.trip2mk.dto.LoginRequest;
import mk.ukim.finki.trip2mk.dto.SignUpRequest;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.event.OnRegistrationSuccessEvent;
import mk.ukim.finki.trip2mk.security.WebSecurityConfig;
import mk.ukim.finki.trip2mk.service.KorisniciService;
import mk.ukim.finki.trip2mk.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import java.io.IOException;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://127.0.0.1:3000")
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;
    @Autowired
    private final KorisniciService korisniciService;
    @Autowired
    private final ApplicationEventPublisher eventPublisher;

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        Optional<Korisnici> userOptional = userService.validUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if (userOptional.isPresent()) {
            Korisnici user = userOptional.get();
            return ResponseEntity.ok(new AuthResponse(user.getKorisnikId(), user.getIme(), user.getUloga()));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody SignUpRequest signUpRequest,
                               WebRequest request) {
        if (userService.hasUserWithUsername(signUpRequest.getUsername())) {
            throw new RuntimeException(String.format("Username %s is already been used", signUpRequest.getUsername()));
        }
        if (userService.hasUserWithEmail(signUpRequest.getEmail())) {
            throw new RuntimeException(String.format("Email %s is already been used", signUpRequest.getEmail()));
        }

        Korisnici user = userService.saveUser(signUpRequest);
        eventPublisher.publishEvent(new OnRegistrationSuccessEvent(user, request.getContextPath()));
//        return new AuthResponse(user.getKorisnikId(), user.getIme(), user.getUloga());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/user/{id}")
    private Korisnici getUserById(@PathVariable Long id)
    {
        return userService.getUserById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @PostMapping("/user/edit")
    private AuthResponse saveEdit(@RequestBody SignUpRequest editRequest)
    {
        Korisnici u = userService.saveEditedUser(editRequest.getUsername(), editRequest.getName(), editRequest.getPassword(), editRequest.getEmail());
        return new AuthResponse(u.getKorisnikId(), u.getIme(), u.getUloga());
    }

    @GetMapping("/confirm")
    private void confirmUserAccount(@RequestParam String token,
                                      HttpServletResponse response) throws IOException {
        korisniciService.confirmAccount(token);
        response.sendRedirect("http://trip2mk.ddns.net/login");
    }
}