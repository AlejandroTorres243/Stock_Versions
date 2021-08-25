package com.ClienteWebFlux.Ejercicio.Repositorio;

import com.ClienteWebFlux.Ejercicio.Cliente.*;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepositorio extends ReactiveMongoRepository<User, String> {
    @Query("{'name': ?0}")
    User findByName(final String name);
}
