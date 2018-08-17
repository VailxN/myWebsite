import React from 'react'
import { Icon, Header } from 'semantic-ui-react'

import './InfoBox.css'

const InfoIcon = (props) => <Icon className='InfoIcon' disabled name={props.iconName} />

const InfoTitle = (props) => <Header className='InfoTitle' size='medium'>{props.title}</Header>

const InfoContent = (props) => <p className='InfoContent' >{props.content}</p>

const InfoBox = (props) => (
  <div className='InfoBox'>
    <InfoIcon iconName={props.iconName} />
    <InfoTitle title={props.title} />
    <InfoContent content={props.content} />
  </div>
)

export default InfoBox

// https://www.google.com.hk/imgres?imgurl=http%3A%2F%2Fteslathemes.com%2Fdoc%2Fresume%2Fimg%2Ftheme%2Fcontact-form-page.jpeg&imgrefurl=http%3A%2F%2Fteslathemes.com%2Fdoc%2Fresume%2F&docid=E9Sm40XxuxVK0M&tbnid=MMH_8cjhLX4rrM%3A&vet=12ahUKEwi18PuRy_PcAhWIMd4KHdarAu44yAEQMygGMAZ6BAgBEAc..i&w=1840&h=980&bih=1074&biw=2048&q=contact%20me%20page&ved=2ahUKEwi18PuRy_PcAhWIMd4KHdarAu44yAEQMygGMAZ6BAgBEAc&iact=mrc&uact=8