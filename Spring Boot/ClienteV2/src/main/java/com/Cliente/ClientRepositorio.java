package com.Cliente;

import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepositorio extends ReactiveMongoRepository<Client, String> {
    @Query("{'name': ?0}")
    Client findByName(final String name);
}
