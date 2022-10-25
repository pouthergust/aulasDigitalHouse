import java.util.HashMap;
import java.util.Map;

public class FacadeBusca {

	private ApiVoos voos;
	private ApiHoteis hoteis;
	private Map<String, String> apiBusca = new HashMap<>(); 
	
	public FacadeBusca() {
		this.voos = new ApiVoos();
		this.hoteis = new ApiHoteis();
		
		apiBusca.put(null, null);
		
		this.busca("Sorocaba", "24/10/2022", "");
	}
	
	public void busca(String cidade, String ida, String volta) {
		this.buscaVoos(cidade, ida, volta);
		this.buscaHoteis(cidade, ida, volta);
	}
	
	public void buscaVoos(String cidade, String ida, String volta) {
		this.voos.setDestino(cidade);
		this.voos.setDataPartida(ida);
		this.voos.setDataRetorno(volta);
	}
	
	public void buscaHoteis(String cidade, String ida, String volta) {
		this.hoteis.setCidade(cidade);
		this.hoteis.setDataEntrada(ida);
		this.hoteis.setDataSaida(volta);
	}
}
