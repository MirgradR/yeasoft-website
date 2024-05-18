import QuestionsCard from './card/QuestionsCard'

function Questions() {
  return (
    <>
      <div className='questions-card'>
        <div className='questions-card__wrapper-1'>
          <QuestionsCard title='What services does SquareUp provide?' paragraph="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."> 01 </QuestionsCard>
          <QuestionsCard title='How can SquareUp help my business?' paragraph="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."> 02 </QuestionsCard>
          <QuestionsCard title='What industries does SquareUp work with?' paragraph="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."> 03 </QuestionsCard>
          <QuestionsCard title='How long does it take to complete a project with SquareUp?' paragraph="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."> 04 </QuestionsCard>
        </div>
        <div className='questions-card__wrapper-2'>
          <QuestionsCard title='Do you offer ongoing support and maintenance after the project is completed?' paragraph="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."> 05 </QuestionsCard>
          <QuestionsCard title='Can you work with existing design or development frameworks?' paragraph="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."> 06 </QuestionsCard>
          <QuestionsCard title='How involved will I be in the project development process?' paragraph="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."> 07 </QuestionsCard>
          <QuestionsCard title='Can you help with website or app maintenance and updates?' paragraph="SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."> 08 </QuestionsCard>
        </div>
      </div>
    </>
  )
}

export default Questions
