import ProfessionСard from './сard/ProfessionСard'

function Profession() {
  return (
    <>
      <div className='profession-card'>
        <ProfessionСard img='/public/images/Icon-design.png' title='Design' paragraph="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences." />
        <ProfessionСard img='/public/images/Icon-engineering.png' title='Engineering' paragraph="Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs." />
        <ProfessionСard img='/public/images/Icon-Project-Management.png' title='Project Management' paragraph="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process." />
      </div>
    </>
  )
}

export default Profession
