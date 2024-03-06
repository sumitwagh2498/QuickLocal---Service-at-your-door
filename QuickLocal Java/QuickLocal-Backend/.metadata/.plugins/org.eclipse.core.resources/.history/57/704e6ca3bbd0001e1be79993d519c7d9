package com.quicklocal.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String phone;
    private String address;
    private String pinCode;
    private String email; // New field for email
    private String availableDate;
    private String availableTime;

    private String status; // "success", "rejected", etc.
    private boolean acknowledgmentSent;
    
    private String description;

    @ManyToOne
    @JoinColumn(name = "service_provider_id")
    private Service serviceProvider;

    public Order() {
        // Default constructor
    }

    // Getters and setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    public String getAvailableDate() {
        return availableDate;
    }

    public void setAvailableDate(String availableDate) {
        this.availableDate = availableDate;
    }

    public String getAvailableTime() {
        return availableTime;
    }

    public void setAvailableTime(String availableTime) {
        this.availableTime = availableTime;
    }

    public Service getServiceProvider() {
        return serviceProvider;
    }

    public void setServiceProvider(Service serviceProvider) {
        this.serviceProvider = serviceProvider;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isAcknowledgmentSent() {
        return acknowledgmentSent;
    }

    public void setAcknowledgmentSent(boolean acknowledgmentSent) {
        this.acknowledgmentSent = acknowledgmentSent;
    }

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
