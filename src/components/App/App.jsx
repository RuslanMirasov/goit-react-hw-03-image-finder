import { Component } from 'react';
import css from './App.module.css';

export class App extends Component{

  state = {
    contacts: [],
    filter:'',
  };

  render() {
    return (
      <main className={css.main}>
        <h1>goit-react-hw-03-image-finder</h1>

      </main>
    );
  };
};

export default App;