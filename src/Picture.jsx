import { useState } from 'react'
import './Picture.css'
import { InfoO } from './Data.jsx';
function Picture(){
    const [count, setCount] = useState(0)
    return(
        <>   
       <header class="hero-header">
         <div class="hero-text">
           <h1 >カイヅクウ</h1>
         <img src="src\assets\arrow-removebg-preview.png" alt="Scroll Down" className="imaa"/>
        
         </div>
       </header>
       <section className="grid-container">
        <div className="grid-item">
            <img src="https://tse1.mm.bing.net/th/id/OIP.iUfy1FIwEA5Gvuw8X94AoAHaO0?pid=ImgDet&w=175&h=350&c=7&dpr=1.3&o=7&rm=3" alt="LUFFY" />
           <div>
              <h5>Details</h5> 
              <ListDetailsO />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.m0FX1MgyIYZb_7dM5U2zrwHaLH?w=116&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="ASTA" />
           <div>
              <h5>Details</h5>
              <ListDetailsB />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://wallpapercave.com/wp/wp14913446.webp" alt="LUFFY" />
           <div>
              <h5>Details</h5>
              <ListDetailsO />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.BZOOapFatEIZDQuN4bItfAHaLk?w=200&h=312&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="NARUTO" />
           <div>
              <h5>Details</h5>
              <ListDetailsN />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.5lonUpsnLSd9fbS98792mQHaFZ?w=197&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="ASTA" />
           <div>
              <h5>Details</h5>
              <ListDetailsB />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.fItOVxasgzTLSSEzkRtBZAHaQC?w=161&h=349&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="LUFFY" />
           <div>
              <h5>Details</h5>
              <ListDetailsO />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://tse4.mm.bing.net/th/id/OIP.f8PuqXgyW54MSft19NG32AHaNS?pid=ImgDet&w=187&h=335&c=7&dpr=1.3&o=7&rm=3" alt="NARUTO" />
           <div>
              <h5>Details</h5>
              <ListDetailsN />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.8zkiQ7sxNs2QpcwYBRIXmwHaNK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="ASTA" />
           <div>
              <h5>Details</h5>
              <ListDetailsB />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://tse3.mm.bing.net/th/id/OIP.qljtajtjy1Po7zhjMxNW6AHaOe?pid=ImgDet&w=179&h=350&c=7&dpr=1.3&o=7&rm=3" alt="NARUTO" />
           <div>
              <h5>Details</h5>
              <ListDetailsN />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.rKVh1u-zaQJkC4m7EdX9ogHaQC?w=161&h=350&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="LUFFY" />
           <div>
              <h5>Details</h5>
              <ListDetailsO />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.yVMPHIjhSF8Q1dm31Sqy8QHaNK?w=187&h=333&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="NARUTO" />
           <div>
              <h5>Details</h5>
              <ListDetailsN />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.Cv87am76UZtgP2mnFhWdDgHaNK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="LUFFY" />
           <div>
              <h5>Details</h5>
              <ListDetailsO />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://tse4.mm.bing.net/th/id/OIP.QiaUuffWe1hIS07n5K2ZcAHaNK?pid=ImgDet&w=187&h=331&c=7&dpr=1.3&o=7&rm=3" alt="ASTA" />
           <div>
              <h5>Details</h5>
              <ListDetailsB />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://tse4.mm.bing.net/th/id/OIP.UGY_ieVEl9OKaoUN0gL2YAHaMM?w=735&h=1210&rs=1&pid=ImgDetMain&o=7&rm=3" alt="ASTA" />
           <div>
              <h5>Details</h5>
              <ListDetailsB />
           </div>
        </div>
         <div className="grid-item">
            <img src="https://th.bing.com/th/id/OIP.GB597DCnv6kWkrhdo2u6JgHaN-?w=181&h=343&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="NARUTO" />
           <div>
              <h5>Details</h5>
              <ListDetailsN />
           </div>
        </div>
       </section>
        
        </>
    )
}
export default Picture

function ListDetailsO() {
    const Detail = {
        anime: "ONE PIECE",
        author: "Eiichiro Oda"
    };

    return (
        <InfoO details={Detail} /> 
    );
}
function ListDetailsN() {
    const Detail = {
        anime: "NARUTO",
        author: "Eiichiro Oda"
    };

    return (
        <InfoO details={Detail} /> 
    );
}
function ListDetailsB() {
    const Detail = {
        anime: "BLACK CLOVER",
        author: "Eiichiro Oda"
    };

    return (
        <InfoO details={Detail} /> 
    );
}

