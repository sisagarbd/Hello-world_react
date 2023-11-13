import React, { Component } from 'react';
import './App.css';
import Book from './components/Book.js';


class App extends Component {
  state = {
    books: [
      { bookName: "1983", writer: "George Orwell" },
      { bookName: "The Da Vinci", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Colelho" }
    ]
  }


  changeBookState = () => {
    // Wrong: this.state.books.[0].bookName = "1974"
    this.setState({
      books: [
        { bookName: "Nineteen Eighty-Four", writer: "George Orwell" },
        { bookName: "The Da Vinci", writer: "Dan Brown" },
        { bookName: "The Metmorphosis", writer: "Franz Kafka" }
      ],

    });
  }

  render() {
    console.log(this.state);
    return (
      < div className="App" >
        <h1>Book List</h1>
        <button onClick={this.changeBookState}>Change State</button>
        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} />
      </div >
    );

  }
}


export default App;
