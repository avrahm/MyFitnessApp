import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {

state = {
  workOuts: [ 'pushups', 'abs', 'squats', 'jumprope intervals', 'jumping lunges', 'burpees', 'lunges', 'body rows', 'sprint intervals', 'pullups', 'plyometric pushups'  ],
  workoutResults: '',
}

chooseWorkout = () => {

  let randomWorkout = this.state.workOuts[Math.floor(Math.random()*this.state.workOuts.length)]

  this.setState({
    workoutResults: randomWorkout
  })
  
}
  
  render(){
  return (
      <div>
      <header>

      <button onClick={this.chooseWorkout}>Random Workout</button>

      <p style={{padding: '10px', backgroundColor: 'blue', width: '200px', height: '200px', textAlign: 'center'}}>
      {this.state.workoutResults}
      </p>
        
      </header>
    </div>
    );
  }
}

export default App;
