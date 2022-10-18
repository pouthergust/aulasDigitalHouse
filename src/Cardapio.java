
public abstract class Cardapio {

	protected int precoBase;
	protected String itemAdicional; 
	
	public Cardapio(int precoBase, String itemAdicional) {
		this.precoBase = precoBase;
		this.itemAdicional = itemAdicional;
	}
	
	public abstract void montar();/* {
		System.out.println("item adicional: " + this.itemAdicional);
	}*/
	
	public abstract void calcularPrecoDeVenda();
}
