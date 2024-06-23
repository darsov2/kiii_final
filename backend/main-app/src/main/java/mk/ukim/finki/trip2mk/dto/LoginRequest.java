package mk.ukim.finki.trip2mk.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String username;
    private String password;
}