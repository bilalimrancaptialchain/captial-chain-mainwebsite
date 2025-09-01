import React from "react";

interface ContentSection {
  id: number;
  title: string;
  description: string;
}

interface ContentSectionsProps {
  sections: ContentSection[];
}

const ContentSections: React.FC<ContentSectionsProps> = ({ sections }) => {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.id} className="space-y-4">
          <h3 className="text-3xl font-semibold text-white font-display">
            {section.title}
          </h3>
          <p className="text-white/80 font-display leading-relaxed">
            {section.description}
          </p>
          <div className="w-full h-px bg-active mt-8"></div>
        </div>
      ))}
    </div>
  );
};

export default ContentSections;
