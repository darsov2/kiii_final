package mk.ukim.finki.trip2mk.event;

import lombok.Data;
import mk.ukim.finki.trip2mk.entities.Korisnici;
import org.springframework.context.ApplicationEvent;

public class OnRegistrationSuccessEvent extends ApplicationEvent {
    private static final long serialVersionUID = 1L;
    private String appUrl;
    private Korisnici user;

    public OnRegistrationSuccessEvent(Korisnici user, String appUrl) {
        super(user);
        this.user = user;
        this.appUrl = appUrl;
    }

    public String getAppUrl() {
        return appUrl;
    }

    public void setAppUrl(String appUrl) {
        this.appUrl = appUrl;
    }

    public Korisnici getUser() {
        return user;
    }

    public void setUser(Korisnici user) {
        this.user = user;
    }
}