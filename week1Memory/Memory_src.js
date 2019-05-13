/**
 *
 */
var startTijd, totaalTijd = 0, aantalTijden = 0;
// StartTijd is de tijd dat het huidige spel begonnen is.
// Totaaltijd is de som van de tijd van alle gespeelde spelletjes, aantaltijden is het aantal spelletjes
var firstCard, secondCard;
// De eerste en tweede kaart die zijn omgedraaid.
var karakter;
// Het teken dat op de achterkant van de kaart getoond wordt
var intervalID,tijdID;
// De ID's voor de timeouts voor het terugdraaien van de kaarten en het bijwerken van de tijdweergave
var timeLeft = 100;
var tijdIsGoing = false;
var activeIntervals = [];

var numberOfCards;
// Aantal kaarten op het bord
var numberOfCardsLeft;
// Aantal kaarten dat nog op het bord ligt
var topScores = [
                 {name:"Barack Obama", time:200},
                 {name:"Bernie Sanders", time:300},
                 {name:"Hillary Clinton", time:400},
                 {name:"Jeb Bush", time:500},
                 {name:"Donald Trump", time:9000}
                 ]


function initGame(size) {
	initVars(size);
	vulSpeelveld(size);
	showScores();
}

function initVars(size){
	// Initialiseer alle benodigde variabelen en de velden op het scherm
	setInterval(setTijden, 1000)
	numberOfCards = size*size;
	numberOfCardsLeft = numberOfCards;
	document.getElementById("tijd").innerHTML = 0;
	document.getElementById('gevonden').innerHTML = 0;
	timeLeft = 100;
	document.getElementById("timeLeft").style.width = '100%';
	tijdIsGoing = false;
	clearTimer();
	intervalID = undefined;
	startTijd = undefined;
}

function vulSpeelveld(size){
	// Bouw de size x size table speelveld op. Elk <td> element van de tabel
	// moet een karakter toegewezen worden. Hiervoor kan de nextletter functie
	// gebruikt worden. Ook moet de eventlistener cardClicked aan de cell gekoppeld worden
	// en de opmaak juist gezet worden.
  document.getElementById("speelveld").innerHTML = ""; // Clear board
  var next = new nextLetter(size);

  for (var i = 0; i < size; i++) {
    var tr = document.createElement('tr');

    for (var j = 0; j < size; j++) {
      var td = document.createElement('td');
      td.innerHTML = document.getElementById("character").value;
      td.className = 'inactive';
      td.chr = next();
      td.addEventListener('click', cardClicked, true);
      tr.appendChild(td);
    }

    document.getElementById("speelveld").appendChild(tr);
  }
  firstCard = secondCard = undefined;
}

function showScores(){
	// Vul het topscore lijstje op het scherm.
	document.getElementById("topscores").innerHTML = ""; // Clear board
	for (let i = 0 ; i < 5; i++) {
		let li = document.createElement('li');
      	li.innerHTML = topScores[i].name + " : " + topScores[i].time;
     	document.getElementById("topscores").appendChild(li);
	}
}

var timePlayed = 0;
function setTijden(){
	// bereken de verlopen tijd, de gemiddlede tijd en het verschil tussen
	// de huidige speeltijd en de gemiddelde tijd en vul de elementen in de HTML.
	// Vul ook het aantal gevonden kaarten
	if (startTijd) {
		timePlayed = getSeconds() - startTijd;
	  	document.getElementById("tijd").innerHTML = timePlayed;
	  	let average = parseInt(totaalTijd / aantalTijden);
	  	if (!average) {
	  		average = 0;
	  	}
		document.getElementById("gemiddeld").innerHTML = average + "s (+" + timePlayed + "s)";
	}
}

function getSeconds() {
	// Een functie om de Systeemtijd in seconden in plaats van miliseconden
	// op te halen. Altijd handig.
  var d = new Date();
  return parseInt(d/1000);
}

function clearTimer() {
	clearInterval(intervalID);
	activeIntervals.pop(intervalID);
	for (let i = 0; i < activeIntervals.length; i++) {
		clearInterval(activeIntervals[i]);
		activeIntervals.pop(activeIntervals[i]);
	}
	intervalID = undefined;
}

var nextLetter = function(size){
	var letterArray = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0,size*size).split('');
	var idx=0;
	letterArray=shuffle(letterArray);
	return function() {
		var letter = letterArray[idx++];
		return letter;
	}
}

function cardClicked(card) {
	checkStarttijd();
	checkDerdeKaart();
	var draaiKaartOm = turnCard(card);
	if (draaiKaartOm==2){
		checkKaarten();
	}
}

function checkStarttijd(){
	// Controleer of de startijd van het spel gezet is, i.e. het spel al gestart was.
	// Als dat niet zo is doe dat nu, en start de timeOut voor het bijhouden van de tijd.
	if (!startTijd) {
		startTijd = getSeconds();
	}	
}

function checkDerdeKaart(){
	// Controleer of het de derde kaart is die wordt aangeklikt.
	// Als dit zo is kunnen de geopende kaarten gedeactiveerd (gesloten) worden.
  var cards = document.getElementsByClassName('active');
  if (cards.length >= 2 && firstCard !== undefined && secondCard !== undefined) {
    deactivateCards();
  }
}

function turnCard(card){
	// Draai de kaart om. Dit kan alleen als de kaart nog niet geopend of gevonden is.
	// Geef ook aan hoeveel kaarten er nu zijn omgedraaid en return dit zodat in de
	// cardClicked functie de checkKaarten functie kan worden aangeroepen als dat nodig is.
  var element = card.target;
  var amount = 0;

  if (element.classList.contains('inactive')) {
    element.innerHTML = element.chr;
    element.className = 'active';
  } else {
    return;
  }

  if (!firstCard) {
    amount++;
    firstCard = element;
  } else if (!secondCard) {
    amount+=2;
    secondCard = element;
  }
  return amount;
}

function deactivateCards() {
	if (firstCard) {
		firstCard.className  = 'inactive';
	    firstCard.innerHTML = document.getElementById("character").value;
	    firstCard = undefined;
	}
	if (secondCard) {
		secondCard.className = 'inactive';
    	secondCard.innerHTML = document.getElementById("character").value;
    	secondCard = undefined;
	}
  }

function toggleCard(element) {
	// Draai de kaart om, als de letter getoond wordt, toon dan de achterkant en
	// vice versa. switch dus van active naar inactive of omgekeerd.
}

function checkKaarten(){
	// Kijk of de beide kaarten gelijk zijn. Als dit zo is moet het aantal gevonden paren
	// opgehord worden, het aantal resterende kaarten kleiner worden en ervoor
	// gezorgd worden dat er niet meer op de kaarten geklikt kan worden. De kaarten
	// zijn nu found.
	// Als de kaarten niet gelijk zijn moet de timer gaan lopen van de toontijd, en
	// de timeleft geanimeerd worden zodat deze laat zien hoeveel tijd er nog is.

	if (firstCard.innerHTML === secondCard.innerHTML) {
		firstCard.className = secondCard.className = 'found';
		firstCard = secondCard = undefined;
		numberOfCardsLeft -= 2;
		var won = (numberOfCards - numberOfCardsLeft) / 2;
		document.getElementById('gevonden').innerHTML = won;
		clearInterval(intervalID);
		clearTimer();
		intervalID = undefined;
		tijdIsGoing = false;
	} else {
		timeLeft = 100;
		document.getElementById("timeLeft").style.width = '100%';
		tijdIsGoing = true;
		intervalID = setInterval(tijdBijhouden, 500);
		activeIntervals.push(intervalID);
	}

	if (numberOfCardsLeft == 0) {
		aantalTijden++;
		endGame();
		clearTimer();
		startTijd = undefined;
	}
}

// De functie tijdBijhouden moet elke halve seconde uitgevoerd worden om te controleren of
// het spel klaar is en de informatie op het scherm te verversen.
function tijdBijhouden(){
	if (intervalID) {
		// Roep hier deze functie over 500 miliseconden opnieuw aan
		if (tijdIsGoing === true) {
			clearTimer();
			if (timeLeft <= 0) {
				deactivateCards();
				tijdIsGoing = false;
				timeLeft = 100;
			} else {
				timeLeft -= 25;
				console.log("Inteval length: " + activeIntervals.length);
			}
			document.getElementById("timeLeft").style.width = timeLeft + '%';
			intervalID = setInterval(tijdBijhouden, 500);
			activeIntervals.push(intervalID);
		}
	}
}

function endGame(){
	// Bepaal de speeltijd, chekc topscores en doe de overige
	// administratie.
	let person = prompt("Game is finshed! Congrats! Enter name", "Player 1");
	totaalTijd += timePlayed;
	updateTopScores(person, timePlayed);
	tijdIsGoing = false;
	clearTimer();
}

function updateTopScores(newName, speelTijd){
	// Voeg de aangeleverde speeltijd toe aal de lijst met topscores
	// sorteer op tijd
	topScores.push( { name: newName, time:speelTijd} );
	topScores.sort(function (a, b) {
	    return a.time-b.time;
	  });
	showScores();
}

// Deze functie ververst de kleuren van de kaarten van het type dat wordt meegegeven.
function setColor(stylesheetId) {
	var valueLocation = '#value'+stylesheetId.substring(3);
	var color = $(valueLocation).val();
	$(stylesheetId).css('background-color', '#'+color );
  }

// knuth array shuffle
// from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

$(document).ready(function(){
    $("#opnieuw").click(function(){
        initGame($("#size").val());
    });
});
