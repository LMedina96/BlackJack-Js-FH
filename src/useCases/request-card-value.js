/**
 * 
 * @param {string} card 
 * @returns {string}
 */
export const getCardValue = (card) => {
    let cardValue = card.substring(0, card.length -1);

    isNaN(cardValue)    ? (cardValue === 'A' ? cardValue = 11 : cardValue = 10) 
                        : cardValue = parseInt(cardValue)

    return cardValue;
}