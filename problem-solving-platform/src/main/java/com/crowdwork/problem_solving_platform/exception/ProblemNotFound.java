package com.crowdwork.problem_solving_platform.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ProblemNotFound extends RuntimeException {

	public ProblemNotFound(String message) {
		super(message);
	}
}
