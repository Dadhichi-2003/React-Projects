import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";




function Des() {
    return (
        <><div className="home">
            <div className="container text-center ">
                <h1 className="Head"> CardFusion Card Maker</h1>
                <h3 className="subhead"> "Where Creativity and Professionalism Meet" </h3>
            </div>
            <div className="container text-center my-5">
                <p className="description">
                    Welcome to CardFusion, your ultimate destination for creating
                    professional and impactful business cards. At CardFusion, we believe
                    that a business card is more than just a piece of paper—it's a
                    powerful tool for making a lasting impression. Our platform offers a
                    seamless fusion of innovative design and high-quality printing,
                    allowing you to craft business cards that stand out and reflect your
                    unique brand identity. Whether you're a startup entrepreneur, a
                    seasoned professional, or a freelancer, CardFusion provides an
                    extensive range of customizable templates and design elements to suit
                    every style and industry. With our user-friendly design tools, you can
                    easily create cards that not only showcase your contact information
                    but also communicate your brand's essence with elegance and clarity.
                    Join thousands of satisfied customers who trust CardFusion for their
                    business card needs. Elevate your networking game and leave a
                    memorable mark with CardFusion—where your business card becomes a
                    fusion of creativity and professionalism. Start designing your
                    distinctive business cards today!
                </p>
            </div>

            <div className="container text-center my-5">
                <button className="btn btn-dark btn-lg"> <Link  to='/Details' style={{ textDecoration: 'none', color: 'inherit' }}>Create Card</Link></button>
            </div>

            <div className="  container my-5">
                <h3 className="subhead my-3 "> Simplify your card making journey using following steps :</h3>
                <p className="steps">
                    Step 1: Click on Create Card button. <br />
                    Step 2: Fill the details that you want in card.<br />
                    Step 3: Select the card you want and Download<br />
                </p>   
            </div>
            </div>
        </>
    );
}

export default Des;