import React, { useState, useMemo } from 'react'
import { customerData } from '../test-data/table-data'
import DataTable from 'react-data-table-component';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import TableFilter from '../components/table-filter';
import CustomerDetails from './customer-details';

const CustomerList = () => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const columns = [
    {
      name: 'Name',
      selector: row => row.fullName,
      sortable: true,

    }, {
      name: 'Email',
      selector: row => row.email,
      sortable: true,

    }, {
      name: 'Address',
      selector: row => row.address1,
    }, {
      name: 'City',
      selector: row => row.city,
      sortable: true,

    }, {
      name: 'Pincode',
      selector: row => row.pincode,
      sortable: true,
      width: "6rem"
    }, {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
      width: "8rem"
    }, {
      name: "Action",
      sortable: false,
      cell: (d) => [
        <i key={d.name} className="me-2 btn btn-sm btn-outline-info"
          onClick={onRowEditClick(d)}>
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
  const handleCustomer = (data) => {


  }

  const onRowEditClick = (data) => {
    console.log("Edit Row with ID : ", data.id)
    return <CustomerDetails selectExisting={false} edit={true}
      customer={data} handleCustomer={handleCustomer}
    />
  }

  const filteredItems = customerData.filter(
    item =>
      JSON.stringify(item)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <TableFilter placeHolder={"Search Customer"}
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div className="p-5 ">
      <h1 className='h3 mb-4 text-secondary'>Customers List</h1>
      <div className="d-flex justify-content-center">
        <div className="card w-100">
          <div className="card-header bg-indigo-50">
            <p className='h5'>All Customers Information</p>
          </div>
          <div className="card-body">
            <div className="">
              <DataTable
                pagination striped highlightOnHover
                columns={columns} data={filteredItems}
                subHeader
                subHeaderComponent={subHeaderComponent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerList