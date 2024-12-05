package com.wanderlust.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wanderlust.exceptions.ReviewNotFoundException;
import com.wanderlust.exceptions.UserNotFoundException;
import com.wanderlust.model.ReviewEntity;
import com.wanderlust.model.UserEntity;
import com.wanderlust.repository.ReviewRepository;
import com.wanderlust.repository.UserRepository;
import com.wanderlust.service.dto.ReviewDto;

@Service
public class ReviewService {
	
	@Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private UserRepository userRepository;
    
    // Crear una Review que esté relacionado con un User (dto)
    public ReviewEntity createReview(ReviewDto dto) {
 		// Buscar el User mediante Id
 		UserEntity user = this.userRepository.findById(dto.getIdUsuario())
 				.orElseThrow(() -> new UserNotFoundException(dto.getIdUsuario()));
 		
 		// Crear el post con los atributos dto
 		ReviewEntity review = new ReviewEntity();
 		review.setTitle(dto.getTitle());
 		review.setPlace(dto.getPlace());
 		review.setImage(dto.getImage());
 		review.setDate(dto.getDate());
 		review.setText(dto.getText());
 		review.setStars(dto.getStars());
 		review.setPrivacy(dto.getPrivacy());
 		review.setUserReview(user);
 		
 		return this.reviewRepository.save(review);
 	}
    
 // Eliminar una review por id
 	public void deleteReview(Long id) {
 		if (this.reviewRepository.existsById(id)) {
 			this.reviewRepository.deleteById(id);
 		} else {
 			throw new ReviewNotFoundException(id);
 		}
 	}
    
}
