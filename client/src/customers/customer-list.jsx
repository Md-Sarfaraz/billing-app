import React, { useState, useMemo, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import TableFilter from '../components/table-filter';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';

const CustomerList = () => {
  const navigate = useNavigate()
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [customer, error, pending] = useAxios({
    url: '/customer/list',
    method: 'get',
  })


  useEffect(() => {

    console.log(customer, error, pending);

  }, [pending]);


  const columns = [
    {
      name: 'Name',
      selector: row => row.fullName,
      sortable: true,
      //grow: 3,

    }, {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
      hide: 'sm',

    }, {
      name: 'Address',
      selector: row => row.address1,
      hide: 'md',
    }, {
      name: 'City',
      selector: row => row.city,
      sortable: true,
      hide: 'sm',

    }, {
      name: 'Pincode',
      selector: row => row.pincode,
      sortable: true,
      hide: 'md',
    }, {
      name: 'Phone',
      selector: row => row.phone,
      sortable: true,
    }, {
      name: "Action",
      sortable: false,
      cell: (d) => [
        <div key={d.id}>
          <i className="me-2 btn btn-sm btn-outline-info"
            onClick={() => onRowEditClick(d)}>
            <MdEdit style={{ height: "24px", width: '24px' }} />
          </i>
          <i className=" btn btn-sm btn-outline-danger"
            onClick={() => { console.log("Delete Row with ID : ", d.id) }}>
            <MdDeleteForever style={{ height: "24px", width: '24px' }} />
          </i>
        </div>
      ],
      button: true,
      //minWidth: "7rem"
    }
  ];
  const handleCustomer = (data) => {


  }

  const onRowEditClick = (data) => {
    console.log("Edit Row with ID : ", data)
    navigate("/customer/edit", { state: { customer: data } })
  }

  const filteredItems = customer && customer.data.filter(
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

  const handleSort = (column, sortDirection) => console.log(column.selector, sortDirection);


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
                onSort={handleSort}
                responsive progressPending={pending}
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