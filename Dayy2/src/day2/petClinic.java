package day2;

import java.util.ArrayList;
import java.util.List;

public class petClinic {
	public static void main(String[] args) {

		demo1();
		methodOverriding();
	}

	private static void methodOverriding() {
		Pet pet = new Dog("Husky");
		Animal animal = (Animal)pet;//upcasting
		animal.sound();
	}

	private static void demo1() {
		Dog dog = new Dog("Husky");
		dog.setName("Pluto");
		Pet dog1 = new Dog("Husky");
		dog.setName("Happy");
		Cat cat = new Cat("brown");
//		dog1.bark();
		dog.bark();
		List<Pet> pets=new ArrayList<Pet>();
		pets.add(dog);
		pets.add(dog1);
		pets.add(cat);
		pets.forEach((pet)-> pet.play());		
	}
}
