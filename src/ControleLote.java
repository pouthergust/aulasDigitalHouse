
public class ControleLote extends Controle {

	@Override
	public void verificar(Artigo artigo) {
		int lote = artigo.getLote();
		
		if (lote > 1000 && lote < 2000) {
			System.out.println("Lote aceito");
			
			if (this.getControleSeguinte() != null) {
				this.getControleSeguinte().verificar(artigo);
			}
		} else {
			System.out.println("Lote Rejeitado");
		}
	}
	
}
