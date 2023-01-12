/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.payment;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author DELL
 */
@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<Payment> getPayments() {
        return paymentRepository.findAll();
    }

    public Payment getPaymentById(int paymentid) {
        Optional<Payment> payment = paymentRepository.findById(paymentid);
        if (payment.isPresent()) {
            return payment.get();
        }
        return null;
    }

    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }
}
