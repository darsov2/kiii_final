package mk.ukim.finki.trip2mk.service.Impl;

import mk.ukim.finki.trip2mk.service.RestEmailServiceCommunication;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
public class RestEmailServiceCommunicationImpl implements RestEmailServiceCommunication {
    @Override
    public void GetEmailSend(String url, String to, String subject, String message) {

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> requestBody = new LinkedMultiValueMap<>();
        requestBody.put("to", Collections.singletonList(to));
        requestBody.put("subject", Collections.singletonList(subject));
        requestBody.put("message", Collections.singletonList(message));

        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);


        restTemplate.postForEntity(url, requestEntity, Void.class);
    }
}
