package com.yadamhast.core.entity.task;

import com.yadamhast.core.entity.user.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("task")
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    private final TaskService service;
    private final UserService userService;

    public TaskController(TaskService service, UserService userService) {
        this.service = service;
        this.userService = userService;
    }

    @GetMapping("list/{id}")
    public List<Task> list(@PathVariable Long id) {
        return service.list(id);
    }

    @GetMapping("{id}")
    public Task load(@PathVariable Long id) {
        return service.load(id);
    }

    @PostMapping("save")
    public Long save(@RequestBody Task task) {
        return this.service.save(task);

    }

    @PostMapping("edit")
    public Long edit(@RequestBody Task task) {
        return this.service.save(task);
    }

    @PostMapping("delete")
    public Long delete(@RequestBody Task task) {
        return this.service.delete(task.getId());
    }
}
