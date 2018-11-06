import React, { Component } from 'react';
import MainNav from '../components/MainNav';
import DetailContainer from './DetailContainer';

class MainContainer extends Component {
    render() {
      return (
        <div>
          <MainNav />
          <DetailContainer />
        </div>
      )
    }
}

export default MainContainer;