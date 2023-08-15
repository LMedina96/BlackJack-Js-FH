import _ from 'underscore'

/**
 * 
 * @param {Array} cardTypes 
 * @param {Array} cardSpecials 
 * @returns {Array} Deck Completed and shuffled
 */
export const createDeck = (cardTypes, cardSpecials) => {
    
    let deck = [];
    
    for(let i = 2; i <= 10; i++){
        for(let type of cardTypes){
            deck.push(i + type)
        }
    }

    for(let type of cardTypes) {
        for(let special of cardSpecials) {
            deck.push(special + type)
        }
    }

    deck = _.shuffle(deck);
    return deck;
}