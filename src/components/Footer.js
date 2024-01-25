import '../css/Footer.css'

function Footer(){
    const logosources2=[{
        pic:"linkedinblacklogo.png",
        source:"https://www.linkedin.com/in/dorisvmorales/"
    },{
        pic:"medium3.png",
        source:"https://medium.com/@moralesdoris880"
    }]
    return(
        <div id="FooterSection">
            <div id="socials">
                {
                logosources2.map((logosource)=><a href={logosource.source} target="_blank" rel="noopener noreferrer"><img className="footerlogos" src={logosource.pic} alt={logosource.pic}></img></a>)
                }
            </div>
            <p id="copyrighttitle">@2024 Doris Morales</p>
        </div>
    )
}

export default Footer;