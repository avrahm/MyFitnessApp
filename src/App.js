import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    workOuts: ['pushups', 'abs', 'squats', 'jumprope intervals', 'jumping lunges', 'burpees', 'lunges', 'body rows', 'sprint intervals', 'pullups', 'plyometric pushups'],
    workoutResults: '',
  }

  randomizeWorkouts = (numOfWorkouts) => {

    let randomWorkout = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];

  }

  chooseWorkout = () => {

    let workoutArr = [];

    let randomWorkout1 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
    let randomWorkout2 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
    let randomWorkout3 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];

    if (randomWorkout2 === randomWorkout1) {
      randomWorkout2 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
    }
    if (randomWorkout3 === randomWorkout2 || randomWorkout3 === randomWorkout1) {
      randomWorkout3 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
    }
    workoutArr.push(randomWorkout1, randomWorkout2, randomWorkout3);

    this.state.workOuts.splice(this.state.workOuts.indexOf(randomWorkout1), 1)
    this.state.workOuts.splice(this.state.workOuts.indexOf(randomWorkout2), 1)
    this.state.workOuts.splice(this.state.workOuts.indexOf(randomWorkout3), 1)

    console.log(this.state.workOuts)
    console.log('workoutArr ' + workoutArr)


    let threeWorkouts = workoutArr.map((eachWorkout, index) => {
      return (
        <ul key={index}>
          <li >{eachWorkout}</li>
        </ul>
      );
    })

    this.setState({

      workoutResults: threeWorkouts,
      workOuts: ['pushups', 'abs', 'squats', 'jumprope intervals', 'jumping lunges', 'burpees', 'lunges', 'body rows', 'sprint intervals', 'pullups', 'plyometric pushups'],

    })

  }

  render() {
    return (
      <div>
        <header>

          <button onClick={this.chooseWorkout}>Random Workout</button>

          <div style={{ padding: '10px', backgroundColor: 'blue', width: '350px', height: '350px', textAlign: 'center' }}>
            {this.state.workoutResults}
          </div>

        </header>
      </div>
    );
  }
}

export default App;
