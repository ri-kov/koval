package com.valenauto.backend;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from backend";
    }

    public Map<String, Object> getCar() {
        Map<String, Object> car = new HashMap<>();

        car.put("make", "Mazda");
        car.put("model", "Mazda 3");
        car.put("year", "2018");
        car.put("price", 12500);

        return car;
    }
}
