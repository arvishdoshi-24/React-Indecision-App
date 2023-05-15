class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }

}


// Creating Header component.
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )     
    }
}


class Action extends React.Component {
    handlePick(){
        alert('HANDLE PICK')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove() {
        console.log(this.props.options)
        // alert('HANDLE REMOVE')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleRemove}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
            {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption (e) {
        e.preventDefault()
        // trim() removes extra white spaces after and before the string.
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option)
        }
        }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))