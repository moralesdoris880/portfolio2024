

function Skills(){
    const sourceSkills = [ "./logos/javascript2.png", "./logos/typescript.svg", "./logos/html.webp", "./logos/css3.svg", "./logos/reactlogo.png", "./logos/rtl.png", "./logos/jest.png", "./logos/tailwind.png", "./logos/figma3.png", "./logos/Postgresql.jpeg"]
    return (
        <div id="skillsSection">
            <div id="skillsTitle"></div>
            <ul>
                {sourceSkills.map((source)=><img className="logos" alt={"logo"+source} src={source}/>)}
            </ul>
        </div>
    )
}

export default Skills;