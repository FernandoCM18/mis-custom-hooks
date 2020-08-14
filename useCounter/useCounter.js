import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {

    const [counter, setCounter] = useState(initialState);

    const increment = () => {
        setCounter( counter + 1 );
    };

    const reset = () => {
        setCounter( initialState );
    };

    const decrement = () => {
        setCounter( counter -1 );
    };

    return {
        counter,
        increment,
        reset,
        decrement
    };

}

// export const useCounter = ( initialState = 10 ) => {

//     const [state, setstate] = useState(initialState);

//     const increment = ( factor = 1 ) => {
//         setstate( state + factor );
//     };

//     const reset = () => {
//         setstate( initialState );
//     };

//     const decrement = ( factor = 1 ) => {
//         setstate( state - factor );
//     };

//     return {
//         state,
//         increment,
//         reset,
//         decrement
//     };



// }
