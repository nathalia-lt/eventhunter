import javascript from './javascript.png'
import react from './react.png'
import linkedin from './linkedin.png'
import github from './github.png'


export default function About() {

    

    function handleGitHubClick() {
        window.open('https://github.com/nathalia-lt/lafiesta')
    }

    function handleLinkedinClick() {
        window.open('https://www.linkedin.com/in/nathaliatroina/')
    }

    return (
        <div className='aboutPageContainer'>
            <div className='aboutPage' >
                <div className='aboutInformation'>

                <h1 className= 'aboutTitle'>  About </h1>
                <p className= 'paragraph'>Explore is a website to help users find events around the United States.
                    You can search for a specific event, save favorites, and get links to buy tickets.
                    </p>
                <h4> Created by Nathalia Troina</h4>
                <h4> Made With: </h4>
                <div className= 'icons js'>
                    <img src={javascript} alt='' />
                    <img src={react} alt='' />
                </div>
                <h4> For More Information: </h4>
                <div className= 'icons' >
                    <img  onClick={handleGitHubClick} src={github} alt='' />
                    <img onClick={handleLinkedinClick} src={linkedin} alt='' />
                </div>
            </div>
                </div>
        </div>
    )
}
