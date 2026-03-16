package day2;

public class Dog extends Animal implements Pet {
	private String breed;
	public String getBreed() {
		return breed;
	}
	
	public Dog(String breed) {
		super();
		this.breed = breed;
	}
	public  void sound(int str){
        System.out.println("dog makes sound");
    }
	@Override
	public void play() {
		// TODO Auto-generated method stub
		System.out.println("Playing" + getName());
	}
	public void bark() {
		System.out.println("is barking" + getName());
	}

}
