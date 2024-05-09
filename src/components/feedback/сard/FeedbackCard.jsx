import './feedbackCard.css'
import Button from '../../button/Button'

function FeedbackCard({ img, title, paragraph, name, profession }) {
  return (
    <div className='clients__feedback'>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <div className='clients__card'>
        <img className='clients__photo' src={img} />
        <div>
          <p className='clients__name'>{name}</p>
          <p className='clients__profession'>{profession}</p>
        </div>
        <Button className='button button-grey'>Open Website</Button>
      </div>
    </div>
  )
}

export default FeedbackCard
