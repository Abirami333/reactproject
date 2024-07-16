
/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'


const FaqItem = ({question, answer}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };


  return(
    <div className={'faq-item ${show ? "active" : ""}'}>
      <div className="faq-item-header" onClick={toggleShow}>
        {question}
      </div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
         {answer}
        </div>
     </div>
  </div>
);
};

const FaqAccordion = ({data}) => {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
     {data.map((item)=>(
      <FaqItem key={item.id} question={item.question}
      answer={item.answer} />
      ))}
    </div>
  );
};


const data = [
  { id: 1, question: "What is React?", answer: "React is front-end Javascript library for UI components." },

  { id: 2, question: "What are the benefits of React?", answer: "React beneffits are following: it is fast, scalable, modular, easy to debug, and supports serverrside rendering." },
    
  { id: 3, question: "what is the main concept of React?", answer: "Main concepts of react are following: components,props, state, hooks, lifecycle methods, JSX." },
    
  ];
function App() {

  return (
    <>
      <div className="App">
       <FaqAccordion  data={data} />
      </div>
    </>
  );
};

export default App
