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

      // console.log(listOfWorkouts)

      for (let i = 0; i < listOfWorkouts.length; i++) {

        // console.log('i '+ listOfWorkouts[i])
        listOfWorkouts.find(workout => {
          // console.log('workouts ' + workout)

          if (workout === listOfWorkouts[i]) {
            // console.log('match')
            match++;
          }
        })
        
      }
      console.log(match)
      if (match != this.state.numOfWorkouts) {
        this.randomizeWorkouts(this.state.numOfWorkouts);
        // console.log(5)
        console.log('---')
      }

      // console.log('list i ' + listOfWorkouts[i])

      // if (listOfWorkouts[i] === workouts) {
      //   console.log('match ' + workouts)
      //   // randomWorkout3 = this.state.workOuts[Math.floor(Math.random() * this.state.workOuts.length)];
      // }

      // })

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
