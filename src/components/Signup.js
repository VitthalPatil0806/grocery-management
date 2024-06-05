import { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { json } from "react-router-dom";
function Signup(){
    const [show, setShow] = useState(true);

    let name = useRef();
    let mail = useRef();
    let dates = useRef();
    let pass = useRef();
    const handleClose = () => {setShow(false)};

    var arr = [];
    function funSignUp(){
        let obj = 
        {firstName:name.current.value,
         email:mail.current.value,
         dat:dates.current.value,
         password:pass.current.value,
         }
         arr.push(obj)
         let obj1 = JSON.stringify(arr);
         localStorage.setItem("data",obj1);

         name.current.value = '';
         mail.current.value = '';
         dates.current.value = '';
         pass.current.value = '';
    }
    return(
        <>

<Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>SignUp Here   </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form method="get">
            <label>Name: </label>
            <input type="text" ref={name} placeholder="enter your name"></input><br></br>

            <label>email: </label>
            <input type="email" ref={mail}  placeholder="enter your mail"></input><br></br>

            <label>Date Of Birth: </label>
            <input type="date" ref={dates}  placeholder="enter your dob"></input><br></br>

            <label>password: </label>
            <input type="password" ref={pass} placeholder="enter your password"></input><br></br>
        </form>
        </Modal.Body>
        <Modal.Footer>
           <input type='submit' onClick={funSignUp} value="SignUp"></input>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default Signup;