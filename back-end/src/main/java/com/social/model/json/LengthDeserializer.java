package com.social.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;


public class LengthDeserializer extends JsonDeserializer<Integer> {

    private static final String LENGTH_NAME = "Runtime";

    private static final String TIME_UNIT = "min";

    @Override
    public Integer deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException {

        if (jp.getCurrentName().equals(LENGTH_NAME) && jp.getText().contains(TIME_UNIT)) {
            return Integer.parseInt(jp.getText().replace("min", "").trim());
        } else {
            return Integer.parseInt(jp.getText());
        }
    }
}
