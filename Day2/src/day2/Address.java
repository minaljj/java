package day2;

public class Address {
	private String city;
	private String street;
	public Address(String city, String street, String state, String zipcode) {
		super();
		this.city = city;
		this.street = street;
		this.state = state;
		this.zipcode = zipcode;
	}
	private String state;
	private String zipcode;
	public String getCity() {
		return city;
	}
	public String getStreet() {
		return street;
	}
	public String getState() {
		return state;
	}
	public String getZipcode() {
		return zipcode;
	}
}
