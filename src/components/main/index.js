import React from 'react';

function About() {

    return(
        <div class="pusher">
        <div class="ui inverted vertical masthead center aligned segment">
          <div class="ui text container">
            <h1 class="ui inverted header">McKinley Fulmer's Portfolio</h1>
            <h2>This portfolio is built with react.js!</h2>
          </div>
        </div>
        <div class="ui vertical stripe segment">
          <div class="ui middle aligned stackable grid container">
            <div class="row">
              <div class="eight wide column">
                <h3 class="ui header">My Skills: </h3>
                <p>Full Stack Web Development utilizing: JavaScript, HTML, CSS, jQuery, Bootstrap, Node.js,
                   MySQL, Express.js, and React.js </p>
                <h3 class="ui header">My Work Objectives:</h3>
                <p> User-Focused Web Developer with advanced skills in JavaScript, HTML and CSS.</p>
              </div>
              <div class="six wide right floated column">
                <img class="ui fluid image" src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg"/>
              </div>
            </div>
            <div class="row">
              <div class="center aligned column">
                <a class="ui huge button">Visit my Linkedin Profile<i class= "chevron circle right icon"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;