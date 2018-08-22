package com.mmdb.model.entities;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "Movie")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
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
