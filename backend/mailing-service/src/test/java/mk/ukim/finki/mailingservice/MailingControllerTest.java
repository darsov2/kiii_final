package mk.ukim.finki.mailingservice;

import mk.ukim.finki.mailingservice.controller.MailingController;
import mk.ukim.finki.mailingservice.services.MailingService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(MailingController.class)
class MailingControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MailingService mailingService;

    @Test
    void sendMail_returnsOk() throws Exception {
        doNothing().when(mailingService).SendMail("user@example.com", "Hello", "Test message");

        mockMvc.perform(post("/api/email/send")
                        .param("to", "user@example.com")
                        .param("subject", "Hello")
                        .param("message", "Test message"))
                .andExpect(status().isOk());

        verify(mailingService).SendMail("user@example.com", "Hello", "Test message");
    }
}
