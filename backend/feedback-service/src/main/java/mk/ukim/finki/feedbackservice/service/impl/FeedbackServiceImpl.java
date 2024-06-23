package mk.ukim.finki.feedbackservice.service.impl;

import mk.ukim.finki.feedbackservice.entites.Feedback;
import mk.ukim.finki.feedbackservice.repository.FeedbackRepository;
import mk.ukim.finki.feedbackservice.service.FeedbackService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FeedbackServiceImpl implements FeedbackService {
    private final FeedbackRepository feedbackRepository;

    public FeedbackServiceImpl(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    @Override
    public List<Feedback> listAllFeedbacks() {
        return feedbackRepository.findAll();
    }

    @Override
    public Feedback findById(Long id) {
        return feedbackRepository.findById(id).orElseThrow(() -> new RuntimeException("Feedback not found"));
    }

    @Override
    public Feedback createFeedback(String name, String title, String message, Integer numStars) {
        Feedback f = new Feedback(name, title, message, numStars, LocalDateTime.now());
        return feedbackRepository.save(f);
    }
}
