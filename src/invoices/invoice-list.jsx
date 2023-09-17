import React from 'react'
import DataTable from 'react-data-table-component';
import { MdDeleteForever, MdRemoveRedEye } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const InvoiceList = () => {
  const navigate = useNavigate();
  

  const columns = [
    {
      name: 'Invoice',
      selector: row => row.invoiceNo,
      sortable: true,
      width: "6rem"

    }, {
      name: 'Customer',
      selector: row => row.customerName,
      sortable: true,
      grow: 1,

    }, {
      name: 'Amount',
      selector: row => row.Amount,
      width: "8rem",
      right: true,
    }, {
      name: 'Issue Date',
      selector: row => row.issueDate,
      sortable: true,
      width: "8rem"
    }, {
      name: 'Type',
      selector: row => row.type,
      sortable: true,
      width: "6rem"
    }, {
      name: "Action",
      sortable: false,

      cell: (d) => [
        <i key={d.invoiceNo} className="me-3 btn btn-sm btn-outline-info"
          onClick={() => { console.log("Edit Row with ID : ", d.id) }}>
          <MdRemoveRedEye style={{ height: "24px", width: '24px' }} />
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

  const data = [
    {
      id: 1,
      invoiceNo: 'MD52',
      customerName: 'Raju',
      Amount: '2500',
      issueDate: '27-07-2023',
      type: 'Invoice',
    }, {
      id: 2,
      invoiceNo: 'MD48',
      customerName: 'Arun',
      Amount: '4805',
      issueDate: '15-05-2023',
      type: 'Invoice',
    }, {
      id: 3,
      invoiceNo: 'MD57',
      customerName: 'Raju',
      Amount: '2500',
      issueDate: '27-07-2023',
      type: 'Invoice',
    }, {
      id: 4,
      invoiceNo: 'MD78',
      customerName: 'Arun',
      Amount: '4805',
      issueDate: '15-05-2023',
      type: 'Invoice',
    },
  ]

  return (
    <div className="p-5 ">
      <h1 className='h3 mb-4 text-secondary'>Invoices List</h1>
      <div className="d-flex justify-content-center">

        <div className="card w-100">
          <div className="card-header bg-indigo-50">
            <p className='h5'>All Invoices Information</p>

          </div>
          <div className="card-body">
            <div className="">
              <DataTable
                pagination striped highlightOnHover
                columns={columns} data={data}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceList