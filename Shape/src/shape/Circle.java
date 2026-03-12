package shape;

class Circle extends Shape {
	private float radius;
	private int centered;
	public float getRadius() {
		return radius;
	}
	public void setRadius(float radius) {
		this.radius = radius;
	}
	
	public float getCentered() {
		return centered;
	}
	
	public void setCentered(int centered) {
		this.centered = centered;
	}
	
	public void area(float radius) {
		
	}
	
	public void circum() {
		
	}
	void draw() {
		System.out.println("Draw");
	}
	
}
