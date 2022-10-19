public class Artigo {

	private String nome;
    private int lote;
    private double peso;
    private String embalagem;
    
	public Artigo(String nome, int lote, double peso, String embalagem) {
		this.nome = nome;
		this.lote = lote;
		this.peso = peso;
		this.embalagem = embalagem;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getLote() {
		return lote;
	}

	public void setLote(int lote) {
		this.lote = lote;
	}

	public double getPeso() {
		return peso;
	}

	public void setPeso(double peso) {
		this.peso = peso;
	}

	public String getEmbalagem() {
		return embalagem;
	}

	public void setEmbalagem(String embalagem) {
		this.embalagem = embalagem;
	}
}
