import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    allWorkouts: ['pushups', 'abs', 'squats', 'jumprope intervals', 'jumping lunges', 'burpees', 'lunges', 'body rows', 'sprint intervals', 'pullups', 'plyometric pushups'],
    workoutResults: '',
    numOfWorkouts: 5
  }

  randomizeWorkouts = () => {
    let listOfWorkouts = [];

    for (let i = 0; i < this.state.numOfWorkouts; i++) {
      listOfWorkouts[i] = this.state.allWorkouts[Math.floor(Math.random() * this.state.allWorkouts.length)];
    }

    this.setState({
      workoutResults: listOfWorkouts,
    },
      //https://stackoverflow.com/questions/45622879/react-slow-setstate-at-console-log 
      () => {
        this.checkForRepeatWorkout(listOfWorkouts)
      })
  }

  // //check list of workouts doesnt have repeats
  checkForRepeatWorkout = (listOfWorkouts) => {
    let match = 0;
    if (listOfWorkouts) {
      for (let i = 0; i < listOfWorkouts.length; i++) {
        listOfWorkouts.find(workout => {
          if (workout === listOfWorkouts[i]) {
            match++;
          }
        })
      }
      if (match !== this.state.numOfWorkouts) {
       return this.randomizeWorkouts(this.state.numOfWorkouts);
      }
    }
  }


  //display
  displayWorkouts = () => {
    if (this.state.workoutResults) {
      return this.state.workoutResults.map((eachWorkout, index) => {
        return (
          <ul key={index}>
            <li >{eachWorkout}</li>
          </ul>
        );
      })
    }
  }


  render() {
    return (
      <div>
        <header>

          <button onClick={this.randomizeWorkouts}>Random Workout</button>

          <div style={{ padding: '10px', backgroundColor: 'blue', width: '350px', height: '350px', textAlign: 'center' }}>
            {this.displayWorkouts()}
          </div>

        </header>
      </div>
    );
  }
}

export default App;