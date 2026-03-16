package day2;

public class Person {
	private String name;
	private Address address;
	private int age;
	private Phone phone;
	
	Pet pet;
	
	public void setName(String name) {
		this.name = name;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public void setPhone(Phone phone) {
		this.phone = phone;
	}
	public String getName() {
		return name;
	}
	public Address getAddress() {
		return address;
	}
	public int getAge() {
		return age;
	}
	public Phone getPhone() {
		return phone;
	}
	
	
	
}
