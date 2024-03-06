package com.quicklocal.repository;
import java.util.List;
//ServiceRepository.java
import org.springframework.data.jpa.repository.JpaRepository;
import com.quicklocal.model.Service;
import com.quicklocal.model.Status;


public interface ServiceRepository extends JpaRepository<Service, Integer> {
 List<Service> findAllByStatus(Status status);

 Service findByEmailAndPassword(String email, String password);

 List<Service> findByApprovalStatus(Status approvalStatus);
 
 
}
