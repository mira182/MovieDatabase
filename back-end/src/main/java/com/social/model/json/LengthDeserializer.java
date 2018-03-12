package com.social.model.json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;


public class LengthDeserializer extends StdDeserializer<Integer> {

    public LengthDeserializer() {
        this(null);
    }

    public LengthDeserializer(Class<?> vc) {
        super(vc);
    }

    @Override
    public Integer deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException,JsonProcessingException {
        JsonNode node = jp.getCodec().readTree(jp);
        Integer length = Integer.parseInt(node.get("Runtime").asText().replaceAll("[\\D]", ""));
        return length;
    }
}
