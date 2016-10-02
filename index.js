// Initialize Firebase
var config = {
  apiKey: "AIzaSyA5BHzoOn89dFPDbKWnTLpZge9OtpztY1s",
  authDomain: "tests-b30cd.firebaseapp.com",
  databaseURL: "https://tests-b30cd.firebaseio.com",
  storageBucket: "tests-b30cd.appspot.com",
  messagingSenderId: "619453600174"
};
firebase.initializeApp(config);

var currentUser = '';

/*var testListRef = firebase.database().ref('tests');
testListRef.on('value', function(snapshot) {
  var v = snapshot.val();
  console.log(arguments, testListRef);
  var listExercises = v.split(',');
  var currentSrc = document.currentScript.getAttribute('src');
  var m = currentSrc.match(/\?n=([0-9]+)/);
  var number = 0;
  if (m && m[1]) {
    number = Number(m[1]);
  }
});*/

window.submitTest = function() {
  if (!currentUser) {
    return alert('Inserisci il tuo nome e cognome!');
  }
  firebase.database().ref('submissions').push({
    user: currentUser,
    result: document.documentElement.innerHTML
  });
}

/* DOM */
var div = document.createElement('div');
div.style.position = 'absolute';
div.style.left = '0';
div.style.width = '100%';
div.style.bottom = 0;
div.style.height = '50px';
div.style.border = '1px solid black';

//
var input = document.createElement('input');
input.setAttribute('placeholder', 'Inserisci il tuo nome e cognome');
input.style.width = '80%';
input.style.height = '100%';
input.style.boxSizing = 'border-box';
input.style.fontSize = '24px';
input.value = currentUser;
input.onchange = function() {
  currentUser = input.value;
}

//
var button = document.createElement('button');
button.style.width = '20%';
button.style.height = '100%';
button.style.verticalAlign = 'top';
button.innerText = 'Submit';
button.onclick = window.submitTest;
div.appendChild(input);
div.appendChild(button);
document.body.appendChild(div);