






import { Link } from 'react-router-dom';            
import { useState, useEffect } from 'react';        

const LatestBlogs = () => {
  const [blogs, setBlogs] = useState([]);           // Lista med bloggar från API
  const [loading, setLoading] = useState(true);     // Visar "Laddar…" tills hämtningen är klar
  const [error, setError] = useState('');           // Text för felmeddelande

  const fetchData = async () => {                   // Hämtar data en gång vid mount
    try {
      const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs'); // GET
      if (!res.ok) throw new Error(`Request failed: ${res.status}`); 
      const data = await res.json();                // Tolka svaret som JSON
      setBlogs(data);                               // Spara i state → triggar render
    } catch (err) {
      setError(err.message || 'Unknown error');     // Sätt feltext om något brakar
    } finally {
      setLoading(false);                            // Oavsett utfall: sluta ladda
    }
  };

  useEffect(() => { fetchData(); }, []);            // Kör fetchData endast första rendern

  if (loading) return <p>Laddar…</p>;               // Enkel loader (kan bytas till skeleton)
  if (error)   return <p className="error-message">{error}</p>; // Visa fel och avbryt

  
  const latest = [...blogs]                          // Kopiera för att inte mutera state
    .sort((a, b) => new Date(b.created) - new Date(a.created)) // Datumjämförelse
    .slice(0, 3);                                    // Endast tre kort

  return (
    <section className="Latestblogs theme-light">    {/* Sektionens wrapper + tema */}
      <div className="container">                    {/* Grid-container (styr layout i CSS) */}
        <h1 className="title">Latest Blog and News</h1>                                   {/* Överrubrik */}
        <h2 className="Latestblog-subtitle">Check Out Our Latest Blog and News Update</h2> {/* Huvudrubrik */}
        <p className="Latestblogs-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> {/* Intro */}

        <div className="Latestblogs-cards">          {/* Grid för tre kort */}
          {latest.map((b) => (                      // Loopa igenom senaste tre
            <div key={b.id} className="Latestblogs-card theme-light"> {/* Ett blog-kort */}
              <div className="card-media" aria-hidden="true">         {/* Bildyta (dekorativ) */}
                <img
                  src={b.imageUrl || b.imageurl}    // Säker fallback om API varierar på key
                  alt={b.title}                      // Alt för tillgänglighet
                  loading="lazy"                     // Ladda bilder först när de syns
                />
              </div>

              <div className="date-badge">
                {new Date(b.created).toLocaleDateString()}          
              </div>

              <h2 className="card-title">{b.title}</h2>               {/* Titel från API */}
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
