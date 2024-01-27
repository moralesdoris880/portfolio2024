import '../css/AboutMe.css';
import { forwardRef } from 'react';

const AboutMe = forwardRef(function MyInput(props, ref){
    return(
        <div id="AboutMeSection" ref={ref}>
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
                    <button className="ArrowDownward" onClick={()=>{window.scrollTo({ top: 1700, behavior: "smooth" })}}></button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default AboutMe;