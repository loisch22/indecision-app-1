class IndecisionApp extends React.Component {
    render() {
        // const title = 'Indecision';

        return (
          <div>
              <Header title="Test value"/>
              <Action />
              <Options />
              <AddOption />
          </div>
        );
    }
}

class Header extends React.Component {
    render() {
      return (
          <div>
              <h1>{this.props.title}</h1>
              <h2>Put your life in the hands of a computer</h2>
          </div>
      );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
          <div>
              Option component here
          </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
          <div>
              <form>
                <p>AddOption component here</p>
              </form>
          </div>
        );
    }
}



//renders IndecisionApp component into browser
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))