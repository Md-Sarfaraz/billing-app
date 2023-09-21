import React, { useState } from 'react'
import { PiMinusSquareFill } from 'react-icons/pi'
import { Button, Modal } from 'react-bootstrap';
import { BsPlusSquareFill } from 'react-icons/bs';
import AsyncSelect from 'react-select/async';
import { productTemp } from '../utility/template';
import { productsData } from '../test-data/table-data';

const OrderDetailes = ({ handleSelectExisting, products, handleItem, addRow, deleteRow }) => {

  // console.log("OrderList Comp :: ", productList)
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);
  const [selectProduct, setSelectProduct] = useState(productTemp);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = productsData.reduce((res, item) => {
    res.push({ value: item.id, label: item.name })
    return res
  }, [])


  const filterProduct = (inputValue) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterProduct(inputValue))
    }, 500)
  }
  const getOptions = (e) => {
    var val = productsData.find(item => item.id === e.value)
    console.log(val)
    setSelectProduct({ ...val })
  }


  const handleSelectProduct = () => {
    setShow(false);
    handleSelectExisting(selectProduct, index)

  }


  return (<>
    <Modal backdrop="static" dialogClassName="modal-90w" centered
      aria-labelledby="example-custom-modal-styling-title" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AsyncSelect cacheOptions loadOptions={loadOptions} defaultValue={""} isSearchable={false}
          onChange={(e) => getOptions(e)} //onMenuClose={(e) => console.log(e)}
          defaultOptions />
        <div className="row mt-3">
          <div className=" col-12 mb-3">
            <input type="text" className="form-control" placeholder="Product Name"
              aria-label="Name" name="name" value={selectProduct.name} disabled />
            <input type="text" className="d-none" disabled
              value={selectProduct.id} />
          </div>
          <div className="col-12 mb-3">
            <div className="input-group">
              <input type="text" name="price" className="form-control" disabled
                placeholder="Price" value={selectProduct.price} />
            </div>
          </div>
          <div className="col--12 mb-3">
            <input type="text" className="form-control" name="type" disabled
              placeholder="Type" aria-label="city"
              value={selectProduct.type} />
          </div>
          <div className="col-12 mb-3">
            <textarea type="text" className="form-control" name="description"
              placeholder="Description" aria-label="Description"
              value={selectProduct.description} disabled />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSelectProduct}>Select</Button>
      </Modal.Footer>
    </Modal>

    <div className='table-responsive overflow-hidden rounded-3  shadow'>
      <table className="table table-hover table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>

            <th scope="col">Sub Total</th>
            <th scope="col align-middle ">
              <button type="button" className=" hover" onClick={() => { addRow() }}>
                <BsPlusSquareFill className='text-primary hover' style={{ height: "1.5rem", width: "1.5rem" }} />
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((val, idx) => {
              return (<tr className=" " key={idx}>
                <td className="input-group">
                  <input type="text" className="form-control" name='name' data-id={idx}
                    value={val.product} onChange={handleItem}
                    placeholder="Product Name" aria-label="Full Name" />
                  <button className="btn btn-outline-secondary"
                    type="button" onClick={() => { setIndex(idx); handleShow() }}>Choose</button>
                </td>
                <td className="col-md-2  ">
                  <input type="text" className="d-none" name='id'
                    value={val.id} onChange={handleItem} />
                  <input type="number" className="form-control" name='quantity' data-id={idx}
                    value={val.quantity} onChange={handleItem}
                    placeholder="Quantity" aria-label="Quantity" />
                </td>
                <td className="col-md-2  ">
                  <input type="number" className="form-control" name='price' data-id={idx}
                    value={val.price} onChange={handleItem}
                    placeholder="Price" aria-label="Price" />
                </td>

                <td className="col-md-2 ">
                  <input type="number" disabled className="form-control" name='subTotal' data-id={idx}
                    value={val.subTotal} onChange={handleItem}
                    placeholder="SubTotal" aria-label="Subtotal" />
                </td>
                <td className='align-middle'>
                  <button type="button" className=" " onClick={() => deleteRow(idx)}>
                    <PiMinusSquareFill className='text-danger fs-5  '
                      style={{ height: "26px", width: "26px" }} />
                  </button>
                </td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  </>)
}

export default OrderDetailes