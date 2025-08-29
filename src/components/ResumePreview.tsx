import  { Mail, Phone, MapPin } from 'lucide-react';
import { ResumeData } from '../types';

interface Props {
  data: ResumeData;
}

export default function ResumePreview({ data }: Props) {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < level ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div id="resume-preview" className="resume-preview bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
        <h1 className="text-3xl font-bold mb-2">{data.personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          {data.personalInfo.email && (
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              {data.personalInfo.email}
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              {data.personalInfo.phone}
            </div>
          )}
          {data.personalInfo.address && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              {data.personalInfo.address}
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        {data.personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.personalInfo.summary}</p>
          </div>
        )}

        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-200 pb-1">
              Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map(exp => (
                <div key={exp.id} className="border-l-4 border-blue-200 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-800">{exp.title}</h3>
                    <span className="text-sm text-gray-600">
                      {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                    </span>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                  {exp.description && (
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-200 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map(edu => (
                <div key={edu.id} className="border-l-4 border-blue-200 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                    </div>
                    <span className="text-sm text-gray-600">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.skills.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-200 pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.skills.map(skill => (
                <div key={skill.id} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <div className="flex">{renderStars(skill.level)}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
 