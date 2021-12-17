package com.yadamhast.core.entity.user;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User findUserById(Long id) {
        return repository.findByUserId(id);
    }

    public User findById(Long id) {
        User user = repository.getById(id);
        return user;
    }

    public User findByUsername(String username) {
        return repository.findByUsername(username);
    }

    public List<User> findAllUsers() {
        return (List<User>) repository.findAll();
    }

    public Long save(User user) {
        return repository.save(user).getId();
    }

    public Long deleteById(Long id) {
        repository.deleteById(id);
        return id;
    }

    public User login(User user) {
        User resUser = repository.findByUsername(user.getUsername());
        if (resUser != null) {
            if (user.getPassword().equals(resUser.getPassword())) {
                return resUser;
            }
            return null;
        }
        return null;
    }
}
