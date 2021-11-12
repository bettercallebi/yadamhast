package com.yadamhast.core.entity.taskcategory;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface TaskCategoryRepository extends CrudRepository<TaskCategory, Long> {
}
