package com.mmdb.model.deserializers;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;


public class PosterDeserializer extends JsonDeserializer<String> {

    private static final String MISSING_VALUE = "N/A";

    @Override
    public String deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException {
        if (jp.getText().equals(MISSING_VALUE)) {
            return "";
        } else {
            return jp.getText();
        }
    }
}
