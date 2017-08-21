import React from 'react';
import ReactDataGrid from 'react-data-grid';

export default function Cardio(props) {
    console.log(props)

    var columns = [
        {
          key: 'total_time',
          name: 'Time',
          width: 80
        },
        {
          key: 'resistance_heartrate',
          name: 'Heartrate',
          editable: true
        }
      ];
      var name = props.name;
      console.log(name)
      function rowGetter(i) {
          return name[i];
      } 
  
      function handleGridRowsUpdated({ fromRow, toRow, updated }) {
          props.handleGridRowsUpdated({ fromRow, toRow, updated }, name)
      }
  
      return (
          <div>
          <h2>{name[0].name}</h2>
           <ReactDataGrid
          enableCellSelect={true}
          columns={columns}
          minHeight={175}
          rowGetter={rowGetter}
          rowsCount={name.length} 
          onGridRowsUpdated={handleGridRowsUpdated}
          rowHeight={35}
          minWidth={500}
           />   
           </div>
      )
}