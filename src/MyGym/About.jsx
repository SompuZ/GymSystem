import React from "react";

export default class About extends React.Component{
   
    render(){
       return <div>
           <>
        <header>
        <nav id="navbar">
        <div class="container">
                <h1 class="logo"><a href="index.html">KBT</a></h1>
                <ul>
                    <li><a  href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a class="current" href="contact.html">Contact Us</a></li>
                </ul>
              </div>
            </nav>  
    </header>

     <section id="contact-form" class="py-3">
         <div class="container">
            <h1 class="l-heading"><span class="text-primary">Contact </span> Us</h1>
            <p>Please fill in all spots so you can contact us</p>
            <form action="process.php">
                <div class="form-group">
                   <laber for="name">Name</laber>
                   <input type="text" name="Name" id="Name"/>
                </div>
                <div class="form-group">
                   <laber for="email">Email</laber>
                   <input type="email" name="email" id="email"/>
                </div>
                <div class="form-group">
                   <laber for="message">Message</laber>
                   <textarea type="email" name="message" id="message"></textarea>
                </div>
                <button type="submit" class="btn">Submit</button>
            </form>
         </div>
     </section>
     <section id="contact-info" class="bg-dark">
         <div class="container">
            <div class="box ">
                <i class="fas fa-hotel fa-3x"></i>
                   <h3> Location</h3>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
               </div>
               <div class="box">
                <i class="fas fa-phone fa-3x"></i>
                <h3>Telefone Number</h3>
                <p>(+381)-55-555-5555</p>
               </div>
               <div class="box ">
                <i class="fas fa-envelope fa-3x"></i>
                <h3>Email Address</h3>
                
               </div>
         </div>

     </section>
     </>
       </div>;
    }
};