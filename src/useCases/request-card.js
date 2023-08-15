/**
 * Return the last card in the deck
 * @returns {string}
 */
export const requestCard = (deck) => {
    if(deck.length === 0) {
        throw 'No hay mas cartas en el Deck'
    }
    
    return deck.pop();
}