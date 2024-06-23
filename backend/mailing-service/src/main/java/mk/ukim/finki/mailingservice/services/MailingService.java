package mk.ukim.finki.mailingservice.services;

public interface MailingService {
    public void SendMail(String to, String subject, String message);
}
