let count = 0;
const addOne = () => {
    count++;
    // Re-render it after an update and data gets updated in real-time.
    reactRender();
}

const minusOne = () => {
    count--;
    reactRender();
}

const reset = () => {
    count = 0
    reactRender();
}

const appRoot = document.getElementById("app")

const reactRender = () => {
    // Generate new JSX expression.
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    
    );
    // Render it to the screen.
    ReactDOM.render(template2,appRoot);
}

reactRender();