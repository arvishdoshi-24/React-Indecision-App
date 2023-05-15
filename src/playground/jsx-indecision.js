console.log('App.js is running!!!')

// JSX - JavaScript XML


const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    // `e` refers to event
    console.log('Event - ', e)
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reactRender();
    }

};

const removeData = () => {
    app.options = [];
    reactRender();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById("app")



const reactRender = () => {
    // Array of JSX inside our JSX (line no 48 to 53)
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should i do ?</button>
            <button onClick={removeData}>Remove All</button>
            
            <ol>
                {
                    app.options.map((option) => {
                       return <li key = {option}>{option}</li>
                    })
                }
            </ol>

            <form onSubmit={onFormSubmit} >
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
        );
        ReactDOM.render(template, appRoot);
}

reactRender()