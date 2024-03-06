// UserService.java
package com.quicklocal.service;

import com.quicklocal.exception.UserServiceException;
import com.quicklocal.model.User;
import com.quicklocal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public int registerUser(User user) throws UserServiceException {
        try {
            return userRepository.save(user).getId();
        } catch (Exception e) {
            throw new UserServiceException("Error registering user: " + e.getMessage());
        }
    }

    public User login(long phone, String password) {
        return userRepository.findByPhoneAndPassword(phone, password);
    }
}
