package com.wanderlust.exceptions;

public class ReviewNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 3L;
	
	public ReviewNotFoundException(Long id) {
		super("La review con el id: " + id + " No existe");
	}

}
