package mk.ukim.finki.feedbackservice.controller;

import mk.ukim.finki.feedbackservice.entites.Feedback;
import mk.ukim.finki.feedbackservice.service.FeedbackService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping("/")
    public List<Feedback> getAllFeedbacks()
    {
        return feedbackService.listAllFeedbacks();
    }

    @GetMapping("/{id}")
    public Feedback getFeedbackById(@PathVariable Long id)
    {
        return feedbackService.findById(id);
    }

    @PostMapping("/add")
    public Feedback addFeedback(@RequestParam(required = false) String name,
                                @RequestParam(required = false) String title,
                                @RequestParam String message,
                                @RequestParam Integer numStars)
    {
        return feedbackService.createFeedback(name, title, message, numStars);
    }
}
