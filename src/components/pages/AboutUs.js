import React from 'react';
import '../../App.css';
import './AboutUs.css'

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Some Name 1',
      title: 'Founder & CEO',
      bio: 'John is an experienced entrepreneur who founded our company in 2010. He oversees the overall strategy and direction of the company.',
      photo: '/images/patrick.png',
    },
    {
      name: 'Some name 2',
      title: 'Software Engineer 1',
      bio: 'Jane leads our technology team and is responsible for our product development and innovation. She has over 15 years of experience in software engineering.',
      photo: '/images/krabs.jpg',

    },
    {
      name: 'Some name 3',
      title: 'Software Engineer 2',
      bio: 'Bob is in charge of our sales and marketing efforts. He has over 20 years of experience in sales and has helped many companies grow their revenue.',
      photo: '/images/plankton.png',

    },
  ];

  const teamMemberGroups = teamMembers.reduce((acc, curr, i) => {
    if (i % 2 === 0) {
      acc.push([curr]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, []);

return (
  <>
    <h2 className="meet-text">Meet the Team</h2>
    <div className="meet-the-team" >
      {teamMemberGroups.map((group, index) => (
        <div className="team-members" key={index}>
          {group.map((member, i) => (
            <div className="member" key={i}>
              <img src={member.photo} alt={member.name} className="photo" />
              <div className='box-support'>
                <h3 className="name">{member.name}</h3>
                <p className="title">{member.title}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </>
);
};

export default AboutUs;
