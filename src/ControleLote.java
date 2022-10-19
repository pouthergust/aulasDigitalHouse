
public class ControleLote extends Controle {

	@Override
	public void verificar(Artigo artigo) {
		int lote = artigo.getLote();
		String nome = artigo.getNome();
		
		if (lote >= 1000 && lote <= 2000) {
			System.out.println(nome + " Lote aceito");
			
			if (this.getControleSeguinte() != null) {
				this.getControleSeguinte().verificar(artigo);
			}
		} else {
			System.out.println(nome + " Lote Rejeitado");
			System.out.println( " ------------- ");
		}
	}
	
}
