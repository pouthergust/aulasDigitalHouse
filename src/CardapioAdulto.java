
public class CardapioAdulto extends Cardapio{

	public CardapioAdulto(int precoBase) {
		super(precoBase, "nenhum");
		// TODO Auto-generated constructor stub
	}

	@Override
	public void montar() {
		System.out.println("Item adicional: " + super.itemAdicional);
	}

	@Override
	public void calcularPrecoDeVenda() {
		System.out.println("O valor de venda é: " + super.precoBase);
	}
}
