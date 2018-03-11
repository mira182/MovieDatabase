package com.social.model.entities;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private Integer year;

    private String description;

    private Integer imdbRating;

    private Integer length;
}
