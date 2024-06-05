import { useEffect, useState } from "react";
import style from "../App.module.css"
function Header({toggleCart,cartItemCount,category}) {
  let[search,setSearch] = useState();

  function funClick(event){
    event.preventDefault();
    alert('hello')
  }

  function funChange(event){
    setSearch(event.currentTarget.value);
  }

  function funSearch(){
    category.map((x)=>{
      let result = x.title;
      if(search === result){
        alert('product found!!!')
      }
  })

  }


  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">myAccount</a></li>
            <li><a className="dropdown-item" href="/login">Login</a></li>
            <li><a className="dropdown-item" href="/signup">Signup</a></li>
          </ul>
        </li>
      </ul>

      <input className={style.cart} type="button" onClick={toggleCart} value={`cart (${cartItemCount})`}></input>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" onChange={funChange} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={funSearch} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

export default Header;