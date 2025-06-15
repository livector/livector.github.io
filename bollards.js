
let start = document.getElementById("start");
let corr = 0;
let incorr = 0;
let start2 = 0;
let end = document.getElementById("restart");

start.addEventListener("click", gameStart);

function gameStart(){


    var bollardList = ['Andorra.png','Australia.png','Austria.png','Belgium.png','Czechia.png','Denmark.png','France.png','Iceland.png','Lithuania.png','New Zealand.png','Poland.png','Spain.png','Thailand.png'];
    var bollardCountries = ["Andorra", 'Australia','Austria','Belgium','Czechia','Denmark','France','Iceland','Lithuania','New Zealand','Poland','Spain','Thailand'];
    let bollardNum = Math.floor(Math.random() * bollardList.length);

    var oldLength = bollardList.length;
    document.getElementById("imageHolder").src = bollardList[bollardNum];

    submit.addEventListener("click",verifyGame);
    window.addEventListener()
    start2++; 
    corr = 0;
    incorr = 0;
    function verifyGame(){
        console.log([bollardList]);
        let input = document.getElementById("guessInput").value;
        if (input == (bollardCountries[bollardNum])){
            document.getElementById("verification").innerText = "Correct!";
            corr ++;
            document.getElementById("displayCorrect").innerText = "Correct: " + corr;
            

                document.getElementById("pct").innerText = "Percent Correct: " + Math.round((corr/(incorr + corr)) * 100) + "%";
        } else {
            let incorrs = 1;
            document.getElementById("verification").innerText = "Incorrect. The correct answer was " + bollardCountries[bollardNum] + ".";
            incorr ++;
            document.getElementById("displayIncorrect").innerText = "Incorrect: " + incorr;
            document.getElementById("pct").innerText = "Percent Correct: " + Math.round(corr/(incorr + corr) * 100 ) + "%";
        }
        document.getElementById("guessInput").value = "";
        let bollardNumOld = bollardNum;
        bollardList.splice(bollardNumOld,1);
        bollardCountries.splice(bollardNumOld,1);
        bollardNum = Math.floor(Math.random() * bollardList.length);
        document.getElementById("imageHolder").src = bollardList[bollardNum];

        if ((corr + incorr) == oldLength){
            console.log("This works");
            document.getElementById("imageHolder").src = "abc.jpg";
            document.getElementById("msg").innerText = "Congratulations! You scored " + corr + "/" + (corr + incorr) + " ! Refresh the page to play again!";
            document.getElementById("verification").innerText = "";
        }   
    }
}

