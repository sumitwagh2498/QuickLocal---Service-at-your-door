package com.quicklocal.controller;

import com.quicklocal.dto.ServicesDto;
import com.quicklocal.model.ServicesModel;
import com.quicklocal.service.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
@CrossOrigin
public class ServicesController {

    @Autowired
    private ServicesService servicesService;

    @PostMapping("/add")
    public ResponseEntity<ServicesModel> addService(@RequestBody ServicesModel servicesModel) {
        try {
            ServicesModel savedService = servicesService.saveService(servicesModel);
            return new ResponseEntity<>(savedService, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

  @GetMapping("/all")
  public ResponseEntity<List<ServicesModel>> getAllServices() {
        try {
            List<ServicesModel> services = servicesService.getAllServices();
            return new ResponseEntity<>(services, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ServicesModel> updateService(@PathVariable Integer id, @RequestBody ServicesDto updatedServiceDto) {
        try {
            ServicesModel updatedService = servicesService.updateService(id, updatedServiceDto);
            if (updatedService != null) {
                return new ResponseEntity<>(updatedService, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Integer id) {
        boolean deleted = servicesService.deleteService(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<ServicesModel>> searchServices(@RequestParam(required = false) String service,
                                                             @RequestParam(required = false) String city) {
        try {
            List<ServicesModel> services;
            
            if (service != null && city != null) {
                services = servicesService.searchServicesByServiceAndCity(service, city);
            } else if (service != null) {
                services = servicesService.searchServicesByService(service);
            } else if (city != null) {
                services = servicesService.searchServicesByCity(city);
            } else {
                services = servicesService.getAllServices();
            }

            return new ResponseEntity<>(services, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
