import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    constructor(props) {
         super(props);
        //this is the only time we do direct assignment to this.state
         this.state = { latitude: null, errorMessage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
             //to update state object setState is called
            position => this.setState({ latitude: position.coords.latitude }), 
            err => this.setState({ errorMessage: err.message })
        );
    }

    //helper function
    renderContent() {
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude} />
        }

        return <div><Spinner message="Please accept location request" /></div>
    }
    //render must be defined
    render() { 
        return (
            <div className="border red">
                {this.renderContent() }
            </div>
        );
    };
};

ReactDOM.render(<App/>, document.querySelector('#root'));