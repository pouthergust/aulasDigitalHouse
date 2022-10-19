
public class ControlePeso extends Controle {

	@Override
	public void verificar(Artigo artigo) {
		double peso = artigo.getPeso();
		
		if (peso > 1200 && peso < 1300) {
			System.out.println("Peso aceito");
			
			if (this.getControleSeguinte() != null) {
				this.getControleSeguinte().verificar(artigo);
			}
		} else {
			System.out.println("Peso Rejeitado");
		}
	}
	
}

