package com.example.demo.controller;

import com.example.demo.domain.Role;
import com.example.demo.domain.User;
import com.example.demo.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/registration")
public class RegistrationController {

    @Autowired
    private UserRepo userRepo;

    @GetMapping("/sas")
    public String smth() {
        User u = new User();
        userRepo.save(u);
        return "DF";
    }

    @PostMapping
    public void register(@RequestBody User user) {
        user.setRoles(null);
        userRepo.save(user);
    }

}