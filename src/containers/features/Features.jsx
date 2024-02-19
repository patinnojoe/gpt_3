import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';
function Features() {
  const featureData = [
    {
      title: 'Improving and distrusts instantly',
      text: ' The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.',
    },
    {
      title: 'Become the tended active',
      text: ' The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.',
    },
    {
      title: 'Message or am nothing',
      text: ' The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.',
    },
    {
      title: 'Really boy law county',
      text: ' The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.',
    },
  ];

  return (
    <div className="section__padding gpt3__features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Acess to get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featureData.map((items, index) => {
          return <Feature title={items.title} text={items.text} key={items.title + index} />;
        })}
      </div>
    </div>
  );
}

export default Features;
