/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Logo = {
  Wide: (props: React.HTMLAttributes<HTMLImageElement>) => <img
    src="https://bidops-public.s3.amazonaws.com/assets/logos/bidops_logo_white@2x.png"
    {...props}
    style={{ ...props.style, width: '150px' }}
  />,
  Narrow: (props: React.HTMLAttributes<HTMLImageElement>) => 
    <div style={{ maxWidth: '36px', overflow: 'hidden', margin: '2rem 0' }}>
      <img
        src="https://bidops-public.s3.amazonaws.com/assets/logos/bidops_logo_white@2x.png"
        {...props}
        style={{ ...props.style, width: '160px' }}
      />
      <br/>
    </div>
};


export default Logo;
