import '../css/Skills.css'

function Skills(){
    const sourceSkills = [ "./logos/Javascript.png", "./logos/Typescript.svg", "./logos/HTML.webp", "./logos/CSS.svg", "./logos/React.png", "./logos/RTL.png", "./logos/Jest.png", "./logos/Tailwind.png", "./logos/Figma.png", "./logos/PostgreSQL.jpeg", "./logos/AWS.png", "./logos/JIRA.png", "./logos/Python.png", "./logos/Ruby.png","./logos/SAML.png","./logos/Terraform.png"]
    return (
        <div id="skillsSection">
            <div id="skillsTitle"></div>
            <ul>
                {sourceSkills.map((source)=>
                <div className="logoscontainer">
                    <img className="logos" alt={"logo"+source} src={source}></img>
                    <div className="logoname" >{source.substring(source.lastIndexOf('/')+1).split('.').slice(0, -1).join('.')}</div>
                </div>)}
            </ul>
        </div>
    )
}

export default Skills;