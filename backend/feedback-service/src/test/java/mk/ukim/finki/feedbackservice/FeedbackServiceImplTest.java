package mk.ukim.finki.feedbackservice;

import mk.ukim.finki.feedbackservice.entites.Feedback;
import mk.ukim.finki.feedbackservice.repository.FeedbackRepository;
import mk.ukim.finki.feedbackservice.service.impl.FeedbackServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class FeedbackServiceImplTest {

    @Mock
    private FeedbackRepository feedbackRepository;

    @InjectMocks
    private FeedbackServiceImpl feedbackService;

    @Test
    void listAllFeedbacks_returnsAll() {
        when(feedbackRepository.findAll()).thenReturn(List.of(
                new Feedback("Alice", "Great", "Loved it!", 5, LocalDateTime.now()),
                new Feedback("Bob", "Ok", "It was fine", 3, LocalDateTime.now())
        ));

        assertThat(feedbackService.listAllFeedbacks()).hasSize(2);
    }

    @Test
    void findById_notFound_throwsException() {
        when(feedbackRepository.findById(99L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> feedbackService.findById(99L))
                .isInstanceOf(RuntimeException.class)
                .hasMessage("Feedback not found");
    }

    @Test
    void createFeedback_savesAndReturns() {
        Feedback saved = new Feedback("Carol", "Title", "Nice!", 4, LocalDateTime.now());
        when(feedbackRepository.save(any(Feedback.class))).thenReturn(saved);

        Feedback result = feedbackService.createFeedback("Carol", "Title", "Nice!", 4);

        assertThat(result.getNickname()).isEqualTo("Carol");
    }
}
