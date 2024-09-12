package com.example.login_teste.controller;

import com.example.login_teste.model.User;
import com.example.login_teste.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User registeredUser = userService.register(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        boolean isAuthenticated = userService.authenticate(user.getUsername(), user.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok("Login bem-sucedido");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED). body("Credenciais inválidas");
        }
    }
}
