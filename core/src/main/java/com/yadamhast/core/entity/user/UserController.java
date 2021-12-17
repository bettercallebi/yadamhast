package com.yadamhast.core.entity.user;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    //todo : Add Json
    @GetMapping("list")
    public List<User> list() {
        return service.findAllUsers();
    }

    @GetMapping("{id}")
    public User list(@PathVariable(name = "id") Long id) {
        return service.findUserById(id);
    }

    @PostMapping("save")
    public Long save(@RequestBody User user) {
        return service.save(user);
    }

    @PostMapping("delete")
    public Long delete(@RequestBody User user) {
        return service.deleteById(user.getId());
    }

    @PostMapping("login")
    public User login(@RequestBody User user) {
        return service.login(user);
    }
}
