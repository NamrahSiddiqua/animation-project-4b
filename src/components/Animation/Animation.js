import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import './Animation.css';
import shark from '../Images/shark1.gif';
import coral from '../Images/corals.gif';
import mermaid from '../Images/mermaid.gif';
import fish3 from '../Images/fish3.gif';
import fish1 from '../Images/fish1.gif';
import clam from '../Images/clam.gif';
const Animation = () => {
    const { ref } = useWebAnimations({
        keyframes: [{ transform: 'translate(-500px, 170px)' },
        { transform: 'translate(1210px,400px)' },
        ],
        timing: {
            // delay: 500, // Start with a 500ms delay
            duration: 5000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "normal", // Run the animation forwards and then backwards
        },
    })

    const { ref1 } = useWebAnimations({
        keyframes: [{ transform: 'translate(0, 100px)' },
        { transform: 'translate(1210px,400px)' },
        ],
        timing: {
            // delay: 500, // Start with a 500ms delay
            duration: 2000, // Run for 1000ms
            iterations: Infinity, // Repeat once
            direction: "normal", // Run the animation forwards and then backwards
            easing: "ease-in-out", // Use a fancy timing function
        },
    })

    return (
        <div className="container">
            <div><img ref={ref} src={shark} alt={'shark'} /></div>
            <img src={mermaid} alt={'mermaid'} />
            <img src={coral} className="corals" alt={'corals'} width="160" height="168" />
            <img src={fish3} className="fish1" alt={'fish'} />
            <img src={clam}  className="clam" alt={'clam'} width="70" height="70" />
            <img src={coral} className="corals1" alt={'corals'} width="164" height="170" />
            <img src={fish1} alt={'fish'} width="120" height="120"/>
        </div>
    );
};

export default Animation