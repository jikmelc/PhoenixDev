package com.wanderlust.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wanderlust.model.ReviewEntity;

public interface ReviewRepository extends JpaRepository<ReviewEntity, Long> {

}
