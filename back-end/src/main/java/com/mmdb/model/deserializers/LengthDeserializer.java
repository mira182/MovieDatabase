package com.mmdb.model.deserializers;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;


public class LengthDeserializer extends JsonDeserializer<Integer> {

    private static final Logger logger = LogManager.getLogger(LengthDeserializer.class);

    private static final String LENGTH_NAME = "Runtime";
    private static final String TIME_UNIT = "min";
    private static final String MISSING_VALUE = "N/A";

    @Override
    public Integer deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException {
        if (jp.getText().equals(MISSING_VALUE)) {
            return null;
        }

        if (jp.getCurrentName().equals(LENGTH_NAME)) {
            try {
                return Integer.parseInt(jp.getText().replace(TIME_UNIT, "").trim());
            } catch (NumberFormatException e) {
                logger.warn("Couldn't parse length={} of movie.", jp.getText(), e);
                return null;
            }
        } else {
            return Integer.parseInt(jp.getText());
        }
    }
}
