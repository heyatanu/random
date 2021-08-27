// document.getElementById("refersh").addEventListener("click",function(){
//     document.getElementById("jocks").innerHTML="Loading ....";
//     document.getElementById("advicetext").innerHTML="Loading ....";
//     document.getElementById("fact").innerHTML="Loading ....";
//     generateMotivation();
//     generateFact();
//     generateJoke();
// });

try {

var tim;
var timm;
var timj;

document.getElementById("mr").addEventListener("click", function() {
    document.getElementById("advicetext").innerHTML = "Loading ....";
    stertintermotiv();
    generateMotivation();
});

document.getElementById("jr").addEventListener("click", function() {
    document.getElementById("jocks").innerHTML = "Loading ....";
    stertinterjock();
    generateJoke();
});

document.getElementById("fr").addEventListener("click", function() {
    document.getElementById("fact").innerHTML = "Loading ....";
    stertinterfact()
    generateFact();
});

generateJoke();

async function generateJoke() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const joke = await jokeRes.json();
    document.getElementById("jocks").innerHTML = (joke.joke);
    clearInterval(timj);
}


generateMotivation();

async function generateMotivation() {
    const resp = await fetch("https://api.adviceslip.com/advice");
    const respData = await resp.json();
    document.getElementById("advicetext").innerHTML = respData.slip.advice;
    clearInterval(timm)
}

generateFact()

function generateFact() {
    let urls = ["http://numbersapi.com/random/trivia", "http://numbersapi.com/random/date", "http://numbersapi.com/random/year", "http://numbersapi.com/random/math"];
    let rand = Math.floor((Math.random() * 4));
    fetch(urls[rand])
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("fact").innerHTML = data;
            clearInterval(tim)
        });
}

stertinterfact()

function stertinterfact() {
    tim = setInterval(function() {
        let co = document.getElementById("fact").innerHTML;
        if (co.length > 20) {
            document.getElementById("fact").innerHTML = "Loading";
        }
        document.getElementById("fact").innerHTML += ".";
    }, 250);
}
stertintermotiv()

function stertintermotiv() {
    timm = setInterval(function() {
        let co = document.getElementById("advicetext").innerHTML;
        if (co.length > 20) {
            document.getElementById("advicetext").innerHTML = "Loading";
        }
        document.getElementById("advicetext").innerHTML += ".";
    }, 250);
}
stertinterjock()

function stertinterjock() {
    timj = setInterval(function() {
        let co = document.getElementById("jocks").innerHTML;
        if (co.length > 20) {
            document.getElementById("jocks").innerHTML = "Loading";
        }
        document.getElementById("jocks").innerHTML += ".";
    }, 250);
}

}
catch(err) {
  //
}