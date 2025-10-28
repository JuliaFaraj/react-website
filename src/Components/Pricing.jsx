import React from 'react'

const Pricing = () => {
  return (
    <section className="pricing-section theme-dark">
        <div className="container">
            <h1 className="pricing-title">Pricing Plans</h1>
            <p className="pricing-lead">Find the Perfect Plan for Your Storage Needs</p>

            <div className="pricing-cards">
                <div className="pricing-card1 theme-light">
                    <h2 className="pricing-card-title">Small Unit</h2>
                    <h3 className="pricing-card-price">$50/month</h3>
                    <p className="pricing-card-subtitle">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    <ul className="pricing-card-features"> 
                        <li>Nam nec ipsum in dolor</li>
                        <li>Fusce nec ligula ut arcu</li>
                        <li>Aliquam pulvinar arcu in</li>
                        <li>Duis gravida enim porta</li>
                        <li>Etiam eget libero non ligula</li>
                    </ul>
                    <button className="btn--primary">Rent Now</button>
                </div>

                <div className="pricing-card2 theme-light">
                    <h2 className="pricing-card-title">Meduim Unit</h2>
                    <h3 className="pricing-card-price">$100/month</h3>
                    <p className="pricing-card-subtitle">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    <ul className="pricing-card-features"> 
                        <li>Nam nec ipsum in dolor</li>
                        <li>Fusce nec ligula ut arcu</li>
                        <li>Aliquam pulvinar arcu in</li>
                        <li>Duis gravida enim porta</li>
                        <li>Etiam eget libero non ligula</li>
                    </ul>
                    <button className="btn--primary">Rent Now</button>
                </div>

                <div className="pricing-card3 theme-light">
                    <h2 className="pricing-card-title">Large Unit</h2>
                    <h3 className="pricing-card-price">$150/month</h3>
                    <p className="pricing-card-subtitle">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    <ul className="pricing-card-features"> 
                        <li>Nam nec ipsum in dolor</li>
                        <li>Fusce nec ligula ut arcu</li>
                        <li>Aliquam pulvinar arcu in</li>
                        <li>Duis gravida enim porta</li>
                        <li>Etiam eget libero non ligula</li>
                    </ul>
                    <button className="btn--primary">Rent Now</button>
                </div>

                <div className="pricing-card4 theme-light">
                    <h2 className="pricing-card-title">Execlusive Unit</h2>
                    <h3 className="pricing-card-price">$200/month</h3>
                    <p className="pricing-card-subtitle">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
                    <ul className="pricing-card-features"> 
                        <li>Nam nec ipsum in dolor</li>
                        <li>Fusce nec ligula ut arcu</li>
                        <li>Aliquam pulvinar arcu in</li>
                        <li>Duis gravida enim porta</li>
                        <li>Etiam eget libero non ligula</li>
                    </ul>
                    <button className="btn--primary">Rent Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing
