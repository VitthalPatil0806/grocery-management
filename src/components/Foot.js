import style from "../App.module.css";
function Foot(){
    return(
        <>
        <section className={style.foot}>
            <div className="container">
                <div className="row">

                    <div className="col-md-3 my-auto">
                    <a className="navbar-brand" href="#">Navbar</a>
                    </div>

                    <div className="col-md-3 my-auto">
                        <ul type="none">
                            <strong>Useful Links</strong>
                            <li>about us</li>
                            <li>contact us</li>
                        </ul>
                    </div>

                    <div className="col-md-3 my-auto">
                        <ul type="none">
                            <strong>Categories</strong>
                            <li>smartphones</li>
                            <li>laptops</li>
                            <li>fragrances</li>
                            <li>skincare</li>
                            <li>home-decoration</li>
                            <li>watches</li>
                            <li>sunglasses</li>
                        </ul>
                    </div>

                    <div className="col-md-3 my-auto">
                        <ul type="none" className="d-flex justify-content-around">
                            <li><i className="fa fa-twitter"></i></li>
                            <li><i class="fa fa-facebook-f"></i></li>
                            <li><i class="fa fa-whatsapp"></i></li>
                            <li><i class="fa fa-linkedin-square"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Foot;