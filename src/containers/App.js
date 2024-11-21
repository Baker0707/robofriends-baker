import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import Scrol from "../components/Scrol";
import ErrorBoundary from "../components/ErrorBoundary";
import './style.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
       // console.log('constructor');

    }
    //http://localhost:3001/robots

    // https://jsonplaceholder.typicode.com/users

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users })
        )
        
      //  console.log('componentDidMount');
    }

    // Use an arrow function for automatic binding
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
        );
        if (!robots.length) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scrol>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scrol>
                </div>
            );
        }
       
    }
    
}

export default App;
