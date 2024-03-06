package com.quicklocal.dto;

public class ServiceDto {

	int id;
    private String name;
    private long phone;
    private String email;
    private String password;
    private String service;

    // Constructors, getters, setters...

    public ServiceDto() {
    }

    public ServiceDto(String name, long phone, String email, String password, String service) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.service = service;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

	public int getId() {
		// TODO Auto-generated method stub
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	

    // Getters and setters...
}
