import { useState } from 'react';
import Picture from './Picture'; 
import './App.css';
import Form from './Form';

function App() {
   const [page, setPage] = useState('home');


  return (
    <div>
     <nav class="navbar">
      <div class="logo">ANIMEFLEX</div>
   <div className="nav-links">
    <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>Home</a>
    <a href="#" onClick={(e) => { e.preventDefault(); setPage('pics'); }}>Pictures</a>
  <a href="https://www.crunchyroll.com" target='_blank' rel="noreferrer">
    Watch Now
  </a>
</div>
    </nav>
   
    
    {page === 'home' ? (
        <div> 
      

    <header class="hero">
        <div class="hero-image">
            <img src="https://wallpapercave.com/wp/wp5342493.jpg" alt="poster"/>
        </div>
        <div class="hero-content">
            <h3 class="q">Widest Entertainment Domain</h3>
            <h5 class="u">Building people's Mindset</h5>
        </div>
    </header>

    
    <section class="grid-container">
        <div class="grid-item">
            <img src="https://wallpapercave.com/wp/wp11636749.jpg" alt="Icon"/>
            <h3>One Piece</h3>
                    <p>Driven by the dream of finding the "One Piece," Monkey D. Luffy leads the Straw Hat Pirates through a treacherous, world-spanning odyssey to challenge the oppressive World Government and claim the title of Pirate King.</p>
        </div>
        <div class="grid-item">
            <img src="https://th.bing.com/th/id/OIP.gioZIHRgH90uWDNQliLNOQHaKt?w=207&h=300&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Icon"/>
           <h3>Naruto</h3>
                    <p>An outcast boy with a powerful demon inside him fights to earn his village's respect and become their greatest leader.</p>
        </div>
        <div class="grid-item">
            <img src="https://i.pinimg.com/736x/09/65/57/0965577ed8c1c05f51ee27089f96bf0a.jpg" alt="Icon"/>
            <h3>Black Clover</h3>
                    <p>Two students hide their true selves until they find comfort in each other.</p>
        </div>
    </section>

   
    <section class="rows-section">
        <div class="flex-row">
            <img src="https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-603-nar_01_web.jpg" alt="Small Thumb"/>
           
                <div class="author">
                     <h2>Masashi Kishimoto's Legacy</h2>
                    <p>
                        Created by <strong>Masashi Kishimoto</strong>, the manga debuted in <i>Weekly Shōnen Jump</i> in 1999 and ran for 15 years. It is one of the "Big Three" shonen manga that defined a generation.
                    </p>
                    <p>
                        The series is beloved for its deep character development, themes of loneliness and redemption, and some of the most iconic fight choreography in manga history.
                    </p>
                    <p><strong>Status:</strong> Completed (Followed by the sequel <i>Boruto</i>).</p>
                </div>
        </div>
        <div class="flex-row">
            <img src="https://dwgkfo5b3odmw.cloudfront.net/manga/thumbs/thumb-715-ONP_01_web_reprint24.jpg" alt="Small Thumb"/>
            <div class="author">
                <h2>The Masterpiece of Eiichiro Oda</h2>
                    <p>
                        Written and illustrated by <strong>Eiichiro Oda</strong>, the manga began in <i>Weekly Shōnen Jump</i> 
                        in July 1997. It is the best-selling manga series in history, with over 500 million copies in circulation worldwide.
                    </p>
                    <p>
                        The manga is famous for its foreshadowing—details planted decades ago often return to play major roles 
                        in the current plot. Oda's art style is uniquely expressive, blending cartoonish charm with high-stakes emotional drama.
                    </p>
                    <p><strong>Status:</strong> The Final Saga is currently underway.</p>
                </div>
        </div>
        <div class="flex-row">
            <img src="https://i.pinimg.com/originals/76/ca/8b/76ca8b6c6d4661ead944d1ecb50f3ff2.jpg" alt="Small Thumb"/>
            <div class="author">
                <h2>The Manga Source</h2>
                    <p>
                        Created by <strong>Yūki Tabata</strong>, the <i>Black Clover</i> manga began serialization in 
                        <i>Weekly Shōnen Jump</i> in February 2015. 
                    </p>
                    <p>
                        The manga is praised for its incredibly fast-paced storytelling and detailed artwork, particularly 
                        during the Spade Kingdom Raid arc. In 2023, the manga moved to <i>Jump GIGA</i> to allow the 
                        author more time to craft the final climactic battles of the series.
                    </p>
                    <p><strong>Status:</strong> Ongoing / Final Arc</p>
                </div>
        </div>
    </section>
    </div>
      ) : (
        // <Form/>
        <Picture />
      )}
      </div>
    
    
  );
}

export default App
