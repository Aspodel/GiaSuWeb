import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faFacebookSquare, faTwitterSquare, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {
    render() { 
        return ( 
            <div id="footer">
                <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
                <a href="#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                <a href="#"><FontAwesomeIcon icon={faDiscord} /></a>
                <a href="#"><FontAwesomeIcon icon={faPhone} /></a>
            </div>
         );
    }
}
 
export default Footer;