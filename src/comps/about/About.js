import React from 'react';
import './about.css';
import  Data  from './Data';

function About() {
  return (
    <section className="about">
      {
        Data.map((item, idx) => {
          return (
            <div className="sector" key={idx}>
              <div className="heading">
                <h3>{item.heading}</h3>
                <button>+</button>
              </div>
              <p>{item.content}</p>
            </div>
          );
        })
        
      }
    </section>
  )
}

export default About;