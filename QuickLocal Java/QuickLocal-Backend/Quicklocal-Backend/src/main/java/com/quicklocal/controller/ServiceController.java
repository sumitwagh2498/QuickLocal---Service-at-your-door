// ServiceController.java

package com.quicklocal.controller;

import com.quicklocal.dto.ServiceDto;
import com.quicklocal.model.Service;
import com.quicklocal.service.ServiceService;
import com.quicklocal.dto.RegistrationStatus;
import com.quicklocal.exception.ServiceServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @PostMapping("/service/register")
    public RegistrationStatus registerService(@RequestBody ServiceDto serviceDto) {
        try {
            Service service = new Service();
            service.setName(serviceDto.getName());
            service.setPhone(serviceDto.getPhone());
            service.setEmail(serviceDto.getEmail());
            service.setPassword(serviceDto.getPassword());
            service.setService(serviceDto.getService());

            int id = serviceService.registerService(service);

            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(true);
            status.setStatusMessage("Service registration request sent successfully!");
            status.setUserId(id);
            return status;
        } catch (ServiceServiceException e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return status;
        }
    }

    @PostMapping("/service/login")
    public RegistrationStatus serviceLogin(@RequestBody ServiceDto serviceDto) {
        try {
            Service service = serviceService.login(serviceDto.getEmail(), serviceDto.getPassword());
            if (service != null) {
                RegistrationStatus status = new RegistrationStatus();
                status.setStatus(true);
                status.setStatusMessage("Service login successful!");
                status.setUserId(service.getId());
                return status;
            } else {
                RegistrationStatus status = new RegistrationStatus();
                status.setStatus(false);
                status.setStatusMessage("Service login failed. Please check your credentials.");
                return status;
            }
        } catch (Exception e) {
            RegistrationStatus status = new RegistrationStatus();
            status.setStatus(false);
            status.setStatusMessage(e.getMessage());
            return status;
        }
    }

    @GetMapping("/admin/all-services")
    public List<Service> getAllServices() {
        return serviceService.getAllServices();
    }

    
    @GetMapping("/admin/pending-services")
    public List<Service> getPendingServices() {
        return serviceService.getPendingServices();
    }

    @PutMapping("/admin/approve/{serviceId}")
    public ResponseEntity<String> approveService(@PathVariable int serviceId) {
        try {
            serviceService.approveService(serviceId);
            return ResponseEntity.ok("Service provider approved successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error approving service provider: " + e.getMessage());
        }
    }

    @DeleteMapping("/admin/delete/{serviceId}")
    public ResponseEntity<String> deleteService(@PathVariable int serviceId) {
        try {
            serviceService.deleteService(serviceId);
            return ResponseEntity.ok("Service registration request deleted successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting service registration request: " + e.getMessage());
        }
    }
}
