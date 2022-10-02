import React from "react";
import Card from "react-bootstrap/Card";
import Navbars from "../component/Navbars";
import jurnal from "../assets/jurnal.png";
import Homes from "../image/home.png";
import { API } from "../config/api";
import { useMutation, useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  let { id } = useParams();

  let { data: literaturs } = useQuery("productCache", async () => {
    const response = await API.get("/literatur/" + id);
    return response.data.data;
  });
  console.log("ini", literaturs);

  // untuk add my collection
  const navigate = useNavigate();
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };
      const body = JSON.stringify({
        literatur_id: parseInt(id),
      });
      console.log("masuk sini gaaaa");
      const response = await API.post("/collection", body, config);
      console.log("response post",response)
      navigate("/mycollection");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <div>
        <Navbars />
      </div>
      <div class="container">
        <div class="row bg-faded">
          <div class="col-4">
            <Card style={{ width: "18rem", height: "30rem" }}>
              <Card.Img src={jurnal}/>
              {literaturs?.attache}
              {/* <Card.Body>
                                <Card.Title>{literaturs?.title} </Card.Title>
                                <Card.Text>
                                    BOOK
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <small className="font-weight-bold text-lg text-uppercase">Management System<small className="font-weight-bold text-lg text-uppercase" > 2012</small></small>
                            </Card.Footer> */}
            </Card>
          </div>

          {/* detail */}
          <div class="col-6" style={{ backgrounColor: "black" }}>
            <div style={{ backgrounColor: "black" }} className="text-light">
              <h2 style={{ fontSize: "45px" }}>{literaturs?.title}</h2>
              <p className="text-secondary" style={{ fontSize: "23px" }}>
                {literaturs?.author}
              </p>
              <br />
              <h2 style={{ fontSize: "45px" }}>Publication date</h2>
              <p className="text-secondary" style={{ fontSize: "23px" }}>
              {literaturs?.publicationdate}
              </p>
              <br />
              <h2 style={{ fontSize: "45px" }}>Pages</h2>
              <p className="text-secondary" style={{ fontSize: "23px" }}>
              {literaturs?.pages}
              </p>
              <br />
              <h2 className="text-danger">ISBN</h2>
              <p className="text-secondary" style={{ fontSize: "23px" }}>
              {literaturs?.isbn}
              </p>
              <button
                className="bg-danger text-light"
                style={{ height: "50px", borderRadius: "10px"}}
              >
                <a 
                  href={literaturs?.attache} 
                  download
                  style={{color: "white", textDecoration: "none" }}
                  >
                    Download</a>
              </button>
            </div>
          </div>
          <div class="col-2">
            <button
              className="bg-danger text-light"
              style={{ height: "50px", borderRadius: "10px" }}
              onClick={(e) => handleSubmit.mutate(e)}
            >
              Add My Collection
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;

// import React from 'react'
// import Card from 'react-bootstrap/Card';
// import Navbars from '../component/Navbars';
// import jurnal from '../assets/jurnal.png';
// import Homes from '../image/home.png';
// import {API} from '../config/api';
// import {useQuery} from 'react-query';
// import {useParams, useNavigate} from 'react-router-dom';

// function Detail() {

//     let {id} =useParams();

//     let {data:literaturs} = useQuery("productCache", async ()=>{
//         const response = await API.get("/literatur/" + id);
//         return response.data.data;
//     });
//     console.log ("ini", literaturs)

//     // untuk add my collection
//     const navigate = useNavigate();
//     const handleSubmit = async (e) => {
//         try {
//           e.preventDefault();

//           const config = {
//             headers: {
//               "Content-type": "application/json",
//             },
//           };
//           const body = JSON.stringify({
//             literatur_id: parseInt(id),
//           });
//           await API.post("/collection", body, config);
//           navigate("/mycollection");
//         } catch (error) {
//           console.log(error);
//         }
//       };

//     return (
//         <>
//             <div>
//                 <Navbars />
//             </div>
//             <div class="container">
//                 <div class="row bg-faded">
//                     <div class="col-4">
//                         <Card style={{ width: '18rem', height: "30rem" }}>
//                             <Card.Img src={jurnal} />
//                             {/* <Card.Body>
//                                 <Card.Title>{literaturs?.title} </Card.Title>
//                                 <Card.Text>
//                                     BOOK
//                                 </Card.Text>
//                             </Card.Body>
//                             <Card.Footer >
//                                 <small className="font-weight-bold text-lg text-uppercase">Management System<small className="font-weight-bold text-lg text-uppercase" > 2012</small></small>
//                             </Card.Footer> */}
//                         </Card>
//                     </div>

//                     {/* detail */}
//                     <div class="col-6" style={{ backgrounColor: "black" }}>
//                         <div style={{ backgrounColor: "black" }} className="text-light">
//                             <h2 style={{fontSize: "45px"}}>{literaturs?.title}</h2>
//                             <p className='text-secondary' style={{fontSize: "23px"}}>Haris Astina</p>
//                             <br/>
//                             <h2 style={{fontSize: "45px"}}>Publication date</h2>
//                             <p className='text-secondary' style={{fontSize: "23px"}}>April 2020</p>
//                             <br/>
//                             <h2 style={{fontSize: "45px"}}>Pages</h2>
//                             <p className='text-secondary' style={{fontSize: "23px"}}>436</p>
//                             <br/>
//                             <h2 className='text-danger'>ISBN</h2>
//                             <p className='text-secondary' style={{fontSize: "23px",}}>9781789807554</p>
//                             <button className='bg-danger text-light' style={{height: "50px", borderRadius: "10px"}}>
//                                 Download
//                             </button>
//                         </div>
//                     </div>
//                     <div class="col-2">
//                         <button className='bg-danger text-light' style={{height: "50px", borderRadius: "10px"}} onClick={handleSubmit}>
//                             Add My Collection
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Detail
