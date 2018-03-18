package com.social.model.json;


import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.social.model.dto.MovieDTO;
import com.social.model.dto.OmdbMovieDTO;

import java.io.IOException;

public class MovieDeserializer extends StdDeserializer<OmdbMovieDTO> {

    private static final String MISSING_VALUE = "N/A";

    public MovieDeserializer(Class<MovieDTO> t) {
        super(t);
    }

    @Override
    public OmdbMovieDTO deserialize(JsonParser jp, DeserializationContext dc)
            throws IOException, JsonProcessingException {

        long id = 0;
        String name = null;
        String []languages = null;
        JsonToken currentToken = null;
        OmdbMovieDTO movieDTO = new OmdbMovieDTO();
        while ((currentToken = jp.nextValue()) != null) {
            if (jp.getCurrentName().equals("Title") && currentToken.asString().equals(MISSING_VALUE)) return null;
            if (currentToken.asString().equals(MISSING_VALUE)) {
                jp.setCurrentValue(null);
                continue;
            }

            switch (currentToken) {
                case VALUE_NUMBER_FLOAT:
                case VALUE_NUMBER_INT:
                    if (jp.getCurrentName().equals("id")) {
                        id = jp.getLongValue();
                    }
                    break;
                case VALUE_STRING:
                    switch (jp.getCurrentName()) {
                        case "name":
                            name = jp.getText();
                            break;
                        case "languages":
                            languages = jp.getText().split(";");
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
        return movieDTO;
    }
}
