import React, { Component } from 'react';
import axios from 'axios';
import WeightExercise from './WeightExercise';

import update from 'react-addons-update';


class Category extends Component {
    constructor(props){
    super(props);
    this.state = {
      user: props.user_id
    };
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this)
  }

  componentDidMount(){
      axios.get(`/api/exercises?category=${this.props.match.params.category}`)
      .then(results => {
          console.log(results)
          var obj = {}
          for(var i = 0; i < results.data.length; i++){
              var item = results.data[i].name;
              if(obj[item]){
                  obj[item].push(results.data[i])
              }
                else{
                    obj[item]=[]
                    obj[item].push(results.data[i])
                }  
          }
            console.log(obj)
          var arr =[];
          for(var key in obj){
                arr.push(obj[key])
            }


            this.setState(
                {
                    exercises: arr
                }
            )
      })
  }

  handleGridRowsUpdated({ fromRow, toRow, updated }, sets) {
    let rows = sets.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
    let newArr = this.state.exercises.filter((exercise, index) => {
        console.log(exercise[0].id, sets[0].id)
        return exercise[0].id != sets[0].id
    })
    console.log(newArr)
    console.log(rows)
    this.setState({
        exercises: [...newArr, rows]
    });
  }

  render() {
      console.log(this.state.exercises)
      var test = this.state.exercises
      var exercises = [];
      for(var key in test){
          exercises.push(test[key])
      }
    var workouts = exercises.map((exercise, index) => {
        return (
            <WeightExercise
                sets={exercise}
                key={index}
                handleGridRowsUpdated={this.handleGridRowsUpdated}
            />
        )
    })
      return(
          <div>
              {workouts}
          </div>
      )
  }
}



export default Category;