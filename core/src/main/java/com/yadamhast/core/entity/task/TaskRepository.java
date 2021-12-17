package com.yadamhast.core.entity.task;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface TaskRepository extends CrudRepository<Task, Long> {

    @Query(name = "findAllTaskByUser", value = "select t from Task t where t.User.id=:id", nativeQuery = true)
    public List<Task> findAllTaskByUser(@Param(value = "id") Long id);

}
