package com.crowdwork.problem_solving_platform.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.crowdwork.problem_solving_platform.jwt.JwtAuthenticationHelper;
import com.crowdwork.problem_solving_platform.model.LoginRequest;
import com.crowdwork.problem_solving_platform.model.LoginResponse;
import com.crowdwork.problem_solving_platform.model.User;
import com.crowdwork.problem_solving_platform.repository.UserRepository;


@Service
public class AuthService {

	@Autowired
	UserRepository userRepository;
	
	PasswordEncoder passwordEncoder;
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	JwtAuthenticationHelper jwtHelper;
	@Autowired
	UserDetailsService userDetailsService;
	
	public LoginResponse authenticateUser(LoginRequest loginrequest) {
		this.doAuthenticate(loginrequest.getUsername(), loginrequest.getPassword());
		UserDetails userDetails=userDetailsService.loadUserByUsername(loginrequest.getUsername());
		String token=jwtHelper.generateToken(userDetails);
		LoginResponse response=LoginResponse.builder().token(token).build();
		User userDto=new User();
		Optional<User> use=userRepository.findByUsername(loginrequest.getUsername());
		User user=use.get();
		userDto.setEmail(user.getEmail());
		userDto.setName(user.getName());
		userDto.setUsername(user.getUsername());
		userDto.setId(user.getId());
		response.setUser(userDto);
		return response;
	}
	public void doAuthenticate(String username,String password) {
		UsernamePasswordAuthenticationToken authenticateToken=new UsernamePasswordAuthenticationToken(username, password);
		try {
			authenticationManager.authenticate(authenticateToken);
		}
		catch(BadCredentialsException e){
			throw new BadCredentialsException("Invalid Username or Password");
		}
	}
}
