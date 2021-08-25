package com.gestampClientes.Cliente.Entidad;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Document(collection = "Cliente")
public class Cliente {

    @Id
    public String id;

    @NotBlank
    @NotNull
    public String name;

    @NotNull
    @NotBlank
    public String email;

    @NotBlank
    @NotNull
    public int credencial;

    public String getId() {
        return id;
    }

    public Cliente setId(String id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Cliente setName(String name) {
        this.name = name;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public Cliente setEmail(String email) {
        this.email = email;
        return this;
    }

    public int getCredencial() {
        return credencial;
    }

    public Cliente setCredencial(int credencial) {
        this.credencial = credencial;
        return this;
    }

    public Cliente(String id, String name, String email, int credencial) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.credencial = credencial;
    }

}
