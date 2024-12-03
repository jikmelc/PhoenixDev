package com.wanderlust.model;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuarios")
public class UserEntity {
	
	@Id // Indica que esta será la llave primaria de la entidad
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Indica que este valor será único y autoincrementado
	@Column(name="id_usuario") 
	private Long idUsuario; 
	
	@Column(name="nombres", length=100,  nullable=false, unique=false)
	private String nombres;
	
	@Column(name="apellidos", length=100, nullable=false, unique=false)
	private String apellidos;
	
	@Column(name="nombre_usuario", length=100, nullable=false, unique=true)
	private String nombreUsuario;
	
	@Column(name="fecha_de_nacimiento", nullable=false)
	private LocalDateTime fechaDeNacimiento;
	
	@Enumerated(EnumType.STRING)
	@Column(name="genero", nullable=false)
	private Genero genero;
	
	@Column(name="email", length=100, nullable=false, unique=true)
	private String email;
	
	@Column(name="contraseña", length=100, nullable=false, unique=false)
	private String contraseña;

	// Constructor vacío para poder trabajar con Jpa
	public UserEntity() {
		
	}

	public UserEntity(Long idUsuario, String nombres, String apellidos, String nombreUsuario,
			LocalDateTime fechaDeNacimiento, Genero genero, String email, String contraseña, List<PostEntity> posts,
			List<ReviewEntity> reviews) {
		this.idUsuario = idUsuario;
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.nombreUsuario = nombreUsuario;
		this.fechaDeNacimiento = fechaDeNacimiento;
		this.genero = genero;
		this.email = email;
		this.contraseña = contraseña;
		this.posts = posts;
		this.reviews = reviews;
	}

	public Long getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(Long idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getNombres() {
		return nombres;
	}

	public void setNombres(String nombre) {
		this.nombres = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellido) {
		this.apellidos = apellido;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreDeUsuario) {
		this.nombreUsuario = nombreDeUsuario;
	}

	public LocalDateTime getFechaDeNacimiento() {
		return fechaDeNacimiento;
	}

	public void setFechaDeNacimiento(LocalDateTime fechaDeNacimiento) {
		this.fechaDeNacimiento = fechaDeNacimiento;
	}

	public Genero getGenero() {
		return genero;
	}

	public void setGenero(Genero genero) {
		this.genero = genero;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContraseña() {
		return contraseña;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}
	
	@Override
	public String toString() {
		return "UserEntity [idUsuario=" + idUsuario + ", nombres=" + nombres + ", apellidos=" + apellidos
				+ ", nombreUsuario=" + nombreUsuario + ", fechaDeNacimiento=" + fechaDeNacimiento + ", genero=" + genero
				+ ", email=" + email + ", contraseña=" + contraseña + ", posts=" + posts + ", reviews=" + reviews + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(apellidos, contraseña, email, fechaDeNacimiento, genero, idUsuario, nombreUsuario, nombres,
				posts, reviews);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserEntity other = (UserEntity) obj;
		return Objects.equals(apellidos, other.apellidos) && Objects.equals(contraseña, other.contraseña)
				&& Objects.equals(email, other.email) && Objects.equals(fechaDeNacimiento, other.fechaDeNacimiento)
				&& genero == other.genero && Objects.equals(idUsuario, other.idUsuario)
				&& Objects.equals(nombreUsuario, other.nombreUsuario) && Objects.equals(nombres, other.nombres)
				&& Objects.equals(posts, other.posts) && Objects.equals(reviews, other.reviews);
	}
	

	//-----------------------------------------------
	// Relación de User con Posts
	//-----------------------------------------------
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<PostEntity> posts;
	
	public List<PostEntity> getPosts() {
		return posts;
	}

	public void setPosts(List<PostEntity> posts) {
		this.posts = posts;
	}
	
	
	//-----------------------------------------------
	// Relación de User con Reviews
	//-----------------------------------------------
	@OneToMany(mappedBy = "userReview", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<ReviewEntity> reviews;

	public List<ReviewEntity> getReviews() {
		return reviews;
	}

	public void setReviews(List<ReviewEntity> reviews) {
		this.reviews = reviews;
	}

	private enum Genero {
		F, // Femenino 
		M, // Masculino
		N, // Prefiero no responder
		O // Otro
	}

}
