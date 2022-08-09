import javascript from './javascript.png'
import react from './react.png'
import linkedin from './linkedin.png'
import github from './github.png'


export default function About() {

    function handleGitHubClick() {
        
    }





    return (
        <div className='aboutPageContainer'>
            <div className='aboutPage' >
                <h1>  About </h1>
                <p className= 'paragraph'>Explore is a website to help the user to find events around the US
                    The user can search for especific event, save their favorites and have
                    offer link to buy a ticket. </p>

                <h4> Created with </h4>
                <p className= 'createdIcons'>
                    <img src={javascript} alt='' />
                    <img src={react} alt='' />
                </p>
                <h4> For more information </h4>
                <p className= 'infoIcons' >
                    <img src={github} alt='' />
                    <img src={linkedin} alt='' />
                </p>
            </div>
        </div>
    )
}
