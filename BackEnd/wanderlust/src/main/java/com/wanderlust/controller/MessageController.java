package com.wanderlust.controller;

import com.wanderlust.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
@Controller
public class MessageController
{
    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public Message send(Message message)
    {
        return new Message( message.correo() ,message.content());
    }
}