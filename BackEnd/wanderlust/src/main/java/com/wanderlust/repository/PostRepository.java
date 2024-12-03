package com.wanderlust.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wanderlust.model.PostEntity;


public interface PostRepository extends JpaRepository<PostEntity, Long>{
	
	/*@Query("SELECT p FROM PostEntity p WHERE p.user.idUsuario")*/
	
}
