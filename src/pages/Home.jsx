
import React, { useState } from 'react';

const Home = () => {
  const [filter, setFilter] = useState('All');
const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack solution with React frontend and Node.js backend",
      category: "Web App",
      image: "project1"
    },
    {
      id: 2,
      title: "CMS Website",
      description: "Custom WordPress theme development for client",
      category: "WordPress",
      image: "project2"
    },
    {
      id: 3,
      title: "Productivity Tool",
      description: "Web application for task management and team collaboration",
      category: "Web App",
      image: "project3"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile application for financial transactions",
      category: "Mobile",
      image: "project4"
    },
    {
      id: 5,
      title: "Restaurant Booking System",
      description: "Online reservation system with real-time availability",
      category: "Web App",
      image: "project5"
    },
    {
      id: 6,
      title: "Fitness Tracker Dashboard",
      description: "Analytics dashboard for fitness data visualization",
      category: "Dashboard",
      image: "project6"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = ['All', ...new Set(projects.map(p => p.category))];


  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">Welcome To Delee Crest Services</h1>
        <div className="center-btn"><button className="btn btn-primary">Explore Our Universe of Possibilities we bring your ideas to live</button></div>
       
        <div className="card fade-in">
          <h2 className="card-title">Full-Stack Developer & Designer</h2>
          <p>Welcome to my Delee Crest Service portfolio! we specialize in creating stunning web experiences with modern technologies.</p>
          <p>With expertise in both front-end and back-end development, I bring your ideas to life with clean code and beautiful designs.</p>
          <div className="skills">
            <h3>Technologies I Work With:</h3>
            <ul>
              <li>React, Vue.js, Angular</li>
              <li>Node.js, Express, MongoDB</li>
              <li>UI/UX Design</li>
              <li>WordPress Development Pages/Niche</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
        </div>
       
        <div className="card fade-in">
          <h2 className="card-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>E-Commerce Platform</h3>
              <p>Full-stack solution with React frontend and Node.js backend</p>
            </div>
            <div className="project-card">
              <h3>CMS Website</h3>
              <p>Custom WordPress theme development for client</p>
            </div>
            <div className="project-card">
              <h3>Productivity Tool</h3>
              <p>Web application for task management and team collaboration</p>
            </div>
            <div className="project-card">
              <h3>Productivity Tool</h3>
              <p>Social Media downloader and Image size Reducer</p>
            </div>
          </div>
        </div>

        <div className="card fade-in">

            <h3 className="card-title">You have An Outstanding Project In Mind?</h3>
            <p>Welcome to the Home of posibilities...it has never been in existence does not mean imposible!</p>
           <div className='center-btn'> <button className="btn pulse">Start Your Journey to Endless Possibilities</button></div>

        </div>

         
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

export default Home;





