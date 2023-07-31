import React, { useState } from 'react'
import { PiMinusSquareFill } from 'react-icons/pi'
import { Button, Modal } from 'react-bootstrap';
import { BsPlusSquareFill } from 'react-icons/bs';

const OrderDetailes = ({ productList, handleItem, addRow, deleteRow }) => {

  // console.log("OrderList Comp :: ", productList)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (<>
    <Modal backdrop="static" dialogClassName="modal-90w" centered
      aria-labelledby="example-custom-modal-styling-title" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!
        <p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
          commodi aspernatur enim, consectetur. Cumque deleniti temporibus
          ipsam atque a dolores quisquam quisquam adipisci possimus
          laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
          accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
          reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
          deleniti rem!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleClose}>Save Changes</Button>
      </Modal.Footer>
    </Modal>

    <div className='table-responsive overflow-hidden rounded-3  shadow'>
      <table className="table table-hover table-bordered mb-0">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
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
            productList.products.map((val, idx) => {
              return (<tr className="" key={idx}>
                <td className="input-group">
                  <input type="text" className="form-control" name='product' data-id={idx}
                    value={val.product} onChange={handleItem}
                    placeholder="Item Name" aria-label="Full Name" />
                  <button className="btn btn-outline-secondary"
                    type="button" onClick={handleShow}>Choose</button>
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

                <td className="col-md-2  ">
                  <input type="number" className="form-control" name='discount' data-id={idx}
                    value={val.discount} onChange={handleItem}
                    placeholder="Discount" aria-label="Discount" />
                </td>
                <td className="col-md-2 ">
                  <input type="number" className="form-control" name='subtotal' data-id={idx}
                    value={val.subtotal} onChange={handleItem}
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