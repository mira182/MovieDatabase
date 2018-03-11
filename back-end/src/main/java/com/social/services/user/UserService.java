package com.social.services.user;

import com.social.model.entities.User;
import com.social.model.dto.UserDTO;

import java.util.List;

public interface UserService {

    User save(UserDTO user);
    List<User> findAll();
    void delete(long id);
    User findOne(String username);

    User findById(Long id);
}
