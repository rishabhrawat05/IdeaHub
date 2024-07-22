package com.crowdwork.problem_solving_platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crowdwork.problem_solving_platform.model.Feedback;
import com.crowdwork.problem_solving_platform.model.Problem;
import java.util.List;
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

	List<Feedback> findByProblem(Problem problem);
}
