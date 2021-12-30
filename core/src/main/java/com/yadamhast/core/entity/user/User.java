package com.yadamhast.core.entity.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class User implements Serializable {

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

    @Column(name = "userType")
    @Enumerated(EnumType.STRING)
    private UserType  userType;
}
