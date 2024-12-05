package com.wanderlust.model;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wanderlust.model.PostEntity.Privacy;

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
@Table(name = "reviews")
public class ReviewEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "id_review")
	private Long idReview;

	@Column(name = "date", nullable = false, unique = false)
	private LocalDateTime date;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "privacy", nullable = false, unique = false)
	private Privacy privacy;
	
	@Column(name = "text", nullable = false, unique = false)
	private String text;
	
	@Lob
	@Column(name = "image", columnDefinition="BLOB", nullable = false)
	private byte[] image;
	
	@Column(name = "title", length = 128, nullable = false, unique = false)
	private String title;
	
	@Column(name = "place", length = 128, nullable = false, unique= false)
	private String place;
	
	@Column(name = "stars", nullable = false, unique = false)
	private Integer stars;
	
	//----------------------------------------------------------- 
	// Relación reviews - users
	//-----------------------------------------------------------
			
	@ManyToOne
	@JoinColumn(name = "id_user", referencedColumnName = "id_usuario", nullable = false)
	@JsonIgnore
	private UserEntity userReview;
	
	public ReviewEntity() {
		
	}

	public ReviewEntity(Long idReview, LocalDateTime date, Privacy privacy, String text, byte[] image, String title,
			String place, Integer stars, UserEntity userReview) {
		this.idReview = idReview;
		this.date = date;
		this.privacy = privacy;
		this.text = text;
		this.image = image;
		this.title = title;
		this.place = place;
		this.stars = stars;
		this.userReview = userReview;
	}
	
	public Long getIdReview() {
		return idReview;
	}

	public void setIdReview(Long idReview) {
		this.idReview = idReview;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	public Privacy getPrivacy() {
		return privacy;
	}

	public void setPrivacy(Privacy privacy) {
		this.privacy = privacy;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public Integer getStars() {
		return stars;
	}

	public void setStars(Integer stars) {
		this.stars = stars;
	}

	public UserEntity getUserReview() {
		return userReview;
	}

	public void setUserReview(UserEntity userReview) {
		this.userReview = userReview;
	}

	@Override
	public String toString() {
		return "ReviewEntity [idReview=" + idReview + ", date=" + date + ", privacy=" + privacy + ", text=" + text
				+ ", image=" + Arrays.toString(image) + ", title=" + title + ", place=" + place + ", stars=" + stars
				+ ", userReview=" + userReview + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + Arrays.hashCode(image);
		result = prime * result + Objects.hash(date, idReview, place, privacy, stars, text, title, userReview);
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
		ReviewEntity other = (ReviewEntity) obj;
		return Objects.equals(date, other.date) && Objects.equals(idReview, other.idReview)
				&& Arrays.equals(image, other.image) && Objects.equals(place, other.place) && privacy == other.privacy
				&& Objects.equals(stars, other.stars) && Objects.equals(text, other.text)
				&& Objects.equals(title, other.title) && Objects.equals(userReview, other.userReview);
	}
	
}
