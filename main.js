// let rn =  ["rouge","noir"];
// let random = "";
// let jouez = "";
// let points = 0;

// do {
//     random = rn[Math.round(Math.random())];
//     console.log(random);
//     jouez = prompt("La roulette touuurne, \"rouge\" ou \"noir\" ?");
//     console.log("réponse " +jouez);
//     if (jouez ===null || jouez === "") {
//         alert(`Il semblerait que vous avez décidé d'arrêter le jeu. Vous repartez donc avec ${points} points
//     `)
//     } else if (jouez.toLowerCase() === random) {
//         points += 2;
//         alert(`Vous avez gagné 2 points ! 
//         Votre cagnotte est de ${points}`)
//     } else {
//         points -= 2;
//         alert(`Vous avez perdu votre mise ! 
//         Votre cagnotte est de ${points}`)
//     }
// } while (points > 0 && points < 10 && jouez != null);
// console.log(points);
// console.log(jouez);
// if (points == 0) {
//     alert("On dirait bien que vous avez tout perdu...")
// } else if (points === 10) {
//     alert(`Vous avez atteint le jackpot avec ${points} points ! Nous ne pouvons plus vous laisser jouer, ou on va faire faillite`)
// } 


// test
if (confirm('Bienvenue dans ce jeu simplifié de la roulette. Découvre les règles et le plateau en cliquant sur OK. Un pop-up vers WikiHow s\'ouvrira')
) {
    window.open("https://fr.wikihow.com/jouer-%C3%A0-la-roulette")
} 

document.write("<h1> Ready? LET'S ROLL ! </h1>");

let where = "";
let numb = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
let redNumb = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let randomN = "";
let jouezInt = "";
let miseInt = "";
let points = "";
let exterior = "";
let colorJoueur = "";
let colorGame = "";
let rb = "";



// mise départ
points = parseInt(prompt("Echangez vos jetons. Pour combien en voulez-vous? Insérez un montant rond, pas de centimes."));
// début du jeu
do {
    mise = parseInt(prompt("Combien veux-tu miser ?"))
    where = prompt("Où désirez-vous jouez ? Intérieur ou extérieur ?")
    randomN = numb[Math.round(Math.random()*(numb.length -1))];
    console.log(randomN); //CHEATCODE
// intérieur ou extérieur
    switch (where) {
        case 0:
            alert(`Tu en restes là ? Tu repars avec un montant de ${points}`)
            break;
        case "intérieur":
            // case pleines
            jouezInt = parseInt(prompt("Quel numéro veux-tu jouer ?"))
            if (jouezInt === randomN ) {
                points += mise *35 
                alert (`Tu as gagné ! 
                Ta mise a été multipliée par 35. 
                Ta cagnotte est donc maintenant de ${points} `)
            } else {
                points -= mise;
                alert (`Tu as perdu ta mise ! 
                Ta cagnotte est donc maintenant de ${points} `)
            }
            break;
        case "extérieur":
            exterior = parseInt(prompt(`Où veux-tu miser ?
            1. couleurs
            2. autre
            Ecris le chiffre correspondant`));
            switch (exterior) {
                case 1:
                    // some
                    rb = (element) => element === randomN;
                    if (redNumb.some(rb)) {
                        colorGame = "rouge";    
                    } else {
                        colorGame = "noir";
                    };
                    console.log(colorGame);
                    colorJoueur = prompt("Quelle couleur ? rouge ou noir ?")
                    if (colorJoueur.toLowerCase()===colorGame) {
                        points += 0;
                        alert (`Tu as gagné ! 
                        Tu récupères ta mise. 
                        Ta cagnotte est donc de ${points} `)
                    } else {
                        points -= mise;
                        alert (`Tu as perdu ta mise ! 
                        Ta cagnotte est donc maintenant de ${points} `)
                    }
                    break;
            
                case 2:
                    
                    break;
            
                default:

                    break;
            }
            break;
        default:
            break;
    }
} while (points > 0 && points < 2000);
