import '../css/Projects.css'
import { useState } from 'react'

// Instead of the useState truthy variables, onClick trigger different divs??? 

function Projects() {
    const[displayDefault,setdisplayDefault]=useState(true)
    const[displayMM,setdisplayMM]=useState(false)
    const[githubLink,setgithubLink]=useState("")
    const[websiteLink,setwebsiteLink]=useState("")
    const[displayJGBartending,setDisplayJGBartending]=useState(false)

    function mmPortfolio(e){
        e.preventDefault();
        setdisplayDefault(false)
        setdisplayMM(!displayMM)
        setDisplayJGBartending(false)
        setgithubLink("https://github.com/moralesdoris880/mmportfolio")
        setwebsiteLink("https://preeminent-twilight-8ab011.netlify.app/")
    }

    function JGBartending(e){
        setDisplayJGBartending(!displayJGBartending)
        setdisplayDefault(false)
        setdisplayMM(false)
        setgithubLink("https://github.com/moralesdoris880/jgbartending")
        setwebsiteLink("https://creative-kelpie-509e30.netlify.app/")
    }

   return (
    <div>
        <div id="ProjectTitle"></div>
        <div id="ProjectSection">
            <div id="Notepad">
                <li id="firstProject" onClick={(e)=>mmPortfolio(e)}>Meraz M Portfolio</li>
                <li className="Projects" onClick={(e)=>JGBartending(e)}>J&G Bartending</li>
                <li className="Projects">Coming Soon</li>
                <li className="Projects">Coming Soon</li>
                <li className="Projects">Coming Soon</li>
                <li className="Projects">Coming Soon</li>
            </div>
            <div id="ProjectDemo">
                <div id="outlineProjectDemo">
                {displayDefault &&
                    <div id="defaultProject">
                        <div id="defaultUIText">
                            <h2>Select a Project</h2>
                            <div id="arrow"></div>
                        </div>
                    </div>
                }
                {displayMM &&
                    <div id="MerazMPortfolio">
                    </div>
                }
                {displayJGBartending &&
                    <div id="JGBartending">
                    </div>
                }
                </div>
            </div>
            <div>
            { ( displayMM || displayJGBartending ) && 
                <div id="linklist">
                    <a className="links" href={githubLink}>Github</a>
                    <a className="links" href={websiteLink}>Website</a>
                </div>} 
            </div>
        </div>
    </div>);
}

export default Projects;