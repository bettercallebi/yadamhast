package com.yadamhast.core.entity.task;

import com.yadamhast.core.entity.user.User;
import com.yadamhast.core.entity.user.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository repository;
    private final UserService userService;

    public TaskService(TaskRepository repository, UserService userService) {
        this.repository = repository;
        this.userService = userService;
    }

    public List<Task> list(Long id) {
        List<Task> taskList = (List<Task>) repository.findAll();
        List<Task> responseList = new ArrayList<>();
        taskList.forEach(task -> {
            responseList.add(task);
        });
        return responseList;
    }

    public List<Task> allTask() {
        return (List<Task>) repository.findAll();
    }

    public Optional<Task> load(Long id) {
        return repository.findById(id);
    }

    public Long save(Task task) {
        User user = userService.findById(14L);
        task.setUser(user);
        return repository.save(task).getId();
    }

    public Long delete(Long id){
        repository.deleteById(id);
        return id;
    }

}
