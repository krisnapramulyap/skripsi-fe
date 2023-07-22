import Table from 'react-bootstrap/Table';
import { useRef, useEffect, useState } from "react";
import { HeaderComponent, FooterComponent } from "../../../components/modules";
import { useParams, } from "react-router-dom";
import { Button, } from "react-bootstrap";
import axios from "axios";
import "./order.css"


export default function BerandaAdmin() {

  const params = useParams();
  const [order, setOrder] = useState();
  const [book, setBook] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  console.log(order);

  const orderData = async () => {
    const response = await axios.get(`http://localhost:3001/order`, {

    });

    console.log(response);

    const data = await response.data;
    setOrder(data);
    console.log(data)
  };
  

  useEffect(() => {
    orderData();
  }, []);

  // const onUpdate = async (e, id, isDone) => {
  //   e.preventDefault();

  //   try {
  //     const token = localStorage.getItem("token");
  //     const queueToUpdatePayload = {
  //       isDone: isDone,
  //     };

  //     const updateRequest = await axios.put(
  //       `https://mediq-backend.herokuapp.com/api/admins/update-booking/${id}`,
  //       queueToUpdatePayload,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(params.id)

  //     const updateResponse = await updateRequest.data;
  //     console.log(updateResponse)

  //     console.log(updateResponse.status)
  //     if (updateResponse.status);



  //   } catch (err) {
  //     const response = err.response.data;
  //     setErrorResponse({
  //       isError: true,
  //       message: response.message,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   onUpdate();
  //   bookData();
  // }, [book.id]);


  return (
    <>
     <HeaderComponent />
    <div>
      {/* <AdminNavbar /> */}
      <div className="Container">

        <div className="Textdaftar">
          <h4>Daftar Order</h4>

        </div>
        <Table className="Tabel" striped bordered hover size="sm">
          <thead>
            <tr className='tabelcolour'>
              <th className='antri'>No.Inovice</th>
              <th className='pasien'>Nama Pelanggan</th>
              <th className='tgl'>Nama Order</th>
              <th className='ket'>Jumlah</th>
              <th className='ket'>Keterangan</th>

              <th className='selesai'>Status Order</th>
            </tr>
            </thead>
          {order ? (
            <tbody>
              {order.data.map((book) => {
                return (
                    <tr>
                      <td style={{ textAlign: 'center' }}>{book.invoice}</td>
                      <td style={{ textAlign: 'center' }}>{book.displayName}</td>
                      <td style={{ textAlign: 'center' }}>{book.name}</td>
                      <td style={{ textAlign: 'center' }}>{book.qty}</td>
                      <td style={{ textAlign: 'center' }}>{book.paymentStatus}</td>
                      <td><Button onClick={(e) => (e, book.id, true)} variant="link">Edit</Button></td>
                    </tr>
                )
              })}
            </tbody>
          ) : ("")}
        </Table>
      </div>
      <hr style={{ marginTop: '2200px' }} />
      {/* <FooterHome /> */}
      <FooterComponent />
    </div>
    </>
  );
}