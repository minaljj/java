package com.example.demo.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.entity.Order1;
import com.example.demo.service.NoteService;

@ExtendWith(MockitoExtension.class)
class NotesControllerTest {

    @Mock
    private NoteService noteService;

    @InjectMocks
    private NoteController noteController;

    @Test
    void testGetOrderById() {
        Order1 order = new Order1();
        order.setId(1);
        order.setItem("Book");

        when(noteService.getOrderById(1))
                .thenReturn(Optional.of(order));

        Optional<Order1> result = noteController.getOrderById(1);

        assertTrue(result.isPresent());
        assertEquals("Book", result.get().getItem());
    }

    @Test
    void testGetOrder() {
        Iterable<Order1> orders = new ArrayList<>();

        when(noteService.getorder()).thenReturn(orders);

        Iterable<Order1> result = noteController.getorder();

        assertNotNull(result);
    }

    @Test
    void testDeleteOrderById() {
        Integer id = 1;

        noteController.deleteOrderById(id);

        verify(noteService, times(1)).deleteOrderById(id);
    }

    @Test
    void testCreateOrder() throws IOException {
        Order1 order = new Order1();
        order.setItem("Pen");
        order.setQuantity(2);
        order.setPrice(20);

        when(noteService.addOrder(order)).thenReturn(1);

        Integer result = noteController.createOrder(order);

        assertEquals(1, result);
    }
}
