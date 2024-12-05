package com.wanderlust.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanderlust.model.ReviewEntity;
import com.wanderlust.service.ReviewService;
import com.wanderlust.service.dto.ReviewDto;

@RestController
@RequestMapping("/api/reviews")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	// Crear una Review
	@PostMapping
	public ResponseEntity<ReviewEntity> createReview(@RequestBody ReviewDto dto) {
		ReviewEntity reviewCreated = this.reviewService.createReview(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(reviewCreated);
	}
	
	// Eliminar Review
	@DeleteMapping("/delete-review/{id}")
	public void deleteReview(@PathVariable(name="id") Long id) {
		this.reviewService.deleteReview(id);
	}

}
