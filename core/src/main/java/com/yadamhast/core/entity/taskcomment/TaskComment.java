package com.yadamhast.core.entity.taskcomment;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "taskComment")
public class TaskComment {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String  description;

    @Column(name = "color")
    private String  color;

}
