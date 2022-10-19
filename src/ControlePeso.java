
public class ControlePeso extends Controle {

	@Override
	public void verificar(Artigo artigo) {
		double peso = artigo.getPeso();
		String nome = artigo.getNome();
		
		if (peso > 1200 && peso < 1300) {
			System.out.println( nome + " Peso aceito");
			
			if (this.getControleSeguinte() != null) {
				this.getControleSeguinte().verificar(artigo);
			}
		} else {
			System.out.println( nome + " Peso Rejeitado");
			System.out.println( " ------------- ");
		}
	}
	
}

