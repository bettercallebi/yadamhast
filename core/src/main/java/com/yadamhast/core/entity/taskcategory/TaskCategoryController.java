package com.yadamhast.core.entity.taskcategory;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("taskCategory")
public class TaskCategoryController {

    private final TaskCategoryService service;

    public TaskCategoryController(TaskCategoryService service) {
        this.service = service;
    }
}
