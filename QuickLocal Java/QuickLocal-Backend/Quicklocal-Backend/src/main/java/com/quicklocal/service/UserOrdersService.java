// UserOrdersService.java

package com.quicklocal.service;

import com.quicklocal.model.ServicesModel;
import com.quicklocal.repository.ServicesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserOrdersService {

    @Autowired
    private ServicesRepository servicesRepository;

    public List<ServicesModel> getAllUserOrders() {
        // Implement your logic to retrieve all user orders
        return servicesRepository.findAll();
    }

    public List<ServicesModel> searchServicesByCity(String city) {
        // Implement your logic to search services by city
        return servicesRepository.findByCity(city);
    }
}
