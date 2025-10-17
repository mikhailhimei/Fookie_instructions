import React from 'react'
import { useState, useEffect } from 'react';
import { AccordionElements } from './AccordionSection';

export default function Accordion() {
  const [openSections, setOpenSections] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("./public/data.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  
  const toggleSection = (id) => {
    setOpenSections((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <>
    <div className="space-y-4 max-w-3xl mx-auto">
      {data.map((section) => (
        <AccordionElements
          key={section.id}
          title={section.title}
          content={section.content}
          src={section.src}
          isOpen={openSections.includes(section.id)}
          onClick={() => toggleSection(section.id)}
        />
      ))}
    </div>
    </>
  );
}
