package com.wanderlust.model;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "posts")
public class PostEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column (name = "id_post")
	private Long idPost;
		
	@Enumerated(EnumType.STRING)
	@Column(name = "privacy", nullable = false, unique = false)
	private Privacy privacy;
		
	@Column(name = "date", nullable = false, unique = false)
	private LocalDateTime date;
		
	@Column(name = "text", nullable = false, unique = false)
	private String text;
		
	@Lob
	@Column(name = "image", columnDefinition="BLOB")
	private byte[] image;

	//----------------------------------------------------------- 
	// Relación posts - users
	//-----------------------------------------------------------
		
	@ManyToOne
	@JoinColumn(name = "id_user", referencedColumnName = "id_usuario", nullable = false)
	@JsonIgnore
	private UserEntity user;
	
	public PostEntity() {
		
	}
	
	public PostEntity(Long idPost, Privacy privacy, LocalDateTime date, String text, byte[] image, UserEntity user) {
		this.idPost = idPost;
		this.privacy = privacy;
		this.date = date;
		this.text = text;
		this.image = image;
		this.user = user;
	}
	
	// Getters y Setters
	public Long getIdPost() {
		return idPost;
	}

	public void setIdPost(Long idPost) {
		this.idPost = idPost;
	}

	public Privacy getPrivacy() {
		return privacy;
	}

	public void setPrivacy(Privacy privacy) {
		this.privacy = privacy;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "PostEntity [idPost=" + idPost + ", privacy=" + privacy + ", date=" + date + ", text=" + text
				+ ", image=" + Arrays.toString(image) + ", user=" + user + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(image);
		result = prime * result + Objects.hash(date, idPost, privacy, text, user);
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PostEntity other = (PostEntity) obj;
		return Objects.equals(date, other.date) && Objects.equals(idPost, other.idPost)
				&& Arrays.equals(image, other.image) && privacy == other.privacy && Objects.equals(text, other.text)
				&& Objects.equals(user, other.user);
	}

	public enum Privacy {
		Public, 
		Private
	}

}