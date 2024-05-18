import AdventagesCard from './card/AdvantagesCard'

function Advantages() {
  return (
    <>
      <div className='advantages-card'>
        <AdventagesCard img='/public/images/advantages-company/Icon.png' title='Expertise' paragraph="Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions." />
        <AdventagesCard img='/public/images/advantages-company/Icon-1.png' title='Client-Centric Approach' paragraph="We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success." />
        <AdventagesCard img='/public/images/advantages-company/Icon-2.png' title='Results-Driven Solutions' paragraph="Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage." />
        <AdventagesCard img='/public/images/advantages-company/Icon-3.png' title='Collaborative Partnership' paragraph="We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive." />
      </div>
    </>
  )
}

export default Advantages
