import '../css/AboutMe.css'

function AboutMe(){
    return(
        <div id="AboutMeSection">
            <div id="AboutMeTitle"></div>
            <div id="AboutMeContent">
                <div id="tape">
                    <div id="DorisPic"></div>
                </div>
                <div id ="AboutMeSubContent">
                    <div id="FlipFront">
                    <div id="AboutMeTextBox">
                        <p>
                        👋 Hi there! I'm Doris Morales, an aspiring Frontend Engineer based in NYC with over a year of experience in the tech industry. 
                        🚀 I bring a unique blend of creativity and technical proficiency to every project, passionately crafting seamless digital experiences.
                        </p>
                    </div>
                    <button id="ArrowDownward" onClick={()=>{window.scrollTo({ top: 1700, behavior: "smooth" })}}></button>
                    </div>
                    {/* <div id="FlipBack">
                    For later updates
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutMe;