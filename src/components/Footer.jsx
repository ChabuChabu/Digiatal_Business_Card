import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitterSquare,faFacebookSquare,faInstagramSquare,faSquareGithub} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="content--footer">
        
            <a href="https://twitter.com/" target="_blank">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a href="https://github.com/ChabuChabu" target="_blank">
               <FontAwesomeIcon icon={faSquareGithub} />
            </a>
    </div>
  )
}

export default Footer

