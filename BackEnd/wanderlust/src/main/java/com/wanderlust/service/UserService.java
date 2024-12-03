package com.wanderlust.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wanderlust.exceptions.UserNotFoundException;
import com.wanderlust.model.UserEntity;
import com.wanderlust.repository.UserRepository;

@Service
public class UserService {
	
	private final UserRepository userRepository;
	
	@Autowired 
	UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	// Método para crear un usuario
	public UserEntity newUser(UserEntity user) {
		return this.userRepository.save(user);
	}
	
	// Método para recuperar todos los usuarios
	public List<UserEntity> getAllUsers() {
		return this.userRepository.findAll();
	}
	
	// Método para recuperar un usuario por Id
	public UserEntity getById(Long id) {
		return this.userRepository.findById(id).
				orElseThrow(() -> new UserNotFoundException(id));
	}
	
	// Método para recuperar un usuario por Correo electrónico
	public UserEntity getByEmail(String email) {
		return this.userRepository.getByEmail(email);
	}
	
	// Método para recuperar un usuario por NombreUsuario
	public UserEntity getByUsername(String username) {
		return this.userRepository.getByUsername(username);
	}

}
