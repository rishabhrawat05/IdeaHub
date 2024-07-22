package com.crowdwork.problem_solving_platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crowdwork.problem_solving_platform.model.LoginRequest;
import com.crowdwork.problem_solving_platform.model.LoginResponse;
import com.crowdwork.problem_solving_platform.service.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthService authService;

	public AuthController(AuthService authService) {
		this.authService=authService;
		}
	@PostMapping("/signin")
	public ResponseEntity<LoginResponse> authenticateUser(@Valid @RequestBody LoginRequest loginrequest) {
		return new ResponseEntity<>(authService.authenticateUser(loginrequest),HttpStatus.OK);
	}

}
