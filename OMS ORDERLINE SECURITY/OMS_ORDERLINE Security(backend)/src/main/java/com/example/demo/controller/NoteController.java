package com.example.demo.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Order1;
import com.example.demo.service.NoteService;

import jakarta.validation.Valid;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:3000")
public class NoteController {

    @Autowired
    private NoteService noteService;

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Order1 getOrderById(@PathVariable Integer id) {
        return noteService.getOrderById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Order1> getOrders() {
        return noteService.getOrder();
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public Integer createOrder(@RequestBody @Valid Order1 order) throws IOException {
        return noteService.addOrder(order);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOrderById(@PathVariable Integer id) {
        noteService.deleteOrderById(id);
    }
}