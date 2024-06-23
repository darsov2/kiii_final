package mk.ukim.finki.trip2mk.service;

public interface RestEmailServiceCommunication {
    void GetEmailSend(String url, String to, String subject, String message);
}
