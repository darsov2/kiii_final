package mk.ukim.finki.trip2mk.listeners;

import mk.ukim.finki.trip2mk.entities.Korisnici;
import mk.ukim.finki.trip2mk.event.OnRegistrationSuccessEvent;
import mk.ukim.finki.trip2mk.service.KorisniciService;
import mk.ukim.finki.trip2mk.service.RestEmailServiceCommunication;
import org.springframework.context.ApplicationListener;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Component
public class RegistrationEmailListener implements ApplicationListener<OnRegistrationSuccessEvent> {

    private final KorisniciService korisniciService;
    private final Environment environment;
    private final RestEmailServiceCommunication restEmailServiceCommunication;

    public RegistrationEmailListener(KorisniciService korisniciService, Environment environment, RestEmailServiceCommunication restEmailServiceCommunication) {
        this.korisniciService = korisniciService;
        this.environment = environment;
        this.restEmailServiceCommunication = restEmailServiceCommunication;
    }

    @Override
    public void onApplicationEvent(OnRegistrationSuccessEvent event) {
        Korisnici u = event.getUser();
        String url = environment.getProperty("email-service.url");
        String to = u.getEmail();
        String link = url + "/auth/confirm?token=" + u.getToken();
        String subject = "Trip2MK - Registration Confirmation";
        String message = "Dear,\n\nWe are happy to have you here. In order to enable your account, you have to confirm your registration on the following link \n\n" + link;
        restEmailServiceCommunication.GetEmailSend("http://localhost:8082/api/email/send", to, subject, message);
    }

    @Override
    public boolean supportsAsyncExecution() {
        return ApplicationListener.super.supportsAsyncExecution();
    }
}