import * as React from 'react';
import './App.css';
import Profile from './components/Profile';


class App extends React.Component {
  public render() {
    return (
      <Profile
        name={"송민석"}
        job={"코드따라쟁이"}
      />
    );
  }
}

export default App;
