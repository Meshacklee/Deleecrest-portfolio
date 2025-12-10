import React from 'react';

const Pricing = () => {
  const services = [
    {
      title: "Landing Page",
      price: "$30",
      description: "Single page website with responsive design and contact form",
      features: ["Responsive Design", "Contact Form", "SEO Optimization", "1 Week Delivery"]
    },
    {
      title: "Blog Website",
      price: "$100",
      description: "Multi-page blog with CMS functionality",
      features: ["Custom Design", "Content Management", "Social Integration", "2 Weeks Delivery"]
    },
    {
      title: "Online Tools & Utility Websites",
      price: "$500 - $500,000+",
      description: "Complex web applications tailored to your specific needs",
      features: ["Custom Development", "Database Integration", "User Authentication", "Ongoing Support", "Scalable Architecture"]
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">Pricing Plans</h1>
        <div className="pricing-grid">
          {services.map((service, index) => (
            <div key={index} className="card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <h2 className="card-title">{service.title}</h2>
              <div className="price">{service.price}</div>
              <p>{service.description}</p>
              <ul className="features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href ="/contact">
              <button className="btn pulse">Get Started</button>
              </a>
            </div>
          ))}

          <h3 className="card-title">Describe Your Idea/Project</h3>
            <p>Have a project in mind? Request a custom quote for your development needs.</p>
            <a href="/contact">
              <button className="btn">Request Quote</button>
            </a>
        </div>

        
      </div>
    </div>
  );
};

export default Pricing;