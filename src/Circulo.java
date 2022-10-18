
public class Circulo extends Figura{

	private int raio;
	
	public Circulo(int raio) {
		this.raio = raio;
	}

	@Override
	protected double calcularPerimetro() {
		return 2 * (Math.PI * this.raio);
	}
}
