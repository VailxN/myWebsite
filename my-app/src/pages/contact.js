import React, { Component } from 'react';
import InfoBox from '../components/InfoBox'

export default class Contact extends Component {
  render() {
    return (
      <div className='Contact'>        
        <InfoBox iconName='question circle' title='test' content='testing'/>
      </div>
    );
  }
}

// export { projects };
