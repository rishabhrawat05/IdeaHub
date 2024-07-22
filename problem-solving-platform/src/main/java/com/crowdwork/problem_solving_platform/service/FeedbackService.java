package com.crowdwork.problem_solving_platform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crowdwork.problem_solving_platform.exception.ProblemNotFound;
import com.crowdwork.problem_solving_platform.model.Feedback;
import com.crowdwork.problem_solving_platform.model.Problem;
import com.crowdwork.problem_solving_platform.repository.FeedbackRepository;
import com.crowdwork.problem_solving_platform.repository.ProblemRepository;

import java.util.List;
import java.util.Optional;
@Service
public class FeedbackService {

	@Autowired
	FeedbackRepository feedbackRepository;
	
	@Autowired
	ProblemRepository problemRepository;
	
	public void createFeedback(Feedback feedback,Long problemId) {
		Optional<Problem> Optproblem=problemRepository.findById(problemId);
		if(Optproblem.isEmpty()) {
			throw new ProblemNotFound("Problem not found");
		}
		Feedback new_feedback=new Feedback();
		new_feedback.setFeedback(feedback.getFeedback());
		new_feedback.setProblem(Optproblem.get());
		feedbackRepository.save(new_feedback);
	}
	public List<Feedback> getFeedbackByProblemId(Long problemId){
		Optional<Problem> Optproblem=problemRepository.findById(problemId);
		if(Optproblem.isEmpty()) {
			throw new ProblemNotFound("Problem Not Found");
		}
		Problem problem=Optproblem.get();
		return feedbackRepository.findByProblem(problem);
	}
}
