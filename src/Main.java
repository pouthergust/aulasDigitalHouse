public class Main {

	public static void main(String[] args) {
		CheckQuality processo = new CheckQuality();
		
		processo.verificar(new Artigo("Principal", 999, 1200.00, "quase saudavel"));
		processo.verificar(new Artigo("secundário", 1000, 1140.00, "saudavel"));
		processo.verificar(new Artigo("terceario", 1001, 1350.00, "saudavel"));
		processo.verificar(new Artigo("quarteario", 1002, 1480.00, "nao saudavel"));
	}

}
