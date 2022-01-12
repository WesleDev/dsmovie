package com.wesledev.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wesledev.dsmovie.entities.Score;
import com.wesledev.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
