package com.yadamhast.core.entity.taskcategory;

import org.springframework.stereotype.Service;

@Service
public class TaskCategoryService {

    private final TaskCategoryRepository repository;

    public TaskCategoryService(TaskCategoryRepository repository) {
        this.repository = repository;
    }
}
