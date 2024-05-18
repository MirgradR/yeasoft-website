import './sectionTitle.css'

function SectionTitle({ title, paragraph }) {
  return (
      <div className='section-wrapper'>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
  )
}

export default SectionTitle
