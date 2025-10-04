import React, {useEffect, useState} from 'react';

const ChangeTitle = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times!`;
        console.log("count = " + count);
        console.log("step = " + step);
        const interval = setInterval(() => {
            console.log("interval");
        }, 5000);

        return () => {
            clearInterval(interval);
            console.log("interval is clear now")
        }
    });

    const updateCount = () => setCount(count + step);
    const updateStep = e => setStep(parseInt(e.target.value));

    return (
        <>
            <p>you clicked {count} times!</p>
            <input type="number" value={step} onChange={updateStep}/>
            <button onClick={updateCount}>click me</button>

        </>
    );
};

export default ChangeTitle