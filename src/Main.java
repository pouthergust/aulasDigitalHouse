
public class Main {

	public static void main(String[] args) {
		ServicoDownloadProxy servicoDownloadProxy = new ServicoDownloadProxy();
		Usuario user1 = new Usuario("gratis");
		Usuario user2 = new Usuario("premium");
		
		servicoDownloadProxy.download(user1);
		System.out.println(" ------------ ");
		servicoDownloadProxy.download(user2);
	}

}
