try {
let triviaQus = document.getElementById("triviaQus");
let answer = document.getElementById("answer");
let catagory = document.getElementById("catagory");
let difficulty = document.getElementById("difficulty");
// let type=document.getElementById("type");

let ans = [];
document.getElementById("newquiz").addEventListener("click", function() {
    triviaQus.innerHTML="Loading...";
    generateQuiz();
});

async function generateQuiz() {
    answer.innerHTML = "";
    catagory.innerHTML = "";
    difficulty.innerHTML = "";
    // type.innerHTML="";
    while (ans.length > 0) {
        ans.pop();
    }
    const resp = await fetch("https://opentdb.com/api.php?amount=1");
    const respData = await resp.json();
    let res = (respData.results[0]);
    console.log(res)
    catagory.innerHTML = res.category;
    difficulty.innerHTML = res.difficulty;
    // type.innerHTML=res.type;
    ans.push(res.correct_answer)
    ans = ans.concat(res.incorrect_answers);
    triviaQus.innerHTML = res.question;
    ans = shuffleArray(ans);
    let htmlans = ``;
    for (let i = 0; i < ans.length; i++) {
        htmlans += `
        <div class="alert alert-info ansclick"">
        <strong>` + ans[i] + `</strong>
        </div>
        `;
    }
    answer.innerHTML = htmlans;
    var x = document.querySelectorAll(".ansclick");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].onclick = function(e) {
            check(e.path[0].innerText, res.correct_answer, res.incorrect_answers, ans);
        }
    }
}

function check(selectans, corrans, inansarr, finalans) {
    let htmlansfi = ``;
    for (let i = 0; i < finalans.length; i++) {
        if (finalans[i] == corrans) {
            if (selectans == corrans) {
                htmlansfi += `
                <div class="alert alert-success ansclick"">
                <strong>` + finalans[i] + `</strong><strong>    (CORRECT)</strong>
                </div>
                `;
            } else {
                htmlansfi += `
                <div class="alert alert-success ansclick"">
                <strong>` + finalans[i] + `</strong>
                </div>
                `;
            }
        } else {
            htmlansfi += `
            <div class="alert alert-danger ansclick"">
            <strong>` + finalans[i] + `</strong>
            </div>
            `;
        }
    }
    answer.innerHTML = htmlansfi;
    // var x = document.querySelectorAll(".ansclick");
    // var i;
    // for (i = 0; i < x.length; i++) {
    //     x[i].style.cursor = 'not-allowed';
    // }
}

function shuffleArray(array) {

    return array.sort(() => Math.random() - 0.5);

}

let rtd = document.getElementById("rtd");
let ttd = document.getElementById("ttd");
if(document.getElementById("randomt")!=null){
    document.getElementById("randomt").addEventListener("click", function() {
        rtd.style.display = "block";
        ttd.style.display = "none";
        document.getElementById("randomt").classList.add("active");
        document.getElementById("triviaq").classList.remove("active");
    
    });
}

if(document.getElementById("triviaq")!=null){
    document.getElementById("triviaq").addEventListener("click", function() {
        generateQuiz();
        document.getElementById("randomt").classList.remove("active");
        document.getElementById("triviaq").classList.add("active");
        rtd.style.display = "none";
        ttd.style.display = "block";
    });
}

}
catch(err) {
  //
}