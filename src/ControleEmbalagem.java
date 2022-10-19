
public class ControleEmbalagem extends Controle {

	@Override
	public void verificar(Artigo artigo) {
		String embalagem = artigo.getEmbalagem();
		
		if (embalagem.equalsIgnoreCase("saudavel") || embalagem.equalsIgnoreCase("quase saudavel")) {
			System.out.println("Embalagem aceita");
		} else {
			System.out.println("Embalagem Rejeitada");
		}
	}
}
