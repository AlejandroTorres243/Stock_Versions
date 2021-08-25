package com.gestampClientes.Cliente.Entidad;

public class ClientNotFoundException extends RuntimeException {

    ClientNotFoundException(String id) {
        super("Could not find customer " + id);
    }

}
