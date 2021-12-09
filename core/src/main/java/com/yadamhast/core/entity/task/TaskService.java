package com.yadamhast.core.entity.task;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> list(Long id) {
        return repository.findAllTaskByUser(id);
    }

    public List<Task> allTask() {
        return (List<Task>) repository.findAll();
    }

    public Optional<Task> load(Long id) {
        return repository.findById(id);
    }

    public Long save(Task task){
        return repository.save(task).getId();
    }

    public Long delete(Long id){
        repository.deleteById(id);
        return id;
    }

}
