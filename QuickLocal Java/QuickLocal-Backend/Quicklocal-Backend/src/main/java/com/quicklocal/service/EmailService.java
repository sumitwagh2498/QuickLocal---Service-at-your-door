package com.quicklocal.service;

import com.quicklocal.model.Email;
import com.quicklocal.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private OrderService orderService;

    public void sendThankYouEmail(Integer orderId) {
        Order order = orderService.getOrderById(orderId);

        if (order != null) {
            Email email = new Email();
            email.setRecipient(order.getEmail());
            email.setSubject("Thank You for Booking Our Services!");
            email.setBody("Dear " + order.getName() + ",\n\n"
                         + "Thank you for booking our services!\n\n"
                         + "We are excited to serve you.\n\n"
                         + "Best regards,\n"
                         + "Your Service Provider");

            sendEmail(email);
        }
    }

    private void sendEmail(Email email) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(email.getRecipient());
        mailMessage.setSubject(email.getSubject());
        mailMessage.setText(email.getBody());

        javaMailSender.send(mailMessage);
    }
}
