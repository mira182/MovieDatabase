package com.mmdb.model.deserializers;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;


public class ImdbRatingDeserializer extends JsonDeserializer<Double> {

    private static final String IMDB_RATING_NAME = "imdbRating";

    private static final String MISSING_VALUE = "N/A";

    @Override
    public Double deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException {

        if (jp.getCurrentName().equals(IMDB_RATING_NAME) && jp.getText().equals(MISSING_VALUE)) {
            return null;
        } else {
            return Double.parseDouble(jp.getText());
        }
    }
}
