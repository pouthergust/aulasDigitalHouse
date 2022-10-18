
public class Quadrado extends Figura {
	
	private int lado;
	
	public Quadrado(int lado) {
		this.lado = lado;
	}

	@Override
	protected double calcularPerimetro() {
		return 4 * this.lado;
	}
}
