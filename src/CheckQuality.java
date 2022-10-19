
public class CheckQuality {

	private Controle inicial;
	
	public CheckQuality() {
		this.inicial = new ControleLote();
		Controle peso = new ControlePeso();
		Controle embalagem = new ControleEmbalagem();
		
		inicial.setControleSeguinte(peso);
		peso.setControleSeguinte(embalagem);
	}
	public void verificar(Artigo artigo) {
		this.inicial.verificar(artigo);
	}
}
