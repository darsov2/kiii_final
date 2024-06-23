package mk.ukim.finki.feedbackservice.entites;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String nickname;
    String title;
    String message;
    Integer numStars;
    LocalDateTime dateStamp;

    public Feedback(String nickname, String title, String message, Integer numStars, LocalDateTime dateStamp) {
        this.nickname = nickname;
        this.title = title;
        this.message = message;
        this.numStars = numStars;
        this.dateStamp = dateStamp;
    }

    public Feedback() {

    }
}
