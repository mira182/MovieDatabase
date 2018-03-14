package com.social.services.importing;

import com.social.SpringConfigForTests;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Arrays;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {SpringConfigForTests.class})
public class OmdbMoviesDataImporterTest {

    @Autowired
    private OmdbMoviesDataImporter omdbMoviesDataImporter;

    @Test
    public void importOmdbMovies() {
        omdbMoviesDataImporter.importMoviesData(OmdbMoviesDataImporter.MOVIES);
    }
}