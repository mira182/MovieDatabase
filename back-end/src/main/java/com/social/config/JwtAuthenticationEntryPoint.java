package com.social.config;

import com.social.controller.error.ApiErrorResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serializable;

@Component
class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint, Serializable {

    @Override
    public void commence(HttpServletRequest request,
                         HttpServletResponse response,
                         AuthenticationException authException) throws IOException {

        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");

//        response.setContentType("application/json");
//        PrintWriter writer = response.getWriter();
//        writer.write(new ApiErrorResponse(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage()).toString());
//        writer.flush();
    }
}