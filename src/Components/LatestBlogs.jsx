import React from 'react'
import { Link } from 'react-router-dom';

const LatestBlogs = () => {
  return (
    <section className="Latestblogs theme-light">
        <div className="container">
            <h1 className="title">Latest Blog and News</h1>
            <h2 className="Latestblog-subtitle">Check Out Our Latest Blog and News Update</h2>
            <p className="Latestblogs-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>


            <div className="Latestblogs-cards">
                <div className="Latestblogs-card1 theme-light">
                   <div className="card-media" aria-hidden="true"></div>
                  <div className="date-badge">August 17, 2025</div>
                    <h2 className="card-title">Safe and Secure: The Importance of Choosing the Right Storage</h2>
                    <p className="Latestblogs-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
<Link to="/blog" className="read-more-link">Read more</Link>                </div>

                <div className="Latestblogs-card2 theme-light">
                   <div className="card-media" aria-hidden="true"></div>
                    <div className="date-badge">July 12, 2025</div>
                    <h2 className="card-title">Storage Trends 2024: What's New in the World of Storage</h2>
                    <p className="Latestblogs-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</p>
<Link to="/blog" className="read-more-link">Read more</Link>                </div>

                 <div className="Latestblogs-card3 theme-light">
                   <div className="card-media" aria-hidden="true"></div>
                    <div className="date-badge">April 8, 2025</div>
                    <h2 className="card-title">Free Up Your Space, Free Up Your Life: The Power of Decluttering</h2>
                    <p className="Latestblogs-card-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem….</p>
<Link to="/blog" className="read-more-link">Read more</Link>                </div>
                </div>
        </div>
    </section>
  )
}

export default LatestBlogs
