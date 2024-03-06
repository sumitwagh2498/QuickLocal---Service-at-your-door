// UserDto.java
package com.quicklocal.dto;

public class UserDto {

    private String name;
    private long phone;
    
    private String password;
    private String address;
    private String pincode;

    public UserDto() {
        // Default constructor
    }

    // Constructors with parameters
    public UserDto(String name, long phone, String password, String address, String pincode) {
		super();
		this.name = name;
		this.phone = phone;
		this.password = password;
		this.address = address;
		this.pincode = pincode;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    // Other methods...

}
