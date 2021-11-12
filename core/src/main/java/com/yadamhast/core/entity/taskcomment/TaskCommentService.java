package com.yadamhast.core.entity.taskcomment;

import org.springframework.stereotype.Service;

@Service
public class TaskCommentService {

    private final TaskCommentRepository repository;

    public TaskCommentService(TaskCommentRepository repository) {
        this.repository = repository;
    }
}
