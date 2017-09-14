import React from 'react'; 
import ReactDataGrid from 'react-data-grid';



export default function Workouts(props) {

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


        
    )

}