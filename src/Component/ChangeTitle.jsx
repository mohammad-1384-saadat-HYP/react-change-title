import React, {useEffect, useState} from 'react';

const ChangeTitle = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times!`;
    });

    return (
        <>
            <p>you clicked {count} times!</p>
            <input type="number" value={step} onChange={(e) => setStep(parseInt(e.target.value))}/>
            <button onClick={() => setCount(count + step)}>click me</button>
        </>
    );
};

export default ChangeTitle