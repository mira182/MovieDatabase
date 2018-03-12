package com.social;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.CommonsRequestLoggingFilter;


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
