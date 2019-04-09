import React, { Component } from 'react'
import { Section, Title } from '../utils'

export default class Map extends Component {
  render() {
    return (
        <Section>
        <Title title="Find Us"/>
        <div class="location_container">
        <div class="location_address">
          Grey Street<br/>
          Newcastle Upon Tyne<br/>
          NE1 6BR<br/>
          Tel: (0191) 111 2222<br/>
          Email: drunken.sundaes@enterprise.com
        </div>
        <div class="location_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2290.0579241436176!2d-1.6141962841302557!3d54.97208335939848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e70b61ee1822f%3A0xc0369a09dcc899bb!2sGrey+St%2C+Newcastle+upon+Tyne!5e0!3m2!1sen!2suk!4v1554752637293!5m2!1sen!2suk" width="100%" height="auto" frameborder="0" allowfullscreen></iframe>
        </div>
        </div>
      </Section>
    )
  }
}
