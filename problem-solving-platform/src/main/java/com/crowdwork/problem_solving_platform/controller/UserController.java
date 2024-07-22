package com.crowdwork.problem_solving_platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crowdwork.problem_solving_platform.model.User;
import com.crowdwork.problem_solving_platform.service.UserService;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	UserService userService;

	@PostMapping("/user/register")
	public ResponseEntity<User> registerUser(@Valid @RequestBody User user) {
		User registered_user=userService.registerUser(user);
		return new ResponseEntity<User>(registered_user,HttpStatus.CREATED);
	}
	
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable Long id){
		return userService.getUserById(id);
	}
}
