import React from 'react'
import Navbar from '../../component/navbar'
import Button from '../../component/button'
import '../../styles/home.css'
import LastSection from '../../component/main'
import { FaCheck } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";

function Home() {
  return (
    <div>
      <Navbar />
      <div className='heropage'>
        <h2 className='h2'>We Are Creative & Smart</h2>
        <hr />
        <div className='hometext'>
          <p>We are set of creatives that bring ideas to life by designing and writing efficient <br />lines of codes. Our services are of high standard and we give the best.</p>
          <div className='button'>
            <Button
              text={'Buy Product'} myBg={'transparent'} textcolor={'white'} myborder={'2px solid white'} mypadding={'8px 20px'} mymargin={'15px 0 0'}
            />
            <Button
              text={'Contact Us'} myBg={'Seagreen'} textcolor={'white'} myborder={'2px solid seagreen'} mypadding={'8px 20px'} mymargin={'15px 0 0'}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className='h3'><span style={{ color: 'seagreen' }}>OUR</span> SERVICE</h3>
        <hr />
        <p className='h3paragrph'>We offer the best services with a flexible payment plan which ranges from <br /> web design, UI/UX design and alot more.</p>
      </div>
      <div className='lastsection'>
        <div>
          <div><FaCheck /></div>
          <LastSection
            myHeader={'Web Design'}
            myService={'Proficiency in HTML, CSS and \n JavaScript for rapid prototyping \n Excellent visual  design skills'}
          />
        </div>
        <div>
          <FaRegPenToSquare />
          <LastSection
            myHeader={'Web Development'}
            myService={'Writing well designed, testable, efficient code by\n using best software development practices and \n Creating website layout/user  interfaces'}
          />
        </div>
        <div>
          <FaLocationArrow />
          <LastSection
            myHeader={'Smart Coding'}
            myService={'Writing a well detailed, efficient and readable \n line of code We provide the best services as \n our delivery is fast and durable with no error'}
          />
        </div>
        <div>
          <IoCodeSlash />
          <LastSection
            myHeader={'UI/UX Design'}
      
            myService={'Developing and conceptualizing a \n comprehensive UI/UX design \n  strategy for the brand.'}
          />
        </div>
      </div>
    </div>
  )
}

export default Home