import * as React from 'react';
import './App.css';
import Counter from "./components/Counter";
import Profile from './components/Profile';


class App extends React.Component {
  public render() {
    return (
        <div>
        <Profile
          name={"송민석"}
          job={"코드따라쟁이"}
        />
       <Counter/>
        </div>
    );
  }
}

export default App;
