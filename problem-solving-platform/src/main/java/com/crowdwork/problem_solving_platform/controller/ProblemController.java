package com.crowdwork.problem_solving_platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crowdwork.problem_solving_platform.model.Problem;
import com.crowdwork.problem_solving_platform.service.ProblemService;
import java.util.List;
@RestController
@RequestMapping("/api")
public class ProblemController {
	
	@Autowired
	ProblemService problemService;

	@PostMapping("/problem/{userId}")
	public void createproblem(@RequestBody Problem problem,@PathVariable Long userId) {
		problemService.createproblem(problem,userId);
	}
	
	@GetMapping("/problems")
	public List<Problem> getAllProblems(){
		return problemService.getAllProblems();
	}
	
	@PutMapping("/update")
	public void updateProblem(@RequestBody Problem problem) {
		problemService.updateProblem(problem);
	}
	@GetMapping("/problem/get/{id}")
	public Problem getProblemById(@PathVariable Long id) {
		return problemService.getProblemById(id);
	}
	@GetMapping("/problem/getAll/{userId}")
	public List<Problem> getAllProblemById(@PathVariable Long userId){
		return problemService.getAllProblemById(userId);
	}
}
