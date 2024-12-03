package com.wanderlust.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wanderlust.exceptions.PostNotFoundException;
import com.wanderlust.exceptions.UserNotFoundException;
import com.wanderlust.model.PostEntity;
import com.wanderlust.model.UserEntity;
import com.wanderlust.repository.PostRepository;
import com.wanderlust.repository.UserRepository;
import com.wanderlust.service.dto.PostDto;

import jakarta.transaction.Transactional;


@Service
public class PostService {
	
	@Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;


    // Recuperar todas las publicaciones
    public List<PostEntity> getAllPosts() {
        return postRepository.findAll();
    }

    // Recuperar una publicación por ID
    public PostEntity getPostById(Long postId) {
        return postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Publicación no encontrada"));
    }
    
    // Crear un Post que esté relacionado con un User (dto)
 	// Crear un PostDto para recibir los datos del Post asociado al idUsuario
 	public PostEntity createPost(PostDto dto) {
 		// Buscar el User mediante Id
 		UserEntity user = this.userRepository.findById(dto.getIdUsuario())
 				.orElseThrow(() -> new UserNotFoundException(dto.getIdUsuario()));
 		
 		// Crear el post con los atributos dto
 		PostEntity post = new PostEntity();
 		post.setDate(dto.getDate());
 		post.setPrivacy(dto.getPrivacy());
 		post.setText(dto.getText());
 		post.setImage(dto.getImage());
 		post.setUser(user);
 		
 		return this.postRepository.save(post);
 	}
 	
 	// Eliminar publicación por id
 	public void deletePost(Long id){
 		if (this.postRepository.existsById(id)) {
 			this.postRepository.deleteById(id);
 		} else {
 			throw new PostNotFoundException(id);
 		}
 	}
}
