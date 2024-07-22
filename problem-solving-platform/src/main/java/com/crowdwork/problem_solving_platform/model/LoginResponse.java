package com.crowdwork.problem_solving_platform.model;

import lombok.Builder;

@Builder
public class LoginResponse {

	private User user;
	
	private String token;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}
