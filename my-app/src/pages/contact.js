import React, { Component } from 'react';

import InfoBox from '../components/InfoBox'
import './contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className='Contact'> 
        <div className='InfoBoxes'>
          <InfoBox iconName='mail' title='E-mail' content='normanlys16@gmail.com'/>
          <InfoBox iconName='mail' title='E-mail' content='normanlys16@gmail.com'/>
          <InfoBox iconName='mail' title='E-mail' content='normanlys16@gmail.com'/>
        </div>       
      </div>
    );
  }
}

// export { projects };
