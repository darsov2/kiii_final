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
    void sendMail_sendsToCorrectRecipient() {
        mailingService.SendMail("user@example.com", "Subject", "Body");

        ArgumentCaptor<SimpleMailMessage> captor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        verify(emailSender).send(captor.capture());

        assertThat(captor.getValue().getTo()).containsExactly("user@example.com");
        assertThat(captor.getValue().getSubject()).isEqualTo("Subject");
    }

    @Test
    void sendMail_setsFromToTripService() {
        mailingService.SendMail("to@example.com", "Subject", "Body");

        ArgumentCaptor<SimpleMailMessage> captor = ArgumentCaptor.forClass(SimpleMailMessage.class);
        verify(emailSender).send(captor.capture());

        assertThat(captor.getValue().getFrom()).isEqualTo("Trip2MK");
    }
}
