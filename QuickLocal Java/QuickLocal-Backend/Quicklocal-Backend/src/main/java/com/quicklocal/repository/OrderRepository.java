package com.quicklocal.repository;

import com.quicklocal.model.Order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

	List<Order> findByServiceProviderId(Integer serviceProviderId);
}
