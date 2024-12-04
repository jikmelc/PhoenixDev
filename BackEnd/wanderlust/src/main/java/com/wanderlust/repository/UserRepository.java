package com.wanderlust.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wanderlust.model.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
	
	@Query("SELECT u FROM UserEntity u WHERE u.email = ?1")
	UserEntity getByEmail(String Email);
	
	@Query("SELECT u from UserEntity u WHERE u.nombreUsuario = ?1")
	UserEntity getByUsername(String username);
	
}
