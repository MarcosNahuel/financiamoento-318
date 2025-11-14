import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl shadow-lg h-full flex flex-col">
      <h2 className="text-lg font-semibold text-slate-200 p-4 border-b border-slate-700">
        {title}
      </h2>
      <div className="p-4 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Card;
