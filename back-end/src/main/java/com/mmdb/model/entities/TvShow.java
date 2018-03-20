package com.mmdb.model.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Tvshow")
public class TvShow {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String year;

    @Lob
    @Column(length = 3000)
    private String description;

    private Double imdbRating;

    private Integer length;

    private String actors;

    private String directors;

    private String country;

//    @Lob
//    @Column( length = 100000 )
//    private byte[] poster;

    private String posterUrl;

    private String production;

    private  String genre;
}
