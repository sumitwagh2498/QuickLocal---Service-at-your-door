package com.quicklocal.controller;

import com.quicklocal.dto.AdminDto;
import com.quicklocal.model.Admin;
import com.quicklocal.service.AdminService;
import com.quicklocal.dto.RegistrationStatus;
import com.quicklocal.exception.AdminServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/admin/register")
    public RegistrationStatus registerAdmin(@RequestBody AdminDto adminDto) {
        try {
            Admin admin = new Admin();
            admin.setName(adminDto.getName());
            admin.setPhone(adminDto.getPhone());
            admin.setEmail(adminDto.getEmail());
            admin.setPassword(adminDto.getPassword());

            int id = adminService.registerAdmin(admin);

            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(true);
            status.setStatusMessage("Admin registered successfully!");
            status.setUserId(id);
            return status;
        } catch (AdminServiceException e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return status;
        }
    }

    @PostMapping("/admin/login")
    public RegistrationStatus adminLogin(@RequestBody AdminDto adminDto) {
        try {
            Admin admin = adminService.login(adminDto.getEmail(), adminDto.getPassword());
            if (admin != null) {
                RegistrationStatus status = new RegistrationStatus();
                status.setStatus(true);
                status.setStatusMessage("Admin login successful!");
                status.setUserId(admin.getId());
                return status;
            } else {
                RegistrationStatus status = new RegistrationStatus();
                status.setStatus(false);
                status.setStatusMessage("Admin login failed. Please check your credentials.");
                return status;
            }
        } catch (AdminServiceException e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return status;
        }
    }
}
