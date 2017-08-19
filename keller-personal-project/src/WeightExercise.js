import React from 'react'; 
import ReactDataGrid from 'react-data-grid';
// import {Toolbar} from 'react-data-grid-addons';
// import 'bootstrap/dist/css/bootstrap.css';


export default function Workouts(props) {
    console.log(props)

//     const Example = React.createClass({
//   getInitialState() {
//     this._columns = [
//       {
//         key: 'id',
//         name: 'ID',
//         width: 80
//       },
//       {
//         key: 'task',
//         name: 'Title',
//         editable: true
//       },
//       {
//         key: 'priority',
//         name: 'Priority',
//         editable: true
//       },
//       {
//         key: 'issueType',
//         name: 'Issue Type',
//         editable: true
//       },
//       {
//         key: 'complete',
//         name: '% Complete',
//         editable: true
//       },
//       {
//         key: 'startDate',
//         name: 'Start Date',
//         editable: true
//       },
//       {
//         key: 'completeDate',
//         name: 'Expected Complete',
//         editable: true
//       }
//     ];

//     return { rows: this.createRows(1000) };
//   },

//   getRandomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
//   },

//   createRows(numberOfRows) {
//     let rows = [];
//     for (let i = 1; i < numberOfRows; i++) {
//       rows.push({
//         id: i,
//         task: 'Task ' + i,
//         complete: Math.min(100, Math.round(Math.random() * 110)),
//         priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
//         issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
//         startDate: this.getRandomDate(new Date(2015, 3, 1), new Date()),
//         completeDate: this.getRandomDate(new Date(), new Date(2016, 0, 1))
//       });
//     }
//     return rows;
//   },

//   rowGetter(i) {
//     return this.state.rows[i];
//   },

//   handleGridRowsUpdated({ fromRow, toRow, updated }) {
//     let rows = this.state.rows;

//     for (let i = fromRow; i <= toRow; i++) {
//       let rowToUpdate = rows[i];
//       let updatedRow = React.addons.update(rowToUpdate, {$merge: updated});
//       rows[i] = updatedRow;
//     }

//     this.setState({ rows });
//   },

//   render() {
//     return  (
//       <ReactDataGrid
//         enableCellSelect={true}
//         columns={this._columns}
//         rowGetter={this.rowGetter}
//         rowsCount={this.state.rows.length}
//         minHeight={500}
//         onGridRowsUpdated={this.handleGridRowsUpdated} />);
//   }
// });

// ReactDOM.render(
//   <Example />,
//   document.getElementById('container')
// );

    var columns = [
      {
        key: 'set',
        name: 'Set',
        width: 80
      },
      {
        key: 'weight',
        name: 'Weight (lbs)',
        editable: true
      },
      {
        key: 'reps',
        name: 'Reps',
        editable: true
      },
      {
        key: 'resttime',
        name: 'Rest (sec)',
        editable: true
      }
    ];
    var sets = props.sets;
    console.log(sets)
    function rowGetter(i) {
        return sets[i];
    } 

    function handleGridRowsUpdated({ fromRow, toRow, updated }) {
        props.handleGridRowsUpdated({ fromRow, toRow, updated }, sets)
    }

    return (
        <div>
        <h2>{sets[0].name}</h2>
         <ReactDataGrid
        enableCellSelect={true}
        columns={columns}
        minHeight={175}
        rowGetter={rowGetter}
        rowsCount={sets.length} 
        onGridRowsUpdated={handleGridRowsUpdated}
        rowHeight={35}
        minWidth={500}
         />   
         </div>

        // <table>
        //     <tr>
        // <div className="exercise-lists">
        //     <th>Name</th>
        //     <th>Weight (lbs)</th>
        //     <th>Reps</th>
        //     <th>Rest (sec)</th>
        //     <th>Set</th>
        //     <td>{props.sets[0].name}</td>
        //     <td>{props.sets[0].weight}</td>
        //     <td>{props.sets[0].reps}</td>
        //     <td>{props.sets[0].resttime}</td>
        //     <td>{props.sets[0].set}</td>
        // </div>
        // </tr>
        // </table>
    )

}