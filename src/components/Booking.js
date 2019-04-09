import React, { Component } from 'react'
import { Section, Title } from '../utils'

export default class Booking extends Component {
  render() {
    return (
        <Section>
        <Title title="Make A Booking"/>
        <form action="https://formspree.io/c.heslop88@googlemail.com" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name"/>
            <label htmlFor="_replyto">Contact Number:</label>
            <input type="tel" name="_contact"/>
            <label htmlFor="_guests">Number of Guests:</label>
            <input type="number" name="_guests"/>
            <label htmlFor="_date">Date:</label>
            <input type="date" name="_date"/>
            <input type="submit" value="Send"/>
        </form>
      </Section>
    )
  }
}
