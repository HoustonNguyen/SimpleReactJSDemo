import React from 'react';
//Functional Component
function About() {
    return (
        <div style={{textAlign: "center"}}>
            <h2>About</h2>
            <p>
                Created by Houston Nguyen
            </p>
            <br />
            <p>This app is inspired by Travesty Media's Crash Course on ReactJS, which is an excellent and highly-recommended video for exisitng developers. A complete newbie could
                probably follow along just fine, but I feel like they may miss out on some jargon, nuance, and general purpose. Nonetheless, since every ad ever on Linkedin is asking 
                for experience with ReactJS (or Angular, but mostly React), this is a pretty useful resource.
            </p>

            <iframe 
            title="Resource"
            width="100%" 
            height="300" 
            src="https://www.youtube.com/embed/sBws8MSXN7A" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
    )
}

export default About;