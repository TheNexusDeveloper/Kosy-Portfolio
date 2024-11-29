import React, { useState, useEffect } from "react";

const TypewriterEffect = () => {
 
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
        "Technologist",
        "Innovator",
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
  }, [currentText, isDeleting, currentIndex, textArray]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My Portfolio</h1>
      <p style={{ fontSize: "2rem", color: "#0078D7" }}>
        {currentText}
        <span style={{ borderRight: "2px solid #0078D7", marginLeft: "2px" }}></span>
      </p>
    </div>
  );
};

export default TypewriterEffect;
