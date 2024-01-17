import React from 'react'
import w1 from '/Images/Work1.png'
import w2 from '/Images/Work2.png'
import w3 from '/Images/Work3.png'
import w4 from '/Images/Work4.png'
import w5 from '/Images/Work5.png'
import w6 from '/Images/Work6.png'
import '../components/Workshop.css'

export default function Workshop() {
  return (
    <div className='work_body'>
      <div>
      <h2>What we offer in our workshop?</h2>
      </div>
      <div className='box'>
        <div className='box1'>
        <div className='smallbox'>
            <img src={w1} alt="" />
        </div>
        <div className='boxtext'>
          <p>Custom Robot Design and Fabrication</p>
        </div>
        </div>
        <div className='box2'>
        <div className='smallbox'>
            <img src={w2} alt="" />
        </div>
        <div className='boxtext'>
          <p>Participation Certificates</p>
        </div>
        </div>
        <div className='box3'>
        <div className='smallbox'>
            <img src={w3} alt="" />
        </div>
        <div className='boxtext'>
          <p>Q&A /Doubt Sessions</p>
        </div>
        </div>
        <div className='box4'>
        <div className='smallbox'>
            <img src={w4} alt="" />
        </div>
        <div className='boxtext'>
          <p>Live Zoom Meetings</p>
        </div>
        </div>
        <div className='box5'>
        <div className='smallbox'>
            <img src={w5} alt="" />
        </div>
        <div className='boxtext'>
          <p>Research and Development</p>
        </div>
        </div>
        <div className='box6'>
        <div className='smallbox'>
            <img src={w6} alt="" />
        </div>
        <div className='boxtext'>
          <p>Consultation and Expert Advice</p>
        </div>
        </div>
      </div>
    </div>
  )
}
