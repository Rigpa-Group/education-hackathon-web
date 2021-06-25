import React from 'react';
import './Banner.scss';
import {Container} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export default function Banner() {
  return (
    <Container>
      <div className='containerImage'>
        <div className='banner'>
          <img src={require('../../../assets/images/bannerImage.png').default} alt="Banner image"
               className="imageBanner"
          />
        </div>
        <div className="textInspiration">
          <Typography className="explore">
            Explore,
          </Typography>
          <Typography className="teach">
            Teach,
          </Typography>
          <Typography className='skills'>
            Lear Skills
          </Typography>
        </div>
      </div>
    </Container>
  );
}