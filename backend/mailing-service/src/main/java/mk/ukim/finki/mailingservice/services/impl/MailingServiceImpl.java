package mk.ukim.finki.mailingservice.services.impl;

import mk.ukim.finki.mailingservice.services.MailingService;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailingServiceImpl implements MailingService {

    private final JavaMailSender emailSender;

    public MailingServiceImpl(JavaMailSender emailSender) {
        this.emailSender = emailSender;
    }

    @Override
    public void SendMail(String to, String subject, String messageText) {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setFrom("Trip2MK");
            mail.setTo(to);
            mail.setSubject(subject);
            mail.setText(messageText);
            emailSender.send(mail);
    }
}
