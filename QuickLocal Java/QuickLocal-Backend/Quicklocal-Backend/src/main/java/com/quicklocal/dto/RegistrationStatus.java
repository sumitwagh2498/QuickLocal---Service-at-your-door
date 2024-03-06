package com.quicklocal.dto;

public class RegistrationStatus {

    private boolean status;
    private String statusMessage;
    private int userId;

    // Constructors, getters, and setters...

    public RegistrationStatus() {
    }

    public RegistrationStatus(boolean status, String statusMessage, int userId) {
        this.status = status;
        this.statusMessage = statusMessage;
        this.userId = userId;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getStatusMessage() {
        return statusMessage;
    }

    public void setStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
