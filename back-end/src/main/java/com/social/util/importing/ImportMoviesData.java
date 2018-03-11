package com.social.util.importing;


import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

public class ImportMoviesData {

    public static void getEmployees(List<String> titles) {
        String uri = "http://www.omdbapi.com/?t={title}&apikey=BanMePls";

        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<>("parameters", headers);

        for (String title : titles) {
            uri = uri.replace("{title}", title);
            ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);
            JSONObject jsonObject = new JSONObject(result.getBody());
            System.out.println(jsonObject.getString("Title"));
        }
    }
}
