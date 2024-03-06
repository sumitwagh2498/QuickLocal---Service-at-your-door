// UserController.java
package com.quicklocal.controller;

import com.quicklocal.dto.UserDto;
import com.quicklocal.dto.RegistrationStatus;
import com.quicklocal.exception.UserServiceException;
import com.quicklocal.model.User;
import com.quicklocal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/user/register")
    public RegistrationStatus registerUser(@RequestBody UserDto userDto) {
        try {
            User user = new User();
            user.setName(userDto.getName());
            user.setPhone(userDto.getPhone());
            user.setPassword(userDto.getPassword());
            user.setAddress(userDto.getAddress());
            user.setPincode(userDto.getPincode());

            int id = userService.registerUser(user);

            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(true);
            status.setStatusMessage("User registered successfully!");
            status.setUserId(id);
            return status;
        } catch (UserServiceException e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return status;
        }
    }

    @PostMapping("/user/login")
    public RegistrationStatus userLogin(@RequestBody UserDto userDto) {
        try {
            User user = userService.login(userDto.getPhone(), userDto.getPassword());
            if (user != null) {
                RegistrationStatus status = new RegistrationStatus();
                status.setStatus(true);
                status.setStatusMessage("User login successful!");
                status.setUserId(user.getId());
                return status;
            } else {
                RegistrationStatus status = new RegistrationStatus();
                status.setStatus(false);
                status.setStatusMessage("User login failed. Please check your credentials.");
                return status;
            }
        } catch (Exception e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return status;
        }
    }
}
