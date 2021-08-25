package com.gestampClientes.Cliente.Entidad;

import ch.qos.logback.core.net.server.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/client")
public class RestCliente {

    @Autowired
    private RepositoryClient repository;

    @GetMapping
    List<Cliente> all() {
        return repository.findAll();
    }

    @PostMapping("")
    Cliente newCustomer(@Valid @RequestBody Cliente cliente) {
        return repository.save(cliente);
    }

    @GetMapping("/{id}")
    Cliente one(@PathVariable String id) {

        return repository.findById(id)
                .orElseThrow(() -> new ClientNotFoundException(id));
    }

    @PutMapping("/{id}")
    Cliente replaceCustomer(@Valid @RequestBody Cliente dato, @PathVariable String id) {

        return repository.findById(id)
                .map(client -> {
                    client.name=dato.name;
                    client.email=dato.email;
                    client.credencial=dato.credencial;
                    return repository.save(dato);
                })
                .orElseGet(() -> {
                    dato.id=id;
                    return repository.save(dato);
                });
    }

    @DeleteMapping("/{id}")
    Cliente deleteCustomer(@PathVariable String id) {
        Optional<Cliente> cliente = repository.findById(id);
        repository.deleteById(id);
        return cliente.get();
    }
}
