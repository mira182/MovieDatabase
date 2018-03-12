package com.social.services.importing;

import com.social.model.dto.OmdbMovieDTO;
import org.json.JSONObject;

import java.util.List;

public interface MovieDataImporter {

    OmdbMovieDTO getMovieData(String title);

    List<OmdbMovieDTO> getMovieData(List<String> titles);

    void importMovieData(String title);

    void importMoviesData(List<String> title);
}