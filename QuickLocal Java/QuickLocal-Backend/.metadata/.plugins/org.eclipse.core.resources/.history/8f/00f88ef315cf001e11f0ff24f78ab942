package com.quicklocal.controller;

import com.quicklocal.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email/{orderId}")
    public void sendThankYouEmail(@PathVariable Integer orderId) {
        emailService.sendThankYouEmail(orderId);
    }
}
