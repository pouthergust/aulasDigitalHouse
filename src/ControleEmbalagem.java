
public class ControleEmbalagem extends Controle {

	@Override
	public void verificar(Artigo artigo) {
		String embalagem = artigo.getEmbalagem();
		String nome = artigo.getNome();
		
		if (embalagem.equalsIgnoreCase("saudavel") || embalagem.equalsIgnoreCase("quase saudavel")) {
			System.out.println(nome + " Embalagem aceita");
		} else {
			System.out.println(nome + " Embalagem Rejeitada");
		}
	}
}
