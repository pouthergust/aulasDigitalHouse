public class Main {

	public static void main(String[] args) {
		CheckQuality processo = new CheckQuality();
		
		processo.verificar(new Artigo("Principal", 998, 1200.00, "quase saudavel"));
		processo.verificar(new Artigo("secundário", 999, 1240.00, "saudavel"));
		processo.verificar(new Artigo("terceario", 1000, 1350.00, "saudavel"));
		processo.verificar(new Artigo("quarteario", 1001, 1480.00, "nao saudavel"));
	}

}
