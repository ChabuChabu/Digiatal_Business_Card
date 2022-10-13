import profile from '../assets/profile.jpeg'
import {faTwitterSquare,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

function Info() {
  return (
    <div>
        <div className="profile--picture">
            <img src={profile} alt="" />
        </div>
       <div className="profile--details">
           <h1 className='profile--name'>Chabu Chabu</h1>
           <h2 className='profle--job--role'>Frontend Developer</h2>
           <h2 className='profile--website'>chabuchabu website</h2>
           <div className="profile--buttons">
                <a href="mailto: chabuchabu32@gmail.com" target="_blank" >
                   <button className='email--button '>Email</button>
                </a>
                <a href="https://www.linkedin.com/in/chabu-chabu-7bb7a453/ "target="_blank" >
                   <button className='linkedin--button '>LinkedIn</button>
                </a>
           </div>

       </div>
    </div>
  )
}

export default Info