package com.wanderlust.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wanderlust.exceptions.PostNotFoundException;
import com.wanderlust.model.PostEntity;
import com.wanderlust.service.PostService;
import com.wanderlust.service.dto.PostDto;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class PostController {

    @Autowired
    private PostService postService;

    // Crear una nueva publicación
    @PostMapping
    public ResponseEntity<PostEntity> createPost(@RequestBody PostDto dto) {
        PostEntity createdPost = this.postService.createPost(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPost);
    }

    // Recuperar todas las publicaciones
    @GetMapping
    public ResponseEntity<List<PostEntity>> getAllPosts() {
        return ResponseEntity.ok(postService.getAllPosts());
    }

    // Recuperar una publicación por ID
    @GetMapping("/{postId}")
    public ResponseEntity<PostEntity> getPostById(@PathVariable(name = "postId") Long postId) {
    	try {
    		return ResponseEntity.ok(postService.getPostById(postId));    		
    	} catch (PostNotFoundException e) {
    		return ResponseEntity.notFound().build(); // Revisar. No está funcionando correctamente.
    	}
    }
    
    // Eliminar publicación por ID
    @DeleteMapping("delete-post/{id}")
	public void deletePost(@PathVariable (name="id") Long id) {
		this.postService.deletePost(id);
	}
}
