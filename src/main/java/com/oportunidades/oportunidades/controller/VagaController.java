package com.oportunidades.oportunidades.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.oportunidades.oportunidades.model.Vaga;
import com.oportunidades.oportunidades.repository.VagaRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/vagas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class VagaController {
	
	@Autowired
	private VagaRepository vagaRepository;

	@GetMapping
	public ResponseEntity<List<Vaga>> getAll() {
		return ResponseEntity.ok(vagaRepository.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Vaga> getById(@PathVariable Long id){
		return vagaRepository.findById(id)
				.map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}
	
	@PostMapping
	public ResponseEntity<Vaga> post(@Valid @RequestBody Vaga vaga){
		vaga.setId(null);
		
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(vagaRepository.save(vaga));
	}
	
	@PutMapping
	public ResponseEntity<Vaga> put(@Valid @RequestBody Vaga vaga){
		return vagaRepository.findById(vaga.getId())
				.map(resposta -> ResponseEntity.status(HttpStatus.OK)
						.body(vagaRepository.save(vaga)))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}
	
	@ResponseStatus(HttpStatus.NO_CONTENT)
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		Optional<Vaga> categoria = vagaRepository.findById(id);
		
		if(categoria.isEmpty()) 
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
			vagaRepository.deleteById(id);
	}
	
}
