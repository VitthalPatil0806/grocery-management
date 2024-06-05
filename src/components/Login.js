import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Login() {
  const [show, setShow] = useState(true);
  const [user,setUser] = useState();
  const [password,setPassword] = useState();

  const handleClose = () => {setShow(false)};


  function userChange(event){
    setUser(event.currentTarget.value);
  }

  function passChange(event){
    setPassword(event.currentTarget.value);
  }

  function funlogin(){
   let vals =  JSON.parse(localStorage.getItem("data")) || [];
   let res = vals.some(ele => ele.firstName === user && ele.password === password);

   if(res){
    alert('login successful');
    handleClose();
   }
   else{
    alert('login fail');
    handleClose();
   }
  }
  //  for(let i=0;i<vals.length;i++){
  //   if(vals[i].firstName === user && vals[i].password === password){
  //     return true;
  //     handleClose();
  //   }
  //   return false;
  //  }
  // }

  // if(funlogin()){
  //   console.log('hello');
  // }
  // else{
  //   console.log('hii');
  // }

  return (
    <>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Here   </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Enter userName: </label> 
            <input type='text' onChange={userChange}></input>
            <br></br>
            <br></br>
            <label>Enter password: </label> 
            <input type='text' onChange={passChange}></input>
        </Modal.Body>
        <Modal.Footer>
           <input type='button' onClick={funlogin} value="login"></input>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <h5>
        {user+password}
      </h5>
    </>
  );
}

export default Login;