package com.yadamhast.core.entity.user;

import com.yadamhast.core.entity.task.Task;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

enum UserType {
    ADMIN(0),
    MEMBER(1);

    private int value;

    UserType(int value) {
        this.value = value;
    }
}

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "firstName")
    private String  firstName;

    @Column(name = "lastName")
    private String  lastName;

    @Column(name = "email")
    private String  email;

    @Column(name = "password")
    private String  password;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Task> taskList;

    @Column(name = "userType")
    @Enumerated(EnumType.STRING)
    private UserType  userType;
}
