setTimeout(function () {
	location.href = 'rocket.html'
}, 2000);

// practice with html + 
var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;
	//changing class name

	if (currentClassName == 'cool') {

	document.getElementById('cool').className = 'cool red';

	} else {
	document.getElementById('cool').className = 'cool';	

	}
}
// practice with fucntions
var myName = function (name) {
	alert('Your name is ' + name);
}

// practice
var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat1', 'seat2','seat3', 'seat4'],
			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car ' + isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;

				}
			}
	};

	console.log('hello there friends!');