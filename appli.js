var bouton = document.getElementById("bouton");
var multiplicateur = document.getElementById("multiplicateur");
var score = document.getElementById("score");
var autoclick = document.getElementById("autoclick");
score = 1;
nbMultiplicateur = 1;
function afficherScore() {
    var score.innerHTML = "Score : " + score;
}

function afficherNbMultiplicateur() {
    $multiplicateur.innerHTML = "Multiplicateur x" + nbMultiplicateur + " (prix du prochain verre : " + prix() + ")";
}

function afficherPrixAutoclick(){
    $autoclick.innerHTML = "acheter un autoclick au prix de " + acprix() + " cookies l'autoclic dure 10 secondes";
}
function clic() {
    score = score + nbMultiplicateur;
    afficherScore();
}

function prix() {
    return 50 * nbMultiplicateur * nbMultiplicateur;
}
function acprix(){
    return 200;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        nbMultiplicateur = nbMultiplicateur + 1;
        afficherNbMultiplicateur();
        afficherScore();
    } else {
        alert("Vous n'avez pas assez de cookies!!!");
    }
}
function acheterAutoclick() {
    if (score >= acprix()) {
        score = score - acprix();
        autoclicker();
        stopintervall();

    } else {
        alert("Votre score est insuffisant. Recommencez");
    }
};
function autoclicker(){
     $stop = setInterval($bouton.onclick,1000);
 
}
function stopintervall(){
    setTimeout(stopint,10000);
}
function stopint(){
    clearInterval($stop);
 }

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclick.onclick = acheterAutoclick;
afficherScore();
afficherNbMultiplicateur();
afficherPrixAutoclick();
