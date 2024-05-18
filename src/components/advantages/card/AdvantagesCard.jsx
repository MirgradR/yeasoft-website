import './advantagesCard.css'

function AdvantagesCard ({ img, title, paragraph }) {
  return (
    <div className='advantages'>
      <img src={img} />
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
    )
}

export default AdvantagesCard