
public class ServicoDownloadProxy implements IDownload {

	@Override
	public void download(Usuario usuario) {
		if (usuario.getTipo().equalsIgnoreCase("premium")) {
			ServicoDownload servicoDownload = new ServicoDownload();
			servicoDownload.download();
			System.out.println("Musica baixada com sucesso!");
		} else {
			System.out.println("É necessario ser premium");
		}
	}
}
