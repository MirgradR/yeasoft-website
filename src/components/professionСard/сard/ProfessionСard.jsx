import './professionСard.css'

function ProfessionСard({ img, title, paragraph }) {
  return (
    <div className='card'>
      <img src={img} />
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <button className='button profession-card__button'>Learn more</button>
    </div>
    )
}

export default ProfessionСard
