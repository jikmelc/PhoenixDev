package com.wanderlust.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanderlust.exceptions.UserNotFoundException;
import com.wanderlust.model.UserEntity;
import com.wanderlust.service.UserService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class UserController {
	
	private final UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	// Método para mapear getAllUsers() todos los usuarios
	@GetMapping("/users")
	public ResponseEntity<List<UserEntity>> getUsers() {
		List<UserEntity> users = userService.getAllUsers();
		if (users.isEmpty()) {
			return ResponseEntity.noContent().build();
		}
        return ResponseEntity.ok(users);
	}
	
	// Método para mapear getById()
	@GetMapping("/users/{id}")
	public ResponseEntity<UserEntity> findById(@PathVariable(name="id")Long id) {
		try {
			return ResponseEntity.ok(this.userService.getById(id));
		}catch (UserNotFoundException e) {
			return ResponseEntity.notFound().build();
		}
	}
	
	// Método para mapear getByEmail()
	@GetMapping("/users/email/{email}")
	public ResponseEntity<UserEntity> findByEmail(@PathVariable (name = "email") String Email) {
		UserEntity user = this.userService.getByEmail(Email);
		
		if(user == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(user);
	}
	
	// Método para mapear getByUsername()
	
	@GetMapping("/users/username/{username}")
	public ResponseEntity<UserEntity> findByUsername(@PathVariable(name="username") String username) {
		UserEntity user = this.userService.getByUsername(username);
		if (user == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(user);
	}
	
	// Método para mapear newUser()
	@PostMapping
	public ResponseEntity<UserEntity> newUser(@RequestBody UserEntity user) {
		
		
		if(this.userService.getByEmail(user.getEmail()) != null) {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		return ResponseEntity.ok(this.userService.newUser(user));
	}
	

}
