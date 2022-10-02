import React, { useState, useContext } from "react";
import Navbars from "../component/Navbars";
import Button from "react-bootstrap/Button";
import {Card, Row, Col} from "react-bootstrap";
import { UserContext } from "../context/userContext";
import Homes from "../image/home.png";
import jurnal from "../assets/jurnal.png"
import {API} from '../config/api'
import {useQuery} from 'react-query'


function Mycollection() {
  const [state, dispatch] = useContext(UserContext);
  const [user, setUser] = useState(null)


  console.log("testing", state);

  

  const[collection, setCollection] = useState([])

  let { data: collections } = useQuery("collectionCache", async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.token}`
        }
    }

    const response = await API.get(`/checkauth`, config);
    console.log("response collection", response);

    const collection = await API.get(`/user/${response.data?.data?.id}`)


    const resultResponse = collection.data?.data?.literatur;
    setUser(collection.data?.data?.collections)
    setCollection(resultResponse)
    console.log("ini collection", resultResponse);

    return resultResponse;
  });

  console.log("ini colection user", user);


  return (
    <>
      <div>
        <Navbars />
      </div>
      <h3 style={{ marginLeft: "115px", color: "white" }}> My Collection</h3>
      <div style={{ marginLeft: "115px", marginRight: "115px" }}>


      <Row xs={1} md={4} className="g-4">

      
{user?.map((data, index) => {
  return (
    <Col>
    <Card style={{border: "none"}}>
    <Card.Img variant="top" src={jurnal} style={{height: "350px", borderRadius: "10px"}}/>
      {/* {data?.attache} */}
      <Card.Body style={{ backgroundColor: "black"}}>
        <Card.Title style={{ backgroundColor: "black", color: "white", marginLeft: "-17px"}}>{data?.literatur?.title}</Card.Title>
        <Card.Text style={{ color: "white"}}>
          <Row style={{marginLeft: "-28px"}}>
            {/* <Col>{data?.author}</Col>
            <Col>{data?.publicationdate}</Col> */}
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  );
})}
</Row>

   </div>
    </>
  );
}

export default Mycollection;








// import React, { useState } from "react";
// import Navbars from "../component/Navbars";
// import Button from "react-bootstrap/Button";
// import {Card, Row, Col} from "react-bootstrap";
// import Homes from "../image/home.png";
// import jurnal from "../assets/jurnal.png"
// import {API} from '../config/api'
// import {useQuery} from 'react-query'


// function Mycollection() {

//     const[literatur, setLiteratur] = useState([])

//   let { data: literaturs } = useQuery("literaturCache", async () => {

//     const config = { 
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.token}`
//         }
//     }

//     const response = await API.get("/collections", config);
//     console.log("response literatur", response);

//     const resultResponse = response.data.data;
//     setLiteratur(resultResponse)

//     return resultResponse;
//   });

//   console.log("ini ",literatur)

//   return (
//     <>
//       <div>
//         <Navbars />
//       </div>
//       <h3 style={{ marginLeft: "115px", color: "white" }}> My Collection</h3>
//       <div style={{ marginLeft: "115px", marginRight: "115px" }}>


//       <Row xs={1} md={4} className="g-4">

      
// {literatur?.map((data, index) => {
//   return (
//     <Col>
//     <Card style={{border: "none"}}>
//     <Card.Img variant="top" src={jurnal} style={{height: "350px", borderRadius: "10px"}}/>
//       {data.literatur.attache}
//       <Card.Body style={{ backgroundColor: "black"}}>
//         <Card.Title style={{ backgroundColor: "black", color: "white", marginLeft: "-17px"}}>{data.literatur.title}</Card.Title>
//         <Card.Text style={{ color: "white"}}>
//           <Row style={{marginLeft: "-28px"}}>
//             <Col>{data.literatur.author}</Col>
//             <Col>{data.literatur.publicationdate}</Col>
//           </Row>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </Col>
//   );
// })}
// </Row>

//    </div>
//     </>
//   );
// }

// export default Mycollection;
