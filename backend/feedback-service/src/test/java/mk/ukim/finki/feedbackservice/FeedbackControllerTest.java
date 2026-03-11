package mk.ukim.finki.feedbackservice;

import mk.ukim.finki.feedbackservice.controller.FeedbackController;
import mk.ukim.finki.feedbackservice.entites.Feedback;
import mk.ukim.finki.feedbackservice.service.FeedbackService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.List;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(FeedbackController.class)
class FeedbackControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FeedbackService feedbackService;

    @Test
    void getAllFeedbacks_returnsOkWithList() throws Exception {
        Feedback f = new Feedback("Alice", "Title", "Great!", 5, LocalDateTime.now());
        when(feedbackService.listAllFeedbacks()).thenReturn(List.of(f));

        mockMvc.perform(get("/api/feedback/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].nickname").value("Alice"))
                .andExpect(jsonPath("$[0].numStars").value(5));
    }

    @Test
    void getFeedbackById_returnsOkWithFeedback() throws Exception {
        Feedback f = new Feedback("Bob", "Title", "Nice", 4, LocalDateTime.now());
        when(feedbackService.findById(1L)).thenReturn(f);

        mockMvc.perform(get("/api/feedback/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nickname").value("Bob"))
                .andExpect(jsonPath("$.numStars").value(4));
    }

    @Test
    void addFeedback_returnsCreatedFeedback() throws Exception {
        Feedback f = new Feedback("Carol", "Title", "Hello!", 3, LocalDateTime.now());
        when(feedbackService.createFeedback("Carol", "Title", "Hello!", 3)).thenReturn(f);

        mockMvc.perform(post("/api/feedback/add")
                        .param("name", "Carol")
                        .param("title", "Title")
                        .param("message", "Hello!")
                        .param("numStars", "3"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nickname").value("Carol"));

        verify(feedbackService).createFeedback("Carol", "Title", "Hello!", 3);
    }
}
