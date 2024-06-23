package mk.ukim.finki.trip2mk.service;

import mk.ukim.finki.trip2mk.dto.SignUpRequest;
import mk.ukim.finki.trip2mk.entities.Korisnici;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<Korisnici> getUsers();

    Optional<Korisnici> getUserByUsername(String username);
    Optional<Korisnici> getUserById(Long id);

    boolean hasUserWithUsername(String username);

    boolean hasUserWithEmail(String email);

    Korisnici validateAndGetUserByUsername(String username);


    Korisnici saveUser(SignUpRequest signUpRequest);

    Korisnici saveEditedUser(String id, String name, String password, String email);

    void deleteUser(Korisnici user);

    Optional<Korisnici> validUsernameAndPassword(String username, String password);
}