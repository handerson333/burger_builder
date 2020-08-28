import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'a2s1d', name: 'max', age: 28 },
      { id: 'asd2', name: 'manu', age: 29 },
      { id: '3asd', name: 'stephanie', age: 26 }
    ],
    showPersons: false
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'stephanie', age: 27 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}

      </div >
    );
  }
}

export default App;