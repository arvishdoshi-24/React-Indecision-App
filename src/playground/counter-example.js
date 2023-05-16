class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count: 0
      };
    }
    handleAddOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        };
      });
    }
    handleMinusOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1
        };
      });
    }
    handleReset() {
      this.setState(() => {
        return {
          count: 0
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Counter />, document.getElementById('app'));



// IN BELOW CODE, WE HAVE A VARIABLE THAT MANANGES OUR APPLICATION STATE (OLD VERSION) 
// WE SHALL UPDATE IT WITH COMPONENT STATE INSTEAD

// let count = 0;
// const addOne = () => {
//     count++;
//     // Re-render it after an update and data gets updated in real-time.
//     reactRender();
// }

// const minusOne = () => {
//     count--;
//     reactRender();
// }

// const reset = () => {
//     count = 0
//     reactRender();
// }

// const appRoot = document.getElementById("app")

// const reactRender = () => {
//     // Generate new JSX expression.
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
    
//     );
//     // Render it to the screen.
//     ReactDOM.render(template2,appRoot);
// }

// reactRender();