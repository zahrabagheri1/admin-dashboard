import React from 'react';
import "../assets/Table.scss"

function Table({theadData, tbodyData}) {
  return (
    <table>
        <thead>
            <tr>
                {theadData.map((head, index) => (
                    <th key={index}>{head}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {
                tbodyData.map((rowdata , index) => (
                    <tr className='row' key={index}>
                        {theadData.map((key , index) => (
                            <td className='col' key={index}>{rowdata[key]}</td>
                        ))}
                    </tr>
                ))
            }
        </tbody>
    </table>
  );
}

export default Table;
