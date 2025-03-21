import { FiCalendar, FiChevronRight } from 'react-icons/fi';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
}

export const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{education.degree}</h3>
          <p className="text-secondary-600 dark:text-secondary-400 font-medium">{education.institution}</p>
        </div>
        <div className="bg-transparent dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium py-1.5 px-4 rounded-lg flex items-center whitespace-nowrap">
          <FiCalendar className="mr-2 h-4 w-4" />
          <span>{education.period}</span>
        </div>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{education.description}</p>
      
      {education.achievements && education.achievements.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Logros académicos:</h4>
          <ul className="space-y-2">
            {education.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <FiChevronRight className="h-4 w-4 text-secondary-500 dark:text-secondary-400 mt-1 flex-shrink-0" />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}; 
