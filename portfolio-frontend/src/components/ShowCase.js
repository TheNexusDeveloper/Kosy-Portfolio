import React, { useState, useEffect } from 'react'
import './ShowCase.css'
import { Button, Container } from 'react-bootstrap'

function ShowCase() {

    const [currentIndex, setCurrentIndex] = useState(0); // Index of the current text
    const [currentText, setCurrentText] = useState(""); // Current displayed text
    const [isDeleting, setIsDeleting] = useState(false); // State to control typewriter effect
    const typingSpeed = 100; // Typing speed (in ms)
    const deletingSpeed = 50; // Deleting speed (in ms)
    const pauseBetweenTexts = 1500; // Pause before switching to the next text
  
    useEffect(() => { 
  
      const textArray = [
          "Network Engineer",
          "Software Developer",
          "UI/UX Designer",
        ];
        
      const handleTyping = () => {
        const fullText = textArray[currentIndex];
  
        if (isDeleting) {
          // Remove characters one by one
          setCurrentText((prev) => prev.substring(0, prev.length - 1));
        } else {
          // Add characters one by one
          setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        }
  
        // Switch to deleting once full text is typed
        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseBetweenTexts);
        }
  
        // Move to the next text once fully deleted
        if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textArray.length);
        }
      };
  
      const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
  
      return () => clearInterval(typingInterval); // Cleanup interval
    }, [currentText, isDeleting, currentIndex]);
  

  return (
    <div className='showcase pt-3' style={{display: 'flex', alignItems: 'center'}}>
         <Container>
                    <div className="showcase-text">
                        <h2>Hey there 🫡</h2>
                        <h1>I'm Kosy</h1> 
                        <h1>{currentText}| </h1>
                        <p>
                        I'm a Network Engineer, Software Developer, and UI/UX Designer with expertise in ISP Core networking, scalable web apps, and user-centered designs. 
                        My ultimate goal is to create innovative solutions with technology to aid advancements and create an enabling environment for everyone to succeed. 
                        Explore my work and see how I turn ideas into solutions!
                        </p>

                        <a href="mailto:thenexusdeveloper@gmail.com?subject=I'd like to start a project" target="_blank" rel="noreferrer"><Button variant='outline-info' className='rounded-5' size='lg'>Contact Me</Button></a>
                        {/* <a href='https://drive.google.com/file/d/10NlFGzS0GGt8poSJiNkozkYLgXDZiRRP/view?usp=sharing' target='_blank' rel='noreferrer'><Button variant='outline-info' className='rounded-5 mx-3' size='lg'>Get my Resume</Button></a> */}
                    </div>
        </Container>
    </div>
  )
}

export default ShowCase