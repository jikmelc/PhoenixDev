package com.wanderlust.exceptions;

public class UserNotFoundException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;

	public UserNotFoundException(Long id) {
		super("El usuario con el id " + id + " no existe.");
	}

}
