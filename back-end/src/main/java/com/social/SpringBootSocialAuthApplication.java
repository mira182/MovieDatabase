package com.social;

import com.social.services.importing.MovieDataImporter;
import com.social.services.importing.OmdbMoviesDataImporter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

import java.util.Arrays;


@SpringBootApplication
public class SpringBootSocialAuthApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootSocialAuthApplication.class, args);
//        List<String> titles = new ArrayList<>();
//        titles.add("superman");
//		ImportMoviesData.getEmployees(titles);
	}

	@Bean
	public CommonsRequestLoggingFilter requestLoggingFilter() {
		CommonsRequestLoggingFilter loggingFilter = new CommonsRequestLoggingFilter();
        loggingFilter.setIncludeHeaders(true);
		loggingFilter.setIncludeClientInfo(true);
		loggingFilter.setIncludeQueryString(true);
		loggingFilter.setIncludePayload(true);
		return loggingFilter;
	}
}
