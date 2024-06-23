package mk.ukim.finki.trip2mk.service.Impl;


import lombok.RequiredArgsConstructor;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.security.CustomUserDetails;
import mk.ukim.finki.trip2mk.service.UserService;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) {
        Korisnici user = userService.getUserByUsername(username).orElseThrow(() -> new UsernameNotFoundException(String.format("Username %s not found", username)));
        List<SimpleGrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(user.getUloga()));
        return mapUserToCustomUserDetails(user, authorities);
    }

    private CustomUserDetails mapUserToCustomUserDetails(Korisnici user, List<SimpleGrantedAuthority> authorities) {
        CustomUserDetails customUserDetails = new CustomUserDetails();
        customUserDetails.setId(user.getKorisnikId());
        customUserDetails.setUsername(user.getUsername());
        customUserDetails.setPassword(user.getPassword());
        customUserDetails.setName(user.getIme());
        customUserDetails.setEmail(user.getEmail());
        customUserDetails.setAuthorities(authorities);
        customUserDetails.setIsEnabled(user.getAktiven());
        return customUserDetails;
    }
}