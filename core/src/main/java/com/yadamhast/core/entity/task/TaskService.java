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
        List<Task> taskList = (List<Task>) repository.findAllTaskByUser(id);
        List<Task> responseList = new ArrayList<>();
        taskList.forEach(task -> {
            responseList.add(task);
        });
        return responseList;
    }

    public List<Task> allTask() {
        return (List<Task>) repository.findAll();
    }

    public Task load(Long id) {
        Optional<Task> optionalTask = repository.findById(id);
        Task task = new Task();
        task.setUser(optionalTask.get().getUser());
        task.setTaskType(optionalTask.get().getTaskType());
        task.setAlarmDateTime(optionalTask.get().getAlarmDateTime());
        task.setDescription(optionalTask.get().getDescription());
        task.setDateTime(optionalTask.get().getDateTime());
        task.setId(optionalTask.get().getId());
        task.setTitle(optionalTask.get().getTitle());
        task.setHasAlarm(optionalTask.get().getHasAlarm());
        return task;
    }

    public Long save(Task task) {
        User user = userService.findUserById(task.getUser().getId());
        task.setUser(user);
        if (!task.getHasAlarm()) {
            task.setAlarmDateTime(null);
        }
        if (task.getTaskType() == null) {
            task.setTaskType(TaskType.DAILY);
        }
        if (task.getTaskStatus() == null) {
            task.setTaskStatus(TaskStatus.SCHEDULED);
        }
        return repository.save(task).getId();
    }

    public Long delete(Long id) {
        repository.deleteById(id);
        return id;
    }

}
