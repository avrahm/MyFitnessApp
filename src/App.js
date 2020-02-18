import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    allWorkouts: ['pushups', 'abs', 'squats', 'jumprope intervals', 'jumping lunges', 'burpees', 'lunges', 'body rows', 'sprint intervals', 'pullups', 'plyometric pushups'],
    workoutResults: '',
  }

  randomizeWorkouts = ({ numOfWorkouts = 3 }) => {
    let listOfWorkouts = [];

    for (let i = 0; i < numOfWorkouts; i++) {
      listOfWorkouts[i] = this.state.allWorkouts[Math.floor(Math.random() * this.state.allWorkouts.length)];
    }

    this.setState({
      workoutResults: listOfWorkouts,
    })

  }

  //check list of workouts doesnt have repeats
  checkListForRepeatWorkout = (list, nextWorkout) => {
    let value;
    nextWorkout.forEach((workout) => {
   
      value = value + list.includes(workout)
   
    })

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




  // chooseWorkout = () => {

  //   let workoutArr = [];

  //   let randomWorkout1 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
  //   let randomWorkout2 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
  //   let randomWorkout3 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];

  //   if (randomWorkout2 === randomWorkout1) {
  //     randomWorkout2 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
  //   }
  //   if (randomWorkout3 === randomWorkout2 || randomWorkout3 === randomWorkout1) {
  //     randomWorkout3 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
  //   }
  //   workoutArr.push(randomWorkout1, randomWorkout2, randomWorkout3);

  //   this.state.workOuts.splice(this.state.workOuts.indexOf(randomWorkout1), 1)
  //   this.state.workOuts.splice(this.state.workOuts.indexOf(randomWorkout2), 1)
  //   this.state.workOuts.splice(this.state.workOuts.indexOf(randomWorkout3), 1)

  //   console.log(this.state.workOuts)
  //   console.log('workoutArr ' + workoutArr)


  //   let threeWorkouts = workoutArr.map((eachWorkout, index) => {
  //     return (
  //       <ul key={index}>
  //         <li >{eachWorkout}</li>
  //       </ul>
  //     );
  //   })

  //   this.setState({

  //     workoutResults: threeWorkouts,
  //     workOuts: ['pushups', 'abs', 'squats', 'jumprope intervals', 'jumping lunges', 'burpees', 'lunges', 'body rows', 'sprint intervals', 'pullups', 'plyometric pushups'],

  //   })

  // }

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
