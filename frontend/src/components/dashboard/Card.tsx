import React from 'react';

interface CardProps {
  title: string;
  value?: string;
  subtitles?: string[];
  logoUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, value, subtitles, logoUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">

      <div className="flex flex-col">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          {title}
          {value && <span className="ml-2 text-2xl font-bold">{value}</span>}
        </h2>
        {subtitles && (
          <div className="space-y-2">
            {subtitles.map((subtitle, index) => (
              <p key={index} className="text-gray-600">{subtitle}</p>
            ))}
          </div>
        )}
      </div>


      <div className="flex justify-center items-center w-20 h-20 bg-gray-200 rounded-full">
        <span className="text-gray-600">Gráfico</span>
      </div>

      <div className="w-12 h-12 bg-gray-300 rounded-lg">
        {logoUrl && (
          <img src={logoUrl} alt="Logo" className="w-full h-full object-contain p-2" />
        )}
      </div>
    </div>
  );
};

export default Card;
