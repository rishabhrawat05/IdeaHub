package com.crowdwork.problem_solving_platform.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.crowdwork.problem_solving_platform.exception.UserAlreadyExists;
import com.crowdwork.problem_solving_platform.exception.UserNotFound;
import com.crowdwork.problem_solving_platform.model.User;
import com.crowdwork.problem_solving_platform.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User registerUser(User user) {
		Optional<User> OptUser=userRepository.findByUsername(user.getUsername());
		if(OptUser.isPresent()) {
			throw new UserAlreadyExists("Sorry User Already Exists");
		}
		BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
		String encodedPassword=bCryptPasswordEncoder.encode(user.getPassword());
		User new_user=new User();
		new_user.setName(user.getName());
		new_user.setEmail(user.getEmail());
		new_user.setPassword(encodedPassword);
		new_user.setUsername(user.getUsername());
		userRepository.save(new_user);
		return new_user;
	}
	
	public User getUserById(Long id) {
		Optional<User> OptUser=userRepository.findById(id);
		if(OptUser.isEmpty()) {
			throw new UserNotFound("User not found");
		}
		User user=OptUser.get();
		return user;
	}
}
