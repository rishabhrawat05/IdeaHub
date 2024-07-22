package com.crowdwork.problem_solving_platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crowdwork.problem_solving_platform.model.Problem;
import com.crowdwork.problem_solving_platform.model.User;
import java.util.List;
@Repository
public interface ProblemRepository extends JpaRepository<Problem,Long>{
 
	List<Problem> findByUser(User user);
}
