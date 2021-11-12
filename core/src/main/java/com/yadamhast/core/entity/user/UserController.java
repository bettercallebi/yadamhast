package com.yadamhast.core.entity.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    //todo : Add Json
    @GetMapping("list")
    public String list(){
//        return service.findAllUsers().toString();
        return "service.findAllUsers().toString()";
    }
}
