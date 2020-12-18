

import React from 'react';


function CreditCard(props) {
    let cardNumber = props.number
    let cardToDisplay
    let character = "*"
    function creditCardMask(number, character) {
        number = number.replace(/[^0-9]+/g, ''); /*ensureOnlyNumbers*/
        let l = number.length;
        cardToDisplay = character.repeat(l - 4) + number.substring(l - 4, l);
    }

    creditCardMask(cardNumber, character);

    const divStyle = {

        height: 150,
        width: 250,
        backgroundColor: props.bgColor,
        color: props.color
    };

    return (
        <div style={divStyle} className='IdCard'>
            <p>{props.type}</p>
            <p><strong>Number:</strong> {cardToDisplay}</p>
            <p><strong>Expires</strong>{props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    );
}
export default CreditCard;


