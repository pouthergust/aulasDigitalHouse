
public class Main {

	public static void main(String[] args) {
		new ArvoreFactory(1000000);
		
		Runtime runtime = Runtime.getRuntime();
		System.out.println("Memória utilizada: " + (
			runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024)
		);

	}

}
