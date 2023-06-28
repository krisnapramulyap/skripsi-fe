import React, { useState, useEffect } from "react";
import {
  ModalDelete,
  HeaderComponent,
  FooterComponent,
} from "../../../../components/modules";
import { getDataCookie } from "../../../../middleware/authorizationPage";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../../utils/axios";
import { formatRp } from "../../../../utils/formatRp";

export async function getServerSideProps(context) {
  const dataCookie = await getDataCookie(context);

  if (!dataCookie.isLogin) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

function History() {
  const user = useSelector((state) => state.dataUserById);

  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const [idHistory, setIdHistory] = useState("");

  const handleModal = (id) => {
    setIdHistory(id);
    setShow(true);
  };

  const handleDelete = () => {
    setShow(false);
    axios
      .delete(`/order/${idHistory}`)
      .then((res) => {
        axios
          .get(`/order/${user.user.id}`)
          .then((res) => {
            setData(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOrderByIdUser = () => {
    axios
      .get(`/order/${user.user.id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOrderByIdUser();
  }, []);

  return (
    <>
      <HeaderComponent />
      <div className="history__wrap">
        <div className="container">
          <div>
            {data.length > 0 ? (
              <>
                <h1 className="text-white text-center rubik-700">
                  Let’s see what you have bought!
                </h1>
                <p
                  className="text-white text-center rubik-400"
                  style={{ marginBottom: "82px" }}
                >
                  Long press to delete item
                </p>

                <div
                  className="row"
                  style={{ overflowY: "auto", height: "600px", width: "100%" }}
                >
                  {data?.map((item) => (
                    <div
                      className="col-12 col-md-4"
                      key={item.id}
                      style={{ overflowY: "auto" }}
                    >
                      <div className="d-flex history__card">
                        <img
                          src="/assets/images/logo buku.jpg"
                          alt="icon"
                          width="100px"
                        />

                        <div>
                          <h5>{item.invoice}</h5>
                          <p className="m-0">{formatRp(item.total)}</p>
                          <p className="m-0">{item.paymentStatus}</p>
                        </div>

                        <div
                          className="history__card--trash"
                          onClick={() => handleModal(item.id)}
                          style={{ cursor: "pointer" }}
                        >
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 16 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 4.2H2.55556M2.55556 4.2H15M2.55556 4.2V15.4C2.55556 15.8243 2.71944 16.2313 3.01117 16.5314C3.30289 16.8314 3.69855 17 4.11111 17H11.8889C12.3014 17 12.6971 16.8314 12.9888 16.5314C13.2806 16.2313 13.4444 15.8243 13.4444 15.4V4.2H2.55556ZM4.88889 4.2V2.6C4.88889 2.17565 5.05278 1.76869 5.3445 1.46863C5.63622 1.16857 6.03189 1 6.44444 1H9.55556C9.96811 1 10.3638 1.16857 10.6555 1.46863C10.9472 1.76869 11.1111 2.17565 11.1111 2.6V4.2M6.44444 8.2V13M9.55556 8.2V13"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h1 className="text-white text-center rubik-700">
                  History order not found!
                </h1>
                <p
                  className="text-white text-center rubik-400"
                  style={{ marginBottom: "82px" }}
                >
                  Order first to see history. Thanks!
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <FooterComponent />

      <ModalDelete
        show={show}
        msg="Are you sure want to delete the selected items?"
        handleClose={() => setShow(false)}
        handleSubmit={handleDelete}
      />
    </>
  );
}

export default History;
