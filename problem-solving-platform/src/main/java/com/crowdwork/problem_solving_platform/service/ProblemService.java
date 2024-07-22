package com.crowdwork.problem_solving_platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.crowdwork.problem_solving_platform.exception.ProblemNotFound;
import com.crowdwork.problem_solving_platform.exception.UserNotFound;
import com.crowdwork.problem_solving_platform.model.Problem;
import com.crowdwork.problem_solving_platform.model.User;
import com.crowdwork.problem_solving_platform.repository.ProblemRepository;
import com.crowdwork.problem_solving_platform.repository.UserRepository;

@Service
public class ProblemService {

	@Autowired
	ProblemRepository problemRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public void createproblem(Problem problem,Long userId) {
		Optional<User> Optuser=userRepository.findById(userId);
		if(Optuser.isEmpty()) {
			throw new UserNotFound("user not found");
		}
		User user=Optuser.get();
		
		Problem new_problem=new Problem();
		new_problem.setTitle(problem.getTitle());
		new_problem.setDescription(problem.getDescription());
		new_problem.setUser(user);
		
		problemRepository.save(new_problem);
		
	}
	public List<Problem> getAllProblems(){
		return problemRepository.findAll();
	}
	
	public void updateProblem(Problem problem) {
		Optional<Problem> Optproblem=problemRepository.findById(problem.getId());
		if(Optproblem.isEmpty()) {
			throw new ProblemNotFound("Problem not found");
		}
		Problem update_problem=Optproblem.get();
		update_problem.setTitle(problem.getTitle());
		update_problem.setDescription(problem.getDescription());
		update_problem.setUpvote(problem.getUpvote());
		update_problem.setDownvote(problem.getDownvote());
		problemRepository.save(update_problem);
	}
	public Problem getProblemById(Long id) {
		Optional<Problem> Optproblem=problemRepository.findById(id);
		if(Optproblem.isEmpty()) {
			throw new ProblemNotFound("Problem not found");
		}
		return Optproblem.get();
	}
	
	public List<Problem> getAllProblemById(Long userId){
		Optional<User> Optuser=userRepository.findById(userId);
		if(Optuser.isEmpty()) {
			throw new UserNotFound("User not found");
		}
		User user=Optuser.get();
		return problemRepository.findByUser(user);
	}
	
}
