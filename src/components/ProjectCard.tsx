import React, { useState } from 'react';

export interface Project {
  id: string;
  name: string;
  year: string;
  description: string;
  type: 'software' | 'design' | 'other';
  skills: string[];
  link?: string;
  images?: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === project.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images!.length - 1 : prev - 1
      );
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'software':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'design':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="relative h-48 bg-gray-100">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-all"
              >
                ›
              </button>

              {/* Image indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                      ? 'bg-white'
                      : 'bg-white bg-opacity-50'
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500">{project.year}</p>
          </div>
          <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getTypeColor(project.type)}`}>
            {project.type}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-emerald-700 hover:text-emerald-900 font-medium transition-colors"
          >
            {project.link.includes('youtube.com') ? 'Watch Video →' : 'View Project →'}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 