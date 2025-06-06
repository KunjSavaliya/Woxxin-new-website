'use client';
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkInteractiveElement = (el) => {
      // If any ancestor is clickable
      while (el) {
        const tag = el.tagName;
        const isClickable =
          tag === 'A' ||
          tag === 'BUTTON' ||
          el.onclick != null ||
          el.getAttribute('role') === 'button' ||
          el.getAttribute('role') === 'link' ||
          el.classList.contains('cursor-pointer');

        if (isClickable) return true;
        el = el.parentElement;
      }
      return false;
    };

    const handleMouseMove = (e) => {
      moveCursor(e);
      const shouldHideCursor = checkInteractiveElement(e.target);
      setIsHidden(shouldHideCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-opacity duration-150 ${
        isHidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
      }}
    >
      <div className="w-8 h-8 rounded-full shadow-lg bg-blue-400/30 backdrop-blur-md"></div>
    </div>
  );
};

export default CustomCursor;
