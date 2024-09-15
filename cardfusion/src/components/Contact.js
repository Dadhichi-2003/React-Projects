import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
    return (
        <div className="container">
            <hr />
            <div className=" container my-3">
                <h3>Contact us </h3>
            </div>
            <div className=" contact">
               
                    <div className="d-flex flex-column">
                    <a 
                        className="bi bi-instagram"
                        style={{ fontSize: "30px", color: "black", marginRight: "10px" }}
                        href="https://www.instagram.com/dadhichi_pandya?utm_source=qr&igsh=MXI0ZG1mNWc4eXZyYw=="
                        >
                            <b className="mx-3">@CARD_FUSION</b>
                        </a>
                        
                   
                    <a
                        className="bi bi-envelope-at-fill"
                        style={{ fontSize: "30px", color: "black", marginRight: "10px" }}
                    >
                        <b className="mx-3">cardfusion07@gmail.com </b></a>{" "}
                     
                    <a
                        className="bi bi-linkedin"
                        style={{ fontSize: "30px", color: "black", marginRight: "10px" }}
                        href="https://www.linkedin.com/in/dadhichi-pandya-74bb842a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    ><b className="mx-3"> Dadhichi Pandya </b></a>
                    </div>
               
               
                    <div  className="d-flex flex-column">
                    <a
                        className="bi bi-bi bi-github   "
                        style={{ fontSize: "30px", color: "black", marginRight: "10px" }}
                        href="https://github.com/Dadhichi-3112"
                    ><b className="mx-3">Dadhichi-3112</b></a>
                    
              
                    <a
                        className=" bi bi-whatsapp"
                        style={{ fontSize: "30px", color: "black", marginRight: "10px" }}
                    ><b className="mx-3">+91 9316733725 </b></a>{" "}
                    </div>
                    
            </div>
            
            <hr />
        </div>
    );
}

export default Contact;
