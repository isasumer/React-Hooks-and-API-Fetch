import React, {useState} from 'react';

const FunctionalComponent = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="function">
            <h2>Functional Component</h2>
            <p>Counter: {counter}</p>
            <button onClick= {()=>{increase()}}>increase</button>
        </div>
    )
}

export default FunctionalComponent;