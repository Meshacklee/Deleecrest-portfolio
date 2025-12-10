import React, { useState } from 'react';

const Product = () => {
  const [filter, setFilter] = useState('All');

  // Products section data
  const product = [
    {
      id: 1,
      name: "School Portal System",
      description: "Complete management solution for educational institutions",
      features: ["Student Records", "Attendance Tracking", "Grade Management", "Parent Portal"]
    },
    {
      id: 2,
      name: "Online Registration Platform",
      description: "Event and course registration system with payment integration",
      features: ["Multi-event Support", "Payment Processing", "Email Notifications", "Analytics Dashboard"]
    },
    {
      id: 3,
      name: "Business Management Tool",
      description: "All-in-one solution for small business operations",
      features: ["Inventory Management", "Customer CRM", "Invoicing", "Reporting"]
    }
  ];

  // Portfolio projects section data
  const projects = [
    {
      id: 101,
      title: "E-Commerce Platform",
      description: "Full-stack solution with React frontend and Node.js backend",
      category: "Web App",
      image: "project1"
    },
    {
      id: 102,
      title: "CMS Website",
      description: "Custom WordPress theme development for client",
      category: "WordPress",
      image: "project2"
    },
    {
      id: 103,
      title: "Productivity Tool",
      description: "Web application for task management and team collaboration",
      category: "Web App",
      image: "project3"
    },
    {
      id: 104,
      title: "Mobile Banking App",
      description: "Secure mobile application for financial transactions",
      category: "Mobile",
      image: "project4"
    },
    {
      id: 105,
      title: "Restaurant Booking System",
      description: "Online reservation system with real-time availability",
      category: "Web App",
      image: "project5"
    },
    {
      id: 106,
      title: "Fitness Tracker Dashboard",
      description: "Analytics dashboard for fitness data visualization",
      category: "Dashboard",
      image: "project6"
    }
  ];

  // Filtering
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">Welcome to DLC Web Portfolio</h1>

        
        {/* Products Section */}
        <section id="products" className="products">
          <div className="container">
            <h2 className="page-title fade-in">Our Products</h2>
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={product.id} className="card fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="card-title">{product.name}</h3>
                  <p>{product.description}</p>
                  <ul className="features-list">
                    {product.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <button className="btn">Learn More</button>
                </div>
              ))}

             
                <h3 className="card-title">Describe Your Idea/Project</h3>
                <p>Have a project in mind? Request a custom quote for your development needs.</p>
              <a href="/contact">
              <button className="btn">Request Quote</button>
              </a>              
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>

            {/* Category Filter */}
            <div className="category-filter">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <div className="placeholder">{project.image}</div>
                  </div>
                  <div className="project-content">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <button className="btn btn-secondary">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Product;


