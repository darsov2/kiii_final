package mk.ukim.finki.feedbackservice.service;

import mk.ukim.finki.feedbackservice.entites.Feedback;

import java.util.List;

public interface FeedbackService {
    List<Feedback> listAllFeedbacks();
    Feedback findById(Long id);
    Feedback createFeedback(String name, String title, String message, Integer numStamps);
}
