// you can write js here
var scorePlayer=0;
var scoreComputer=0;
$('img').on('click', () => {
	var choix=event.target.id
	if(choix==="rock"){
		$('.userChoice').text("Choix du Joueur: Pierre");
	}
	else if(choix==="paper"){
		$('.userChoice').text("Choix du Joueur: Feuille");	
	}
	else if(choix==="scissors"){
		$('.userChoice').text("Choix du Joueur: Ciseaux");	
	};
	$(this).prop('disabled', true).delay(1000).queue(function(next) {
		$(this).prop('disabled', false);
		next();
		var uChoice=getUserChoice(choix);
		var computerChoice=getComputerChoice();
		console.log(uChoice+","+computerChoice);
		if (computerChoice==="rock"){
			$('h5').text("Choix de l'Ordinateur: Pierre");	
		}
		else if (computerChoice==="paper"){
			$('h5').text("Choix de l'Ordinateur: Papier");
		}
		else if (computerChoice==="scissors"){
			$('h5').text("Choix de l'Ordinateur: Ciseaux");
		}
		resultat=determineWinner(uChoice,computerChoice);
		if(resultat==="won"){
			$('p.result').text("Gagné !").attr('id','won');
			scorePlayer+=1;
		}
		else if (resultat==="lost"){
			$('p.result').text("Perdu !").attr('id','lost');
			scoreComputer+=1;
		}
		else if (resultat==="tied"){
			$('p.result').text("Egalité !").attr('id','tied');
		}
		$('.result').slideDown().delay(1000).fadeOut();
		$('span.left').text("Joueur: "+scorePlayer);
		$('span.right').text("Ordinateur: "+scoreComputer);
	})
});
$('button').click(function() {
	scorePlayer=0;
	scoreComputer=0;
	$('span.left').text("Joueur: "+scorePlayer);
	$('span.right').text("Ordinateur: "+scoreComputer);
});

function getUserChoice(userInput)
{
	userInput = userInput.toLowerCase();
	switch (userInput)
	{
		case 'rock':
		return userInput;
		break;
		case 'paper':
		return userInput;
		break;
		case 'scissors':
		return userInput;
		break;
		case 'bomb':
		return userInput;
		break;
		default:
		console.log('erreur');
	}
}

function getComputerChoice(){
	var random = Math.floor(Math.random()*3)+0;
	switch (random)
	{
		case 0:
		return "rock";
		break;
		case 1:
		return "paper";
		break;
		case 2:
		return "scissors";
		break;
	}
}

function determineWinner(userChoice,computerChoice){
	if(userChoice===computerChoice){
		return 'tied';
	}
	if(userChoice==='rock'){
		switch (computerChoice){
			case "paper":
			return "lost";
			break;
			case "scissors":
			return "won";
			break;
		}
	}
	if(userChoice==='paper'){
		switch (computerChoice){
			case "rock":
			return "won";
			break;
			case "scissors":
			return "lost";
			break;
		}
	}
	if(userChoice==='scissors'){
		switch (computerChoice){
			case "rock":
			return "lost";
			break;
			case "paper":
			return "won";
			break;
		}
	}
	if(userChoice==="bomb"){
		return "Won";
	}
}