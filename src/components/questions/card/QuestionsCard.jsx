import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './questionsCard.css'

function QuestionsCard({ children, title, paragraph }) {

  const [rotate, setRotate] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);
  }

  return (
    <div className='question' onClick={handleClick}>
      <div className='question__number'>
        <p>{children}</p>
      </div>
      <div className='question__block'>
        <h1 className='question__block-question'>{title}</h1>

        <CSSTransition in={rotate} timeout={300} classNames='alert' unmountOnExit>
          <p className='question__block-answer'>{paragraph}</p>
        </CSSTransition>
      </div>
      <div className='question__close-wrapper'>
        <div className={`question__close ${rotate ? "rotate" : ""}`} />
      </div>
    </div>
  )
}

export default QuestionsCard
