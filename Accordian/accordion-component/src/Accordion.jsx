import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Accordion.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation for accordion smooth open/close.
  const styles = useSpring({
    opacity: isOpen ? 1 : 0,
    maxHeight: isOpen ? '300px' : '0px', // Smooth height transition with limit
    overflow: 'hidden', // Ensure content is hidden when closed
    config: { tension: 200, friction: 20 } // Controls the smoothness of animation
  });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <animated.div style={styles} className="accordion-content">
        <p>{content}</p>
      </animated.div>
    </div>
  );
};

export default Accordion;
