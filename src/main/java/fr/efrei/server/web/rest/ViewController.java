package fr.efrei.server.web.rest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping("/")
    public String redirectToHomePage() {
        // Redirect to /index endpoint
        return "redirect:/index.html";
    }

    @GetMapping("/")
    public String index() {
        // Returning the name of the HTML file
        return "index.html";
    }

}
