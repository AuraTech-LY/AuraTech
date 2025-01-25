import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Modern E-commerce Platform',
    description: 'A fully responsive e-commerce platform with advanced filtering, search, and cart functionality.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Real Estate Showcase',
    description: 'Interactive property listing platform with virtual tours and detailed property information.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1280',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Health & Wellness App',
    description: 'Comprehensive fitness tracking application with workout plans and nutrition guidance.',
    image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1280',
    tech: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Creative Agency Portfolio',
    description: 'Dynamic portfolio website showcasing creative work with smooth animations and transitions.',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&q=80&w=1280',
    tech: ['Vue.js', 'GSAP', 'Tailwind CSS', 'Sanity.io'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Educational Platform',
    description: 'Interactive learning platform with video courses, quizzes, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1280',
    tech: ['React', 'GraphQL', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export function Projects() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Projects</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore our portfolio of successful projects that showcase our expertise in web design and development.
        </p>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full py-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="w-full max-w-3xl">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#9F73C1]/20 text-[#9F73C1] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="btn-primary flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn-primary flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}