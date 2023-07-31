import React from 'react'
import DataTable from 'react-data-table-component'
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { productsData } from '../test-data/table-data';

const Products = () => {



  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
   
    }, {
      name: 'Description',
      selector: row => row.description,
      sortable: true,
      grow: 1,
    }, {
      name: 'Price',
      selector: row => row.price,
      width: "8rem",
      right: true,
    }, {
      name: 'Type',
      selector: row => row.type,
      sortable: true,
      width: "6rem"
    }, {
      name: "Action",
      sortable: false,
      cell: (d) => [
        <i key={d.name} className="me-3 btn btn-sm btn-outline-info"
          onClick={() => { console.log("Edit Row with ID : ", d.id) }}>
          <MdEdit style={{ height: "24px", width: '24px' }} />
        </i>,
        <i key={d.id} className=" btn btn-sm btn-outline-danger"
          onClick={() => { console.log("Delete Row with ID : ", d.id) }}>
          <MdDeleteForever style={{ height: "24px", width: '24px' }} />
        </i>
      ],
      button: true,
      minWidth: "7rem"
    }
  ];  


  return (
    <div className="p-5 ">
      <h1 className='h3 mb-4 text-secondary'>Products List</h1>
      <div className="d-flex justify-content-center">

        <div className="card w-100">
          <div className="card-header bg-indigo-50">
            <p className='h5'>All Products Information</p>

          </div>
          <div className="card-body">
            <div className="">
              <DataTable
                pagination striped highlightOnHover
                columns={columns} data={productsData}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Products