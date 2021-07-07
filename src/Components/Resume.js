import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var project = this.props.data.project.map(function (project) {
        return <div key={project.projectTitle}><h3>{project.projectTitle}</h3>
          <p className="info">{project.title}<span>&bull;</span> <em className="date">{project.years}</em></p>
          <p>{project.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Projet</span></h1>
          </div>

          <div className="nine columns main-col">
            {project}
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Technologie</span></h1>
          </div>
          <div>
          <div className="nine columns main-col">
            {skillmessage}
          </div>
          <ul className="bgrid-quarters s-bgrid-thirds cf">
            <div className="columns feature-item">
              <img className="skill" alt="Git" src="images/git.jpg"></img>
              <h5>Git</h5>
              <p>J'utilise Git pour tous mes projets jusqu'à présent. J'ai utilisé Git pour le contrôle de version dans de petites équipes.</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="nodeJS" src="images/node.jpg"></img>
              <h5>Node Js</h5>
              <p>Node JS est mon langage de script côté serveur de prédilection. La majeure partie de mon expérience avec lui a été en conjonction avec des projets basés sur ExpressJS.</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="materialUI" src="images/material.jpg"></img>
              <h5>Material UI</h5>
              <p>J'utilise material UI le plus souvent lorsque je conçois la mise en page de mes sites avec React. C'est le framework avec lequel je suis le plus familier et je peux donc concevoir plus rapidement qu'avec d'autres.</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="expressJS" src="images/express.png"></img>
              <h5>Express Js</h5>
              <p>J'apprécie ExpressJs pour sa facilité de configuration et sa capacité à mettre en place rapidement une api REST. J'ai utilisé ExpressJS en équipe pour le projet hélios pour construire l'api REST en conjonction avec React pour construire le frontend de l'application web.</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="React" src="images/react.jpg"></img>
              <h5>React Js</h5>
              <p>J'ai eu plusieurs expériences dans l'utilisation de React et je trouver ça complexe au début. Mais j'ai appris à l'utiliser et je vais continuer à le faire. Car il offre beaucoup de bibliothèque utilisable et propose beaucoup de foncnalité intéressante. Une fois bien maitriser il est possible de faire de grandes choses ! Ce site a justement étais construit avec React Js.</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="ReactVR" src="images/react_vr.png"></img>
              <h5>React VR</h5>
              <p>Prochainement...</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="Next JS" src="images/next_js.png"></img>
              <h5>Next JS</h5>
              <p>J'utilise parfois Next.js car ce framework permet d’écrire facilement des applications universelles avec React de manière transparente. Je compte l'utiliser à nouveaux pour le projet Summoners Wars Guide.</p>
            </div>
            <div className="columns feature-item">
              <img className="skill" alt="mongoDB" src="images/mongo.jpg"></img>
              <h5>MongoDB</h5>
              <p>J'ai utilisé de nombreux systèmes de bases de données différents et j'ai une meilleure formation et expérience des bases de données relationnelles. Cependant, pour de nombreuses applications, la facilité d'utilisation de MongoDB répond mieux à mes besoins et il est beaucoup plus agréable de travailler avec ce système.</p>
            </div>
          </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
