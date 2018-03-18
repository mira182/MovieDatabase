package com.mmdb.services.user;

import com.mmdb.model.dto.UserDTO;
import com.mmdb.model.entities.User;

import java.util.List;

public interface UserService {

    User save(UserDTO user);
    List<User> findAll();
    void delete(long id);
    User findOne(String username);

    User findById(Long id);
}
