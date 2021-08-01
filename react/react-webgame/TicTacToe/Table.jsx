import React from 'react';
import Tr from './Tr';

const Table = ({tableData,dispatch,onClick}) => {
    return (
        <table >
            {Array(tableData.length).fill().map((tr,i)=>(<Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]}/>))} 
            {/* ()는 앞에 return 생략 */}
        </table>
    );
};

export default Table;