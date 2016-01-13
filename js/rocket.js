var timer = null;
var countdownNumber = 10;

// change state from 1-4
var changeState = function (state) {
	document.body.className = 'body-state'+state;
	// timer for countdown
	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;
	document.getElementById('nervous').className = 'nervous';
	document.getElementById('cant-wait').className = 'cant-wait';



	//countdown
	if (state == 2) {
		// starts timer
		timer = setInterval(function () {
			countdownNumber = countdownNumber - 1; //counts down 1 by 1
			document.getElementById('countdown').innerHTML = countdownNumber;


			if (countdownNumber > 4 && countdownNumber <= 7) {
				//be nervous
				document.getElementById('nervous').className = 'nervous show';
			} else { 
				document.getElementById('nervous').className = 'nervous';

			}

			if (countdownNumber > 1 && countdownNumber <= 4) {
				//can't wait
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

			if (countdownNumber <= 0) {
				//lift off
				changeState(3); 
			};

		}, 500);

	} else if (state == 3) { 
		// pick random number for outcome - either Success or BOOM!
		var success = setTimeout(function () {
				var randomNumber = Math.round(Math.random()*10);

				console.log('randomNumber:', randomNumber)

				//success
				if (randomNumber > 5) {
					changeState(4);

				} else {
					changeState(5); //oh no! BOOM!

				};

		}, 2000);

	};
}
