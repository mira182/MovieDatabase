package com.social.services.importing;

import com.social.config.SpringConfigForTests;
import com.social.dao.MovieRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.AnnotationConfigContextLoader;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {SpringConfigForTests.class}, loader = AnnotationConfigContextLoader.class)
public class OmdbMoviesDataImporterTest {

    @Autowired
    private OmdbMoviesDataImporter omdbMoviesDataImporter;

    @Autowired
    private MovieRepository movieRepository;

    @Test
    public void importOmdbMovies() {
        omdbMoviesDataImporter.importMoviesData(OmdbMoviesDataImporter.MOVIES);
    }
}