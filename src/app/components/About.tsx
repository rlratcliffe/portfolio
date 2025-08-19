export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="grid-about">
        <div>
          <p className="body-text">
            About
          </p>
          
          <div className="skill-tags">
            <span className="skill-tag-blue">
              Skill 1
            </span>
            <span className="skill-tag-green">
              Skill 2
            </span>
            <span className="skill-tag-purple">
              Skill 3
            </span>
            <span className="skill-tag-pink">
              Skill 4
            </span>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="profile-avatar">
            a photo
          </div>
        </div>
      </div>
    </section>
  );
}