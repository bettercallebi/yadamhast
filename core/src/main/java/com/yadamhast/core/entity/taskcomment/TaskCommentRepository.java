package com.yadamhast.core.entity.taskcomment;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface TaskCommentRepository extends CrudRepository<TaskComment, Long> {
}
