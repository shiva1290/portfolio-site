import { useState, useEffect } from 'react';
import './CodeAnimation.css';

const CodeAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 768) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const codeLines = [
    { num: 1, content: '<span class="tag">&lt;!DOCTYPE html&gt;</span>' },
    { num: 2, content: '<span class="tag">&lt;html&gt;</span>' },
    { num: 3, content: '<span class="tag">&lt;head&gt;&lt;title&gt;</span><span class="content">Shiva Gupta</span><span class="tag">&lt;/title&gt;</span>' },
    { num: 4, content: '<span class="tag">&lt;link rel="stylesheet" href="styles.css"&gt;</span>' },
    { num: 5, content: '<span class="tag">&lt;/head&gt;</span>' },
    { num: 6, content: '<span class="tag">&lt;body&gt;</span>' },
    { num: 7, content: '<span class="tag">&lt;h1&gt;</span><span class="content">Full-Stack Developer</span><span class="tag">&lt;/h1&gt;</span>' },
    { num: 8, content: '<span class="tag">&lt;p&gt;</span><span class="content">React | Node.js | MongoDB | 500+ DSA</span><span class="tag">&lt;/p&gt;</span>' },
    { num: 9, content: '<span class="tag">&lt;/body&gt;</span>' },
    { num: 10, content: '<span class="tag">&lt;/html&gt;</span>' }
  ];

  return (
    <div 
      className={`code-card ${isHovered ? 'hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.05 : 1}, ${isHovered ? 1.05 : 1}, 1)`
      }}
    >
      <div className="code-header">
        <div className="code-circles">
          <div className="code-circle circle-red"></div>
          <div className="code-circle circle-yellow"></div>
          <div className="code-circle circle-green"></div>
        </div>
        <div className="code-title">index.html</div>
        <div className="code-circles" style={{ visibility: 'hidden' }}></div>
      </div>
      <div className="code-text">
        {codeLines.map((line, index) => (
          <div 
            key={line.num} 
            className={`code-line line${line.num}`}
            style={{ animationDelay: `${index * 1.5}s` }}
          >
            <span className="line-number">{line.num}</span>
            <span dangerouslySetInnerHTML={{ __html: line.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeAnimation;
