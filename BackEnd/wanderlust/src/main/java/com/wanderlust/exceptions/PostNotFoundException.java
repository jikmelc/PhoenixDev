package com.wanderlust.exceptions;

public class PostNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 2L;
	
	public PostNotFoundException(Long id) {
		super("El post con el id " + id + " no existe.");
	}

}
