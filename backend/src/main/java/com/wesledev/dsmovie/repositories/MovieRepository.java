package com.wesledev.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wesledev.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
