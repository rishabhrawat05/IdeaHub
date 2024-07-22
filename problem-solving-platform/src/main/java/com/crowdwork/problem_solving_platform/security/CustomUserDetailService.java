package com.crowdwork.problem_solving_platform.security;



import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.crowdwork.problem_solving_platform.repository.UserRepository;


@Service
public class CustomUserDetailService implements UserDetailsService {

	private UserRepository userRepository;
	
	public CustomUserDetailService(UserRepository userRepository) {
		this.userRepository=userRepository;
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		return this.userRepository.findByUsername(username).orElseThrow(()-> new UsernameNotFoundException("Sorry User Not Found"));
	}

}
