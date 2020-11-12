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


// déclaration de variables
let where = "";
let numb = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
let randomN = "";
let points = "";
let mise = "";

// 
let interior = "";
let casePleine = "";
let multNumb = "";
let multNumbTb = [];
// let square = "";
// let squareTb = [];
// let trio = "";
// let trioTb = [];
// let sizain = "";
// let sizainTb = [];

// 
let exterior = "";
let redNumb = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
let colorJoueur = "";
let colorGame = "";
let rb = "";

let whichPart = "";
const col1 = [1,4,7,10,13,16,19,22,25,28,31,34];
const col2 = [2,5,8,11,14,17,20,23,26,29,32,35];
const col3 = [3,6,9,12,15,18,21,24,27,30,33,36]
const douz1 = [1,2,3,4,5,6,7,8,9,10,11,12];
const douz2 = [13,14,15,16,17,18,19,20,21,22,23,24];
const douz3 = [25,26,27,28,29,30,31,32,33,34,35,36];
const manque = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
const passe = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]



// début du jeu

// mise départ
points = parseInt(prompt("Echangez vos jetons. Pour combien en voulez-vous? Insérez un montant rond, pas de centimes."));
// début du jeu
do {
    mise = parseInt(prompt("Combien veux-tu miser ?")) //définition de la mise d'UN SEUL tour
    console.log(mise);
    randomN = numb[Math.round(Math.random()*(numb.length -1))]; //lancé prématuré de la bille dans la roulette (en coulisse)
    where = prompt("Où désirez-vous jouez ? Intérieur ou extérieur ?") //pre switch
    console.log(where);
    console.log(randomN); //CHEATCODE
    // intérieur ou extérieur
    switch (where) {
        case 0:
            alert(`Tu en restes là ? Tu repars avec un montant de ${points}`)
            break;
        case "intérieur":
            interior = parseInt(prompt(`Comment veux-tu miser ? Ecris le chiffre correspondant : 
            1. Case pleines
            2. A cheval
            3. Le carré
            4. La transversale
            5. Le sizain`))
            switch (interior) {
                case 1:
                    // case pleines
                    casePleine = parseInt(prompt("Quel numéro veux-tu jouer ?"))
                    if (casePleine === randomN ) {
                        points += mise *35 
                        alert (`Tu as gagné ! 
                        Ta mise a été multipliée par 35. 
                        Ta cagnotte est donc maintenant de ${points} `)
                    } else {
                        points -= mise;
                        alert (`Tu as perdu ta mise ! 
                        Ta cagnotte est donc maintenant de ${points} `)
                    }
                    break; //fin cases pleines
                // début cheval
                case 2:
                    for (let i= 0; i <2; i++) {
                        multNumb = parseInt(prompt(`Donnez moi vos chiffres un par un`));
                        multNumbTb.push(multNumb);
                    };
                    if (multNumbTb[0] === randomN || multNumbTb[1] === randomN) {
                        points += mise *17;
                        alert (`Tu as gagné ! 
                        Ta mise a été multipliée par 17. 
                        Ta cagnotte est donc maintenant de ${points} `)
                    } else {
                        points -= mise;
                        alert (`Tu as perdu ta mise ! 
                        Ta cagnotte est donc maintenant de ${points} `)
                    }
                    break;
                    // fin multNumb
                // début carré
                case 3:
                    for (let i= 0; i <4; i++) {
                        multNumb = parseInt(prompt(`Donnez moi vos chiffres un par un`));
                        multNumbTb.push(multNumb);
                    };
                    if (multNumbTb[0] === randomN || multNumbTb[1] === randomN || multNumbTb[2] === randomN || multNumbTb[3] === randomN) {
                        points += mise *8;
                        alert (`Tu as gagné ! 
                        Ta mise a été multipliée par 8. 
                        Ta cagnotte est donc maintenant de ${points} `)
                    } else {
                        points -= mise;
                        alert (`Tu as perdu ta mise ! 
                        Ta cagnotte est donc maintenant de ${points} `)
                    }
                    break;
                    // fin carré
                //début ligne de 3
                case 4:
                    for (let i= 0; i <3; i++) {
                        multNumb = parseInt(prompt(`Donnez moi vos chiffres un par un`));
                        multNumbTb.push(multNumb);
                    };
                    if (multNumbTb[0] === randomN || multNumbTb[1] === randomN || multNumbTb[2] === randomN) {
                        points += mise *11;
                        alert (`Tu as gagné ! 
                        Ta mise a été multipliée par 11. 
                        Ta cagnotte est donc maintenant de ${points} `)
                    } else {
                        points -= mise;
                        alert (`Tu as perdu ta mise ! 
                        Ta cagnotte est donc maintenant de ${points} `)
                    }
                    break;
                    // fin ligne3
                //début sizain
                case 5:
                    for (let i= 0; i <6; i++) {
                        multNumb = parseInt(prompt(`Donnez moi vos chiffres un par un`));
                        multNumbTb.push(multNumb);
                    };
                    if (multNumbTb[0] === randomN || multNumbTb[1] === randomN || multNumbTb[2] === randomN) {
                        points += mise *5;
                        alert (`Tu as gagné ! 
                        Ta mise a été multipliée par 11. 
                        Ta cagnotte est donc maintenant de ${points} `)
                    } else {
                        points -= mise;
                        alert (`Tu as perdu ta mise ! 
                        Ta cagnotte est donc maintenant de ${points} `)
                    }
                    break;
                    // fin ligne3
            
                default:
              alert(`Il semblerait que vous avez décidé d'arrêter le jeu. Vous repartez donc avec ${points} points`)
                    break;
            }
            break; //fin interior
        // début exterior
        case "extérieur":
            exterior = parseInt(prompt(`Où veux-tu miser ?
            1. La couleur
            2. Pair ou Impair
            3. Sur la colonne
            4. Sur la douzaine
            5. Passe ou Manque
            Ecris le chiffre correspondant`));
            switch (exterior) {
                //début couleur
                case 1:
                    // some
                    rb = (element) => element === randomN;
                    if (redNumb.some(rb)) {
                        colorGame = "rouge";    
                    } else {
                        colorGame = "noir";
                    };
                    console.log(colorGame); //CHEATCODE
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
            
                // fin couleur
                case 2:
                    // some
                    if (randomN % 2 === 0) {
                        colorGame = "pair";    
                    } else {
                        colorGame = "impair";
                    };
                    console.log(colorGame); //CHEATCODE
                    colorJoueur = prompt("\"Pair\" ou \"impair\" ?")
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
                    // début colonnes question
                    case 3:
                        whichPart = parseInt(prompt(`Sur quelle colonne veux-tu miser ?
                        1. Première
                        2. Deuxième
                        3. Troisième`))
                        // début switch which
                        switch (whichPart) {
                            case 1:
                                rb = (element) => element === randomN;
                                if (col1.some(rb)) {
                                    points += mise *2 
                                    alert (`Tu as gagné ! 
                                    Ta mise a été multipliée par 2. 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                } else {
                                    points -= mise;
                                    alert (`Tu as perdu ta mise ! 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                };
                                break;
                            case 2:
                                rb = (element) => element === randomN;
                                if (col2.some(rb)) {
                                    points += mise *2 
                                    alert (`Tu as gagné ! 
                                    Ta mise a été multipliée par 2. 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                } else {
                                    points -= mise;
                                    alert (`Tu as perdu ta mise ! 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                };
                                break;
                            case 3:
                                rb = (element) => element === randomN;
                                if (col3.some(rb)) {
                                    points += mise *2 
                                    alert (`Tu as gagné ! 
                                    Ta mise a été multipliée par 2. 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                } else {
                                    points -= mise;
                                    alert (`Tu as perdu ta mise ! 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                };
                                break;
                            default:
                                break;
                        }
                        break;
                        // fin colonne question
                    // début question douzaine
                    case 4:
                        whichPart = parseInt(prompt(`Sur quelle douzaine veux-tu miser ?
                        1. Première
                        2. Deuxième
                        3. Troisième`))
                        // début switch which
                        switch (whichPart) {
                            case 1:
                                rb = (element) => element === randomN;
                                if (douz1.some(rb)) {
                                    points += mise *2 
                                    alert (`Tu as gagné ! 
                                    Ta mise a été multipliée par 2. 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                } else {
                                    points -= mise;
                                    alert (`Tu as perdu ta mise ! 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                };
                                break;
                            case 2:
                                rb = (element) => element === randomN;
                                if (douz2.some(rb)) {
                                    points += mise *2 
                                    alert (`Tu as gagné ! 
                                    Ta mise a été multipliée par 2. 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                } else {
                                    points -= mise;
                                    alert (`Tu as perdu ta mise ! 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                };
                                break;
                            case 3:
                                rb = (element) => element === randomN;
                                if (douz3.some(rb)) {
                                    points += mise *2 
                                    alert (`Tu as gagné ! 
                                    Ta mise a été multipliée par 2. 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                } else {
                                    points -= mise;
                                    alert (`Tu as perdu ta mise ! 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                };
                                break;
                            default:
                                break;
                        }
                        break;
                    // fin douzaine
                    // début passe et manque
                    case 5:
                        whichPart = parseInt(prompt(`Sur quelle colonne veux-tu miser ?
                        1. Manque
                        2. Passe`))
                        // début switch which
                        switch (whichPart) {
                            case 1:
                                rb = (element) => element === randomN;
                                if (manque.some(rb)) {
                                    points += 0;
                                    alert (`Tu as gagné ! 
                                    Tu as récupéré ta mise. 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                } else {
                                    points -= mise;
                                    alert (`Tu as perdu ta mise ! 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                };
                                break;
                            case 2:
                                rb = (element) => element === randomN;
                                if (passe.some(rb)) {
                                    points += 0;
                                    alert (`Tu as gagné ! 
                                    Tu as récupéré ta mise. 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                } else {
                                    points -= mise;
                                    alert (`Tu as perdu ta mise ! 
                                    Ta cagnotte est donc maintenant de ${points} `)
                                };
                                break;
                            default:
                                break;
                        }
                        break;
                        

            
                default:

                    break;
            }
            break;
        default:
            break; //fin exterior
    } //fin interior ou exterior
console.log(mise);
console.log(where);
} while (points > 0 && points < 2000 );
//cloture de la boucle totale

// && mise != null && mise !="" && (isNaN(mise)!=true) && where != null && (isNaN(where)!=true) && where !=""
