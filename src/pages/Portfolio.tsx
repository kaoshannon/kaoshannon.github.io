import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard, { Project } from '../components/ProjectCard';
import frame1 from '../assets/images/frame-1.webp';
import frame2 from '../assets/images/frame-2.png';
import frame3 from '../assets/images/frame-3.png';
import frameCircular from '../assets/images/frame-circular.png';
import frameSquare1 from '../assets/images/frame-square-1.png';
import frameSquare2 from '../assets/images/frame-square-2.png';
import frameSquare3 from '../assets/images/frame-square-3.png';

import tntp from '../assets/portfolio/thenewthirdplace/walk.png';
import guy from '../assets/portfolio/theguyapp/logo.svg';

const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'the New Third Place',
    year: '2024',
    description: 'A silly social experiment to reimagine third places. Read about our two-day quest to connect strangers in Vancouver.',
    type: 'other',
    skills: ['Social Experiment', 'Community Building', 'Design Thinking'],
    link: 'https://thenewthirdplace.github.io/',
    images: [
      tntp
    ]
  },
  {
    id: '2',
    name: 'Dear Hiring Manager...',
    year: '2023',
    description: 'What if you never have to customized another cover letter? DHM is your new one-stop shop for job applications. Let us pitch you to the hiring manager, so you can focus on doing what they\'re going to hire you for.',
    type: 'software',
    skills: ['Web Development', 'UI/UX Design', 'Product Management'],
    link: 'https://devpost.com/software/dear-hiring-manager',
    images: [
      frameSquare1,
      frameSquare2,
      frameSquare3
    ]
  },
  {
    id: '3',
    name: 'UBC BizTech',
    year: '2023',
    description: 'Member and event registration web application for UBC BizTech.',
    type: 'software',
    skills: ['Web Development', 'User Registration', 'Event Management'],
    link: 'https://app.ubcbiztech.com/signup',
    images: [
      frameCircular,
      frameSquare1
    ]
  },
  {
    id: '4',
    name: 'EY UniVRsity',
    year: '2022',
    description: 'Virtual reality employee training and professional development platform. Top Project of UBC BizTech and EY\'s product hackathon 2022.',
    type: 'software',
    skills: ['VR Development', 'Product Management', 'UI/UX Design'],
    link: 'https://devpost.com/software/ey-univrsity',
    images: [
      frame2,
      frame3
    ]
  },
  {
    id: '5',
    name: 'CryptoTune',
    year: '2022',
    description: 'Data sonification with Covalent\'s Ethereum API. Won Sponsor Prize in nwHacks 2022 (hosted by nwPlus, sponsored by Covalent).',
    type: 'software',
    skills: ['Data Sonification', 'Ethereum API', 'Audio Processing', 'Data Analysis'],
    link: 'https://www.youtube.com/embed/i8MvnZ33rTY',
    images: [
      frameSquare1,
      frameSquare2
    ]
  },
  {
    id: '6',
    name: 'Understanding and Designing for Video-based Serious Leisure',
    year: '2022',
    description: 'A case study of musical instrument through video-based mediums. Co-authored with Dongwook Yoon, Mint Tanprasert, and Yixin Wang under supervision by Dongwook Yoon',
    type: 'other',
    skills: ['Human-Computer Interface', 'Research Design', 'Qualitative Thematic Analysis', 'Academic Writing'],
    images: [
      frameCircular,
      frameSquare3
    ]
  },
  {
    id: '7',
    name: 'BYO',
    year: '2022',
    description: 'Cafe rewards platform to incentivize bring-your-own cup culture in Greater Vancouver.',
    type: 'design',
    skills: ['UI/UX Design', 'User Testing', 'Mobile Design', 'Incentive Systems Design'],
    images: [
      frameSquare1,
      frameSquare2,
      frameSquare3
    ]
  },
  {
    id: '8',
    name: 'CanadaToGo/VanBCToGo',
    year: '2022',
    description: 'Helping local restaurants operate during COVID-19 lockdowns with live capacity tracking.',
    type: 'software',
    skills: ['Frontend Development', 'Google Maps API', 'Web Development'],
    images: [
      frame2,
      frame3
    ]
  },
  {
    id: '9',
    name: 'Aqualogix',
    year: '2024 - 2025',
    description: 'Aqualogix transforms the problem of GPU cooling in data centers into an opportunity for carbon-free water heating in buildings. Our modular system captures waste heat from high-performance computing and redirects it to domestic hot water loops, reducing cooling costs for compute providers and heating costs for commercial properties.',
    type: 'other',
    skills: [],
    link: 'aqualogix.ca',
    images: [
      frame2,
      frame3
    ]
  },
  {
    id: '10',
    name: 'The Guy App',
    year: '2025',
    description: 'Ever heard the phrase, \'I know a guy\'? The Guy App connects you to trustworthy referrals - like mechanics, tutors, or anyone else you might need in a pinch - all through your personal network. Now you can find \'your guy\' with confidence.',
    type: 'software',
    skills: [],
    link: 'https://devpost.com/software/guy-app',
    images: [
      guy
    ]
  }
];

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Get unique types and skills for filters
  const types = useMemo(() => {
    const uniqueTypes = [...new Set(sampleProjects.map(project => project.type))];
    return ['all', ...uniqueTypes];
  }, []);

  const skills = useMemo(() => {
    const allSkills = sampleProjects.flatMap(project => project.skills);
    const uniqueSkills = [...new Set(allSkills)];
    return uniqueSkills.sort();
  }, []);

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    // Helper to extract a sortable value from the year string
    function getSortValue(year: string): { ongoing: boolean; endYear: number } {
      // Normalize and check for ongoing projects
      const lower = year.toLowerCase();
      const ongoing = lower.includes('present') || lower.includes('ongoing');
      // Try to extract the latest year (rightmost 4-digit number)
      const yearMatch = year.match(/(\d{4})(?!.*\d{4})/);
      const endYear = yearMatch ? parseInt(yearMatch[1], 10) : 0;
      return { ongoing, endYear };
    }

    // Filter first
    const filtered = sampleProjects.filter(project => {
      const typeMatch = selectedType === 'all' || project.type === selectedType;
      const skillMatch =
        selectedSkills.length === 0 ||
        selectedSkills.some(skill => project.skills.includes(skill));
      return typeMatch && skillMatch;
    });

    // Sort: ongoing first, then by end year descending
    return filtered.sort((a, b) => {
      const aSort = getSortValue(a.year);
      const bSort = getSortValue(b.year);

      if (aSort.ongoing && !bSort.ongoing) return -1;
      if (!aSort.ongoing && bSort.ongoing) return 1;
      // Both ongoing or both not ongoing: sort by endYear descending
      return bSort.endYear - aSort.endYear;
    });
  }, [selectedType, selectedSkills]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back</span>
            </button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio</h1>
          <p className="text-gray-600">Building and breaking stuff – mostly in code, sometimes other stuff as well</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Type Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Skill Filter */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Skills
              </label>
              <div className="max-h-32 overflow-y-auto border border-gray-300 rounded-md p-2 bg-white">
                {skills.map(skill => (
                  <label key={skill} className="flex items-center space-x-2 py-1 hover:bg-gray-50 rounded px-1">
                    <input
                      type="checkbox"
                      checked={selectedSkills.includes(skill)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedSkills([...selectedSkills, skill]);
                        } else {
                          setSelectedSkills(selectedSkills.filter(s => s !== skill));
                        }
                      }}
                      className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedType !== 'all' || selectedSkills.length > 0) && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">Active filters:</span>
              {selectedType !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {selectedType}
                  <button
                    onClick={() => setSelectedType('all')}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedSkills.map(skill => (
                <span key={skill} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  {skill}
                  <button
                    onClick={() => setSelectedSkills(selectedSkills.filter(s => s !== skill))}
                    className="ml-1 text-purple-600 hover:text-purple-800"
                  >
                    ×
                  </button>
                </span>
              ))}
              <button
                onClick={() => {
                  setSelectedType('all');
                  setSelectedSkills([]);
                }}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Try adjusting your filters to see more projects.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Showing {filteredProjects.length} of {sampleProjects.length} projects
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 