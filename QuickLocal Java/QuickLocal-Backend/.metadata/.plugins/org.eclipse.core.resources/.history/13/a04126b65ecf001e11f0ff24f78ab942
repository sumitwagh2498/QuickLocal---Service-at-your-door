package com.quicklocal.service;

import com.quicklocal.dto.OrderDto;
import com.quicklocal.exception.ServiceServiceException;
import com.quicklocal.model.Order;
import com.quicklocal.model.Service;
import com.quicklocal.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ServiceService serviceService;
    private final JavaMailSender emailSender;

    @Autowired
    public OrderService(OrderRepository orderRepository, ServiceService serviceService, JavaMailSender emailSender) {
        this.orderRepository = orderRepository;
        this.serviceService = serviceService;
        this.emailSender = emailSender;
    }

    public Order placeOrder(OrderDto orderDto, Integer serviceProviderId) throws ServiceServiceException {
        Service serviceProvider = serviceService.findById(serviceProviderId);
        if (serviceProvider != null) {
            Order orderEntity = new Order();
            orderEntity.setName(orderDto.getName());
            orderEntity.setPhone(orderDto.getPhone());
            orderEntity.setAddress(orderDto.getAddress());
            orderEntity.setEmail(orderDto.getEmail());
            orderEntity.setPinCode(orderDto.getPinCode());
            orderEntity.setAvailableDate(orderDto.getAvailableDate());
            orderEntity.setAvailableTime(orderDto.getAvailableTime());
            orderEntity.setServiceProvider(serviceProvider);
            return orderRepository.save(orderEntity);
        }
        return null;
    }

    public void updateOrderStatus(Integer orderId, String status) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.setStatus(status);
            orderRepository.save(order);
        } else {
            throw new RuntimeException("Order not found with ID: " + orderId);
        }
    }

    public void sendAcknowledgmentEmail(Integer orderId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            String recipientEmail = order.getEmail();
            String subject = "Order Acknowledgment";
            String text = "Thank you for placing your order with us!";
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(recipientEmail);
            message.setSubject(subject);
            message.setText(text);
            emailSender.send(message);
        } else {
            throw new RuntimeException("Order not found with ID: " + orderId);
        }
    }

    public List<Order> getOrdersByServiceProviderId(Integer serviceProviderId) {
        return orderRepository.findByServiceProviderId(serviceProviderId);
    }

    public void rejectOrder(Integer orderId) {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.setStatus("Rejected");
            orderRepository.save(order);
        } else {
            throw new RuntimeException("Order not found with ID: " + orderId);
        }
    }

    public Order getOrderById(Integer orderId) {
        return orderRepository.findById(orderId).orElse(null);
    }
}
