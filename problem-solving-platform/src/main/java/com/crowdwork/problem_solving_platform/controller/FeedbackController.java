package com.crowdwork.problem_solving_platform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crowdwork.problem_solving_platform.model.Feedback;
import com.crowdwork.problem_solving_platform.service.FeedbackService;
import java.util.List;
@RestController
@RequestMapping("/api")
public class FeedbackController {
	
	@Autowired
	FeedbackService feedbackService;
	

	@PostMapping("/feedback/create/{problemId}")
	public void createFeedback(@RequestBody Feedback feedback,@PathVariable Long problemId) {
		feedbackService.createFeedback(feedback,problemId);
	}
	@GetMapping("/feedback/{problemId}")
	public List<Feedback> getFeedbackByProblemId(@PathVariable Long problemId){
		return feedbackService.getFeedbackByProblemId(problemId);
	}
}
