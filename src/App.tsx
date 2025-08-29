import  { useState } from 'react';
import { FileText } from 'lucide-react';
import { ResumeData } from './types';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { generatePDF } from './utils/pdf';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: []
  });

  const handleDataChange = (data: ResumeData) => {
    setResumeData(data);
  };

  const handleDownload = async () => {
    await generatePDF('resume-preview');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
            </div>
            <button
              onClick={handleDownload}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="no-print">
            <ResumeForm data={resumeData} onChange={handleDataChange} />
          </div>
          <div>
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
 