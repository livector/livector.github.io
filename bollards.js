let start = document.getElementById("start");
let corr = 0;
let incorr = 0;
let start2 = 0;
let end = document.getElementById("restart");

start.addEventListener("click", gameStart);

function gameStart(){


    var bollardList = ['assets/Andorra.png','assets/Australia.png','assets/Austria.png','assets/Belgium.png','assets/Czechia.png','assets/Denmark.png', 'assets/Ecuador.png', 'assets/Finland.png','assets/France.png','assets/Iceland.png', 'assets/India.png','assets/Liechtenstein.png','assets/Lithuania.png','assets/New Zealand.png', 'assets/Norway.png','assets/Poland.png', 'assets/Slovakia.png','assets/Spain.png', 'assets/Sri Lanka.png', 'assets/Sweden.png','assets/Thailand.png', 'assets/Turkey.png'];
    var bollardCountries = ["Andorra", 'Australia','Austria','Belgium','Czechia','Denmark', 'Ecuador', 'Finland', 'France','Iceland', 'India', 'Liechtenstein','Lithuania','New Zealand', 'Norway','Poland','Slovakia','Spain','Sri Lanka', 'Sweden','Thailand', 'Turkey'];
    let bollardNum = Math.floor(Math.random() * bollardList.length);

    var oldLength = bollardList.length;
    document.getElementById("imageHolder").src = bollardList[bollardNum];

    submit.addEventListener("click",verifyGame);
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
            document.getElementById("imageHolder").src = "assets/abc.jpg";
            document.getElementById("msg").innerText = "Congratulations! You scored " + corr + "/" + (corr + incorr) + "! Refresh the page to play again!";
            document.getElementById("verification").innerText = "";
        }   
    }
}

