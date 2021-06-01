import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';

const Amazon = () => {
    return (
        <Card
        key={Sdata[5].id}
        imgsrc={Sdata[5].imgsrc}
        title={Sdata[5].title}
        sname={Sdata[5].sname}
        links={Sdata[5].links}
      />
    );
}
export default Amazon;