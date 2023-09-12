package com.algorithms;
import com.algorithms.algoLog.CreateFunction;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AlgoritamsApplication {

	public static void main(String[] args) {
//		SpringApplication.run(AlgoritamsApplication.class, args);
		CreateFunction.create();

	}
}



