import React from 'react';
import Accordion from './Accordion';

const App = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#ff1a75', marginBottom: '20px' }}>My Awesome Accordion</h1>
      <Accordion
        title="Accordion 1"
        content="This is the content for the first accordion. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Accordion
        title="Accordion 2"
        content="This is the content for the second accordion. Nulla facilisi. Sed lacinia erat at ex elementum tristique."
      />
      <Accordion
        title="Accordion 3"
        content="This is the content for the third accordion. Quisque auctor sit amet nisl in volutpat."
      />
    </div>
  );
};

export default App;
