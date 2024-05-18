import './advantagesCard.css'

function AdvantagesCard ({ img, title, paragraph }) {
  return (
    <div className='advantages'>
      <div>
        <img src={img} />
        <h3>{title}</h3>
      </div>
      <p>{paragraph}</p>
    </div>
    )
}

export default AdvantagesCard