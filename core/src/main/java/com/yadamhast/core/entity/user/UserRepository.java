package com.yadamhast.core.entity.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface UserRepository extends CrudRepository<User, Long> {

    @Query(name = "findByUserId", value = "select u from User u where u.id = id",nativeQuery = true)
    public User findByUserId(@Param(value = "id") Long id);

    @Query(name = "findByUsername", value = "select u from User u where u.username =: username",nativeQuery = true)
    public User findByUsername(@Param(value = "username") String username);

}
