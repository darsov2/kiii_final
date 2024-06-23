package mk.ukim.finki.feedbackservice.repository;

import mk.ukim.finki.feedbackservice.entites.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
