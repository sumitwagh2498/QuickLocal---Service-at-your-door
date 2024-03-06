package com.quicklocal.repository;

import com.quicklocal.model.ServicesModel;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicesRepository extends JpaRepository<ServicesModel, Integer> {
	
	 List<ServicesModel> findByServiceAndCity(String service, String city);
	    List<ServicesModel> findByService(String service);
	    List<ServicesModel> findByCity(String city);
	    
	    @Query("SELECT s FROM ServicesModel s WHERE s.user IS NOT NULL")
	    List<ServicesModel> findAllUserOrders();
		List<ServicesModel> findByPinCode(String pinCode);
}
