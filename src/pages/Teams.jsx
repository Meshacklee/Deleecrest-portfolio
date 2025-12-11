// src/pages/Teams.jsx
import React from 'react';

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Meshacklee I.",
      role: "Lead Developer",
      bio: "Full-stack developer with 5+ years of experience in web technologies.",
      skills: ["React", "Node.js", "Python", "AWS"]
    },
    {
      id: 2,
      name: "Joshua Deborah",
      role: "UI/UX Designer",
      bio: "Creative designer specializing in user-centered design and WordPress themes.",
      skills: ["Figma", "Adobe XD", "WordPress", "User Research"]
    },
    {
      id: 3,
      name: "Johnson U",
      role: "Backend Specialist",
      bio: "Database expert with focus on scalable web applications and API development.",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "Docker"]
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">Our Team</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="card fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="team-member">
                <div className="member-avatar">
                  <div className="avatar-placeholder">{member.name.charAt(0)}</div>
                </div>
                <h2 className="card-title">{member.name}</h2>
                <p className="member-role">{member.role}</p>
                <p>{member.bio}</p>
                <div className="skills-tags">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;