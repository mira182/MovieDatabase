package com.mmdb.model.deserializers;


import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.mmdb.model.dto.outer.omdb.OmdbMovieDTO;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;

public class OMDBMovieDeserializer extends JsonDeserializer<OmdbMovieDTO> {

    private static final Logger logger = LogManager.getLogger(OMDBMovieDeserializer.class);

    private static final String MISSING_VALUE = "N/A";

    public OMDBMovieDeserializer() {
        super();
    }

//    public OMDBMovieDeserializer(Class<OmdbMovieDTO> t) {
//        super(t);
//    }

    @Override
    public OmdbMovieDTO deserialize(JsonParser jp, DeserializationContext dc) throws IOException {
        Double imdbRating = null;
        String year = null;
        Integer length = null;
        String name = null;
        String description = null;
        String actors = null;
        String directors = null;
        String country = null;
        String poster = null;
        String production = null;
        String genre = null;

        JsonToken currentToken = null;
        while ((currentToken = jp.nextValue()) != null) {
            final String currentValue = jp.getText();
            switch (currentToken) {
                case VALUE_NUMBER_FLOAT:
                case VALUE_NUMBER_INT:
                case VALUE_STRING:
                    switch (jp.getCurrentName()) {
                        case "Title":
                            name = currentValue;
                            break;
                        case "Year":
                            year = currentValue;
                            break;
                        case "Plot":
                            description = currentValue;
                            break;
                        case "Actors":
                            actors = currentValue;
                            break;
                        case "Director":
                            directors = currentValue;
                            break;
                        case "Country":
                            country = currentValue;
                            break;
                        case "Poster":
                            poster = currentValue;
                            if (poster.equals(MISSING_VALUE)) poster = "";
                            break;
                        case "Production":
                            production = currentValue;
                            break;
                        case "Genre":
                            genre = currentValue;
                            break;
                        case "imdbRating":
                            if (currentValue.equals(MISSING_VALUE)) break;
                            try {
                                imdbRating = Double.parseDouble(currentValue);
                            } catch (NumberFormatException e) {
                                imdbRating = null;
                            }
                            break;
                        case "Runtime":
                            if (currentValue.equals(MISSING_VALUE)) break;
                            try {
                                length = Integer.parseInt(currentValue.replace("min", "").trim());
                            } catch (NumberFormatException e) {
                                length = null;
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        }

        OmdbMovieDTO movie = new OmdbMovieDTO(name, year, description, imdbRating, length, actors, directors, country, poster, production, genre);

        logger.debug("Movie from deserializer: {}", movie);
        return movie;
    }
}
