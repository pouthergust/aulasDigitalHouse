import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class ArvoreFactory {

	private Map<String, Arvore> floresta = new HashMap<>(); 
	public int id = 0;
	
	public ArvoreFactory(int qtdArvores) {
		String[] arvores = {"ornamentais", "frutiferas", "florifera"};
		for(int i = 0; i < qtdArvores; i++) {
			middlewareFazerArvore(arvores[new Random().nextInt(3)]);
		}
		this.floresta.forEach((key, value) -> System.out.println(key + " = " + value));
	}
	
	private void middlewareFazerArvore(String arvore) {
		this.floresta.put(this.id + "-" + arvore, this.fazerArvore(arvore));
		this.id++;
	}
	
	private Arvore fazerArvore(String arvore) {
		switch (arvore.toLowerCase()) {
			case "ornamentais":
				return new Ornamentais(200, 400, "verde");
				
			case "frutiferas":
				return new Frutiferas(500, 300, "vermelha");
				
			case "florifera":
				return new Florifera(100, 200, "azul");
			default: 
				throw new Error("Opção inválida");
		}
	}
}
