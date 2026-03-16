package day2;

public class Cat implements Pet {
	private String furColor;
	
	public Cat(String furColor) {
		
		this.furColor = furColor;
	}

	public String getFurColor() {
		return furColor;
	}

	@Override
	public void play() {
		// TODO Auto-generated method stub
		System.out.println("playing with Cat");
	}

}
