package com.yadamhast.core.entity.task;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.yadamhast.core.entity.user.User;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

enum TaskType {
    DAILY(0),
    WEEKLY(1),
    MONTHLY(2),
    YEARLY(3);

    private int value;

    TaskType(int value) {
        this.value = value;
    }
}

enum TaskStatus {
    SCHEDULED(0),
    DONE(1),
    POSTPONED(2);

    private int value;

    TaskStatus(int value) {
        this.value = value;
    }
}

@Data
@Entity
@Table(name = "task")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Task implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "hasAlarm")
    private Boolean hasAlarm;

    @Column(name = "dateTime")
    private LocalDateTime dateTime;

    @Column(name = "alarmDateTime")
    private LocalDateTime alarmDateTime;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user", nullable = false)
    private User user;

    @Column(name = "taskType")
    @Enumerated(EnumType.STRING)
    private TaskType taskType;


}
