public abstract class Controle {
	
	protected Controle controleSeguinte;

	public Controle getControleSeguinte() {
		return controleSeguinte;
	}

	public void setControleSeguinte(Controle controleSeguinte) {
		this.controleSeguinte = controleSeguinte;
	}
	
	public abstract void verificar(Artigo artigo);
}
