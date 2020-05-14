//import React from 'react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

//let's convert this function to a class since we've more
//functionality with class than function. For that we need to
//import Component. By using class we get access to the 'state'
//object from the Component class. this.state property now exists
//on our class App and we can set it to something. 
//Another function that we get access to is setState()
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    /*
    .bind() is a method on any function that returns a new function
    where the context of 'this' is set to whatever we passed to it.
    Here we're setting the context of the 'this' keyword inside of
    handleChange() to the 'this' keyword inside of this constructor(),
    which is the Component that we're extending the App class from
    But this is a very verbose way of writing code b/c that means for
    every new class method we write, we've to bind() it. We don't have
    to do that. We can leverage ES6 arrow functions and unique 
    charactersitics about them that allows them to set the context of
    'this' in whatever it was that declared it in the first place. What
    do we mean by this? Arrow functions automatically allow you to set
    the 'this' keyword to the context where the arrow function itself
    is defined in the first place. They automatically get what is called
    lexical scoping.
    */

    //this.handleChange = this.handleChange.bind(this);
  }

  //componentDidMount is a lifecycle method that gets called when
  //React puts our component on the page (when it renders on the DOM
  //for the first time)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  /*
  handleChange(e) {
    this.setState({searchField: e.target.value});
  }
  */
 onSearchChange = event => {
    this.setState({searchField: event.target.value});
  }

  render() {
    //destructuring
    const { monsters, searchField } = this.state;
    //the above is the same as the below two
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        {/*anything we put here (in CardList here) will
            be children of CardList (our component)*/}
        {/*move this to card-list*/}
        {/* 
        <CardList name="Eli">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}> {monster.name}</h1>
          ))}
        </CardList>
        */}
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          onSearchChange={this.onSearchChange} 
          placeholder="search monsters" 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
    
}

export default App;
