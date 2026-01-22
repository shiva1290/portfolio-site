import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const mouseRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth <= 768) {
      setIsVisible(false);
      document.body.style.cursor = 'auto';
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let animationId;

    const animate = () => {
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.15;

      cursor.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px) translate(-50%, -50%)`;
      follower.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Track hoverable elements
    const handleElementHover = (e) => {
      const target = e.target;
      const isHoverTarget = target.matches('a, button, [role="button"], input, textarea, .card, .social-btn, .skill-tag, .btn');
      setIsHovering(isHoverTarget);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div 
        ref={cursorRef} 
        className={`cursor ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''} ${isVisible ? 'visible' : ''}`} 
      />
      <div 
        ref={followerRef} 
        className={`cursor-follower ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''} ${isVisible ? 'visible' : ''}`} 
      />
    </>
  );
};

export default CustomCursor;
