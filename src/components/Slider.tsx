"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const images = [
  { src: "/imgs/111.jpeg", name: "Neha Gupta", role: "Marketing Manager" },
  { src: "/imgs/777.jpeg", name: "Rahul Sharma", role: "Sr Tech" },
  { src: "/imgs/999.jpeg", name: "Tarun Singh", role: "Jr Tech" },
  { src: "/imgs/222.jpeg", name: "Kirti Malhotra", role: "Sr Marketing Manager" },
  { src: "/imgs/888.jpeg", name: "Parth S", role: "Marketing Manager" },
  { src: "/imgs/444.jpeg", name: "Priya Gupta", role: "Marketing Executive" },
  { src: "/imgs/666.jpeg", name: "Nitika Agarwal", role: "Sr Legal Advisor" },
  { src: "/imgs/555.jpeg", name: "Arjun Mehta", role: "Head of Tech" },
];

const Slider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    setIsPressed(true);
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  };

  const onMouseMove = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
    setIsPressed(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("mouseleave", stopDragging);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("mouseleave", stopDragging);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
          setIsPressed(false);
        }}
        onMouseDown={onMouseDown}
        className="flex gap-2 pl-32 pr-10 mt-16 overflow-x-auto cursor-none select-none hide-scrollbar"
      >
        {images.map((item, idx) => (
          <div key={idx} className="shrink-0 flex flex-col">
            <Image
              src={item.src}
              alt={item.name}
              width={1920}
              height={1080}
              className="h-[350px] md:h-[450px] w-[300px] md:w-[400px] object-cover"
              draggable={false}
            />
            <div className="mt-2 px-1">
              <p className="text-sm font-semibold text-black">{item.name}</p>
              <p className="text-xs text-gray-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom cursor */}
      {isHover && (
        <Image
          src={isPressed ? "/grab.svg" : "/hand.svg"}
          alt="custom cursor"
          width={40}
          height={40}
          style={{
            position: "fixed",
            left: cursorPos.x,
            top: cursorPos.y,
            width: 40,
            height: 40,
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        />
      )}
    </div>
  );
};

export default Slider;
