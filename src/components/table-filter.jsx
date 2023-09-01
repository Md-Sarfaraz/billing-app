
import React from 'react'

const TableFilter = ({ filterText, onFilter, onClear, placeHolder }) => {


    return (<div className='input-group w-25'>
        <input id="search" type="text" placeholder={placeHolder}
            className='form-control'
            value={filterText} onChange={onFilter} />
        <span className='input-group-text hover fw-bold cursor-pointer' onClick={onClear}>X</span>


    </div>)
}

export default TableFilter