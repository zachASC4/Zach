import java.util.Scanner;
import java.util.Random;
public class RockPaperScissors {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in); 
		Random generator = new Random(); 
		System.out.println("Welcome to Rock Paper Scissors! Type 'R' for Rock 'P' for Paper or 'S' for Scissors");
		String userChoice; 
		String computerPlay = ""; 
		int computerChoice; 
		String response; 

		computerChoice = generator.nextInt(3)+1; 

		if (computerChoice == 1) 
			computerPlay = "R"; 
		else if (computerChoice == 2) 
			computerPlay = "P"; 
		else if (computerChoice == 3) 
			computerPlay = "S"; 

		userChoice = scan.next();
		userChoice = userChoice.toUpperCase(); 


		System.out.println("Computer  is: " + computerPlay); 

		if (userChoice.equals(computerPlay)) 
			System.out.println("It's a tie!"); 
		else if (userChoice.equals("R")) 
			if (computerPlay.equals("S")) 
				System.out.println("Rock crushes scissors. You win!!");
			else if (computerPlay.equals("P")) 
				System.out.println("Paper eats rock. You lose!!"); 
			else if (userChoice.equals("P")) 
				if (computerPlay.equals("S")) 
					System.out.println("Scissor cuts paper. You lose!!"); 
				else if (computerPlay.equals("R")) 
					System.out.println("Paper eats rock. You win!!"); 
				else if (userChoice.equals("S")) 
					if (computerPlay.equals("P")) 
						System.out.println("Scissor cuts paper. You win!!"); 
					else if (computerPlay.equals("R")) 
						System.out.println("Rock breaks scissors. You lose!!"); 
					else 
						System.out.println("Invalid user input."); 
	}


}