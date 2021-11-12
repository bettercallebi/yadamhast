package com.yadamhast.core.entity.taskcategory;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "taskCategory")
public class TaskCategory {

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
