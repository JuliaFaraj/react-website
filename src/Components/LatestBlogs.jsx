
import { Link } from 'react-router-dom';            
import { useState, useEffect } from 'react';        

// Försökte skapa en grundstruktur utifrån vanlig html och tidigare hämtning men fungerade inte korrekt så fick be AI  om hjälp för hämtningen.
// LatestBlog sektionen hämtar bloggar från ett API när sidan laddas.
// Den sparar resultatet i state, hanterar loading och error, sorterar bloggarna efter datum, plockar ut de tre senaste och renderar dem som kort.
// Varje kort visar bild, datum, titel, beskrivning och en länk som går till /blog via React Router.

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);          
  const [loading, setLoading] = useState(true);    
  const [error, setError] = useState('');           

  const fetchData = async () => {                   
    try {
      const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs'); 
      if (!res.ok) throw new Error(`Request failed: ${res.status}`); 
      const data = await res.json();                
      setBlogs(data);                               
    } catch (err) {
      setError(err.message || 'Unknown error');     
    } finally {
      setLoading(false);                            
    }
  };

  useEffect(() => { fetchData(); }, []);            

  if (loading) return <p>Laddar…</p>;               
  if (error)   return <p className="error-message">{error}</p>; 

  
  const latest = [...blogs]                          
    .sort((a, b) => new Date(b.created) - new Date(a.created)) 
    .slice(0, 3);                                    

  return (
    <section className="Latestblogs theme-light">    
      <div className="container">                    
        <h1 className="title">Latest Blog and News</h1>                                   
        <h2 className="Latestblog-subtitle">Check Out Our Latest Blog and News Update</h2> 
        <p className="Latestblogs-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 

        <div className="Latestblogs-cards">          
          {latest.map((b) => (                      
            <div key={b.id} className="Latestblogs-card theme-light"> 
              <div className="card-media" aria-hidden="true">         
                <img
                  src={b.imageUrl || b.imageurl}    
                  alt={b.title}                      
                  loading="lazy"                    
                />
              </div>

              <div className="date-badge">
                {new Date(b.created).toLocaleDateString()}          
              </div>

              <h2 className="card-title">{b.title}</h2>               
              <p className="Latestblogs-card-subtitle">{b.description}</p> 

              <Link to="/blog" className="read-more-link">Read more</Link> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;                              
