import React from 'react';

function Greeting(props) {
    let lang = props.lang
let greeting
    switch (lang){
        case 'de':
            greeting = 'Hallo'
            break;
            case 'en':
            greeting = 'Hello'
            break;
            case 'es':
            greeting = 'Hola'
            break;
            case 'fr':
            greeting = 'Bonjour'
            break;
            default: greeting ='Welcome';
    }
  return (
    <div className='forgreeting'>
        <p>{greeting} {props.children}</p>
    </div>
  );
}
export default Greeting;