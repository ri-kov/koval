package com.valenauto.backend;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from backend";
    }

    public Vehicle getCar() {
        Vehicle car = new Vehicle(
                "Mazda",
                "Mazda 3",
                2018,
                192500,
                12500
        );

        return car;
    }
}
