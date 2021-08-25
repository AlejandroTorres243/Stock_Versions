package com.gestampClientes.Cliente.Entidad;

import ch.qos.logback.core.net.server.Client;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RepositoryClient extends MongoRepository<Cliente, String> {

    public List<Cliente> findByName(String name);
    public List<Cliente> findByEmail(String email);
    public List<Cliente> findByCredencial(String credencial);


}
