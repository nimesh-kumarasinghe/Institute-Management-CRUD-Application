/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.usermicroservice;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// For Email
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
//

/**
 *
 * @author DELL
 */
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }

    public void sendMail(String to, String subject, String msg) {

        String from = "";
        String host = "";
        Properties properties = System.getProperties();

        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.auth", "true");

        Session session = Session.getInstance(properties, new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("", "");
            }
        });

        session.setDebug(true);
        try {
            MimeMessage message = new MimeMessage(session);

            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject(subject);
            message.setText(msg);

            System.out.println("sending...");
            Transport.send(message);
            System.out.println("Sent message successfully....");
        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }

    public User createUser(User user) {
        User user_data = userRepository.save(user);
        String email = user_data.getEmail();
        String password = user_data.getPassword();
        sendMail(email, "Account Created Sucessfully!!",
                "Hi " + user_data.getFirstname() + ", \n \n"
                        + "Welcome to ICS CENTER !!\n \n"
                        + "Your Login Details\n"
                        + "Email : " + email + " \n"
                        + "Password : " + password + " \n"
                        + "\n"
                        + "Thank You.");
        return user_data;
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public User updateUserInfo(User user) {
        return userRepository.save(user);
    }

    public int authUser(String email, String password) {
        try {
            List<User> user = userRepository.findUserByEmail(email);
            String dbpassword = (user.get(0).getPassword());
            int userid = (user.get(0).getUserid());

            if (dbpassword.equals(password)) {
                return userid;
            } else {
                return -1;
            }
        } catch (Exception e) {
            return -1;
        }
    }
}
