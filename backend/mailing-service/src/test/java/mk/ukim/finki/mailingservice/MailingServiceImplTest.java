package mk.ukim.finki.mailingservice;

import mk.ukim.finki.mailingservice.services.impl.MailingServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class MailingServiceImplTest {

    @Mock
    private JavaMailSender emailSender;

    @InjectMocks
    private MailingServiceImpl mailingService;

    @Test
    void sendMail_invokesEmailSenderWithCorrectRecipientAndSubject() {
        mailingService.SendMail("user@example.com", "Test Subject", "Hello!");

        ArgumentCaptor<SimpleMailMessage> captor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        verify(emailSender).send(captor.capture());

        SimpleMailMessage sent = captor.getValue();
        assertThat(sent.getTo()).containsExactly("user@example.com");
        assertThat(sent.getSubject()).isEqualTo("Test Subject");
        assertThat(sent.getText()).isEqualTo("Hello!");
    }

    @Test
    void sendMail_setsFromToTripService() {
        mailingService.SendMail("to@example.com", "Subject", "Body");

        ArgumentCaptor<SimpleMailMessage> captor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        verify(emailSender).send(captor.capture());

        assertThat(captor.getValue().getFrom()).isEqualTo("Trip2MK");
    }

    @Test
    void sendMail_delegatesToEmailSenderOnce() {
        mailingService.SendMail("a@b.com", "S", "M");
        verify(emailSender).send(org.mockito.ArgumentMatchers.any(SimpleMailMessage.class));
    }
}
