package mk.ukim.finki.mailingservice.controller;

import mk.ukim.finki.mailingservice.services.MailingService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/email")
public class MailingController {

    private final MailingService mailingService;

    public MailingController(MailingService mailingService) {
        this.mailingService = mailingService;
    }

    @PostMapping("/send")
    public void sendMail(@RequestParam String to,
                         @RequestParam String subject,
                         @RequestParam String message)
    {
        mailingService.SendMail(to, subject, message);
    }
}
