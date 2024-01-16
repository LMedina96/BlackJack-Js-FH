import { createDeck } from "./useCases/create-deck";
import { requestCard } from "./useCases/request-card";
import { getCardValue } from "./useCases/request-card-value";

const cardTypes = ['C', 'D', 'H', 'S']
const cardSpecials = ['A', 'J', 'Q', 'K']

let deck = [];
let playerScore = 0;
let CPUScore = 0;
let hasAs = false;
let firstCPUCard = true;

const requestBtn = document.querySelector('#btnRequest');
const stopBtn = document.querySelector('#btnStop');
const newBtn = document.querySelector('#btnNew');
const scoreDOM = document.querySelectorAll('small');
const playerCards = document.querySelector('#jugador-cartas')
const cpuCards = document.querySelector('#computadora-cartas')
const alertWin = document.querySelector('#alertWin').classList
const alertLoss = document.querySelector('#alertLoss').classList
const alertTie = document.querySelector('#alertTie').classList
const imgCartaBack = document.createElement('img');

deck = createDeck(cardTypes, cardSpecials, deck)
requestCard(deck);

const cpuTurn = (minScore) => {
    if (firstCPUCard) {
        imgCartaBack.remove();
        firstCPUCard = false
    }
    do {
        getNewCardCPU();
    } while ((CPUScore <= minScore) && (minScore <= 21) && (CPUScore <= 16));

    checkScore(minScore);
}

const getNewCardPlayer = () => {
    let card = requestCard(deck);
    
    if(getCardValue(card) == 11) {
        hasAs = true
    }

    playerScore += getCardValue(card)

    if(playerScore > 21 && hasAs) {
        playerScore -= 10;
        hasAs = false;
    }
    
    scoreDOM[0].innerText = playerScore;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${card}.png`
    imgCarta.classList.add('carta')
    playerCards.append(imgCarta)

    if(playerScore > 21) {
        requestBtn.disabled = true;
        stopBtn.disabled = true;
        setTimeout(() => {
            alertLoss.remove('d-none')
            alertLoss.add('d-block')
        }, 100);
    } else if(playerScore == 21) {
        cpuTurn()
    }

    return playerScore
} 

const getNewCardCPU = () => {
    let card = requestCard(deck);

        if(getCardValue(card) == 11) {
            hasAs = true
        }
    
        CPUScore += getCardValue(card)
    
        if(CPUScore > 21 && hasAs) {
            CPUScore -= 10;
            hasAs = false;
        }

        scoreDOM[1].innerText = CPUScore;
    
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${card}.png`
        imgCarta.classList.add('carta')
        cpuCards.append(imgCarta)
}

const dealNewCards = () => {
    deck = createDeck(cardTypes, cardSpecials, deck)
    for (let i = 0; i < 2; i++) {
        getNewCardPlayer();
    }
    getNewCardCPU();
    imgCartaBack.src = `assets/cartas/grey_back.png`
    imgCartaBack.classList.add('carta')
    cpuCards.append(imgCartaBack)
}

const checkScore = (minScore) => {
    setTimeout(() => {
        if((CPUScore > playerScore) && (CPUScore <= 21)) {
            alertLoss.remove('d-none')
            alertLoss.add('d-block')
        } else if((CPUScore < minScore) || (CPUScore > 21)) {
            alertWin.remove('d-none')
            alertWin.add('d-block')
        } else if (minScore == CPUScore) {
            alertTie.remove('d-none')
            alertTie.add('d-block')
        }
    }, 100)
}

const hiddeAlerts = () => {
    alertLoss.contains('d-block') ? alertLoss.replace('d-block', 'd-none') : null;
    alertWin.contains('d-block') ? alertWin.replace('d-block', 'd-none') : null;
    alertTie.contains('d-block') ? alertTie.replace('d-block', 'd-none') : null;
}

//Events
requestBtn.addEventListener('click', () => {
    getNewCardPlayer();
    const getCardAudio = document.createElement("audio");
    getCardAudio.preload = "auto";
    getCardAudio.src = "assets/sounds/click.mp3";
    getCardAudio.play();
    getCardAudio.remove();
})

stopBtn.addEventListener('click', () => {
    cpuTurn(playerScore);
    requestBtn.disabled = true;
    stopBtn.disabled = true;
})

newBtn.addEventListener('click', () => {
    playerCards.innerHTML = '';
    cpuCards.innerHTML = '';

    firstCPUCard = true;
    scoreDOM[0].innerText = 0;
    scoreDOM[1].innerText = 0;

    playerScore = 0;
    CPUScore = 0;

    dealNewCards();
    hiddeAlerts();

    requestBtn.disabled = false;
    stopBtn.disabled = false;
})

dealNewCards();