package com.quicklocal.service;

import com.quicklocal.exception.AdminServiceException;
import com.quicklocal.model.Admin;
import com.quicklocal.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public int registerAdmin(Admin admin) {
        try {
            return adminRepository.save(admin).getId();
        } catch (Exception e) {
            throw new AdminServiceException("Error registering admin: " + e.getMessage());
        }
    }

    public Admin login(String email, String password) {
        return adminRepository.findByEmailAndPassword(email, password);
    }
}
