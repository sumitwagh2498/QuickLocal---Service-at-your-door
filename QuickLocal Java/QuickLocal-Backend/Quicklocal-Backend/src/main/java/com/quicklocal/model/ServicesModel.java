// ServicesModel.java
package com.quicklocal.model;

import jakarta.persistence.*;

@Entity
@Table(name = "Service_Data")
public class ServicesModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private Long phone;
    private String email;
    private String service;
    private String address;
    private String city;
    private String pinCode;

    @ManyToOne
    @JoinColumn(name = "provider_id")
    private Service provider;
    
    @ManyToOne
    @JoinColumn(name = "user_id") // This is the foreign key in Service_Data referencing user_registration table
    private User user;

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

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPinCode() {
        return pinCode;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

	public Service getProvider() {
		return provider;
	}

	public void setProvider(Service provider) {
		this.provider = provider;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
    
	
    
}
