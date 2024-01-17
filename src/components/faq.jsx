import React, { useState } from 'react';
import faqData from './faq.json';
import './faq.css';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-section" id='faq'>
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="question-wrapper" onClick={() => handleQuestionClick(index)}>
            <h3>{item.question}</h3>
            <span className={`icon ${expandedIndex === index ? 'minus' : 'plus'}`}>&#x25B6;</span>
          </div>
          {expandedIndex === index && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;