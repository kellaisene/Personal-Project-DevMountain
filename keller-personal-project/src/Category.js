import React, { Component } from 'react';
import axios from 'axios';
import WeightExercise from './WeightExercise';
import CardioExercise from './CardioExercise';
import update from 'react-addons-update';


class Category extends Component {
    constructor(props){
    super(props);
    this.state = {
      user: this.props.user_id,
      exercises: null
    };
    this.handleGridRowsUpdated = this.handleGridRowsUpdated.bind(this)
    this.postWorkout = this.postWorkout.bind(this);
  }

  componentDidMount(){
      console.log(this.props)
      if(this.state.exercises === null){

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
                        user: this.props.user_id,
                        exercises: arr
                    }
                )
            })
        }
        
    }
  handleGridRowsUpdated({ fromRow, toRow, updated }, sets) {
    let rows = sets.slice();

    for (let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
    // let flag
    // let newArr
    // for(var i =0; i<this.state.exercises.length; i++){
    //     if(this.state.exercises[i][0].id === sets[0].id){
    //         newArr = this.state.exercises.slice(0, i).concat( rows, this.state.exercises.slice(i + 1))
    //     }
    // }
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
  componentWillReceiveProps(nextProps){
    axios.get(`/api/exercises?category=${nextProps.match.params.category}`)
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

  postWorkout(){
      axios.post(`/api/postWorkout`, this.state)
      
  }

  render() {
      console.log(this.state)
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
              <button onClick={this.postWorkout}className='submit-workout'>SUBMIT WORKOUT</button>
          </div>
          
        )
        
        var cardio = exercises.map((exercise, index) => {
            return (
                <CardioExercise
                sets={exercise}
                key={index}
                handleGridRowsUpdated={this.handleGridRowsUpdated}
                />
        )
    }) 
    return(
        <div>
            {cardio}
            </div>
    ) 
  }
}

//SUBMIT WORKOUT BUTTON



export default Category;