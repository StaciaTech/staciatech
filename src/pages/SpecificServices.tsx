import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Users, Award } from 'lucide-react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

// Service data (should ideally be shared, but for now, copy from Services.tsx)
const services = [
  {
    icon: 'Palette',
    title: 'Design Services',
    description: 'Creating visually appealing, user-centric designs that align with your brand identity and business objectives',
    features: [
      'UI/UX Design & Prototyping',
      'Brand Identity Design',
      'Marketing Material Design',
      'Digital Graphics Creation',
      'Wireframing and Prototyping',
    ],
    gradient: 'from-violet-600 to-purple-600',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'design',
  },
  {
    icon: 'Code',
    title: 'Development Services',
    description: 'Comprehensive solutions to create dynamic, high-performing applications and websites',
    features: [
      'Web Development (Frontend & Backend)',
      'Mobile App Development (iOS & Android)',
      'Custom Software Development',
      'API Development & Integration',
      'Cross-Platform App Development',
    ],
    gradient: 'from-indigo-600 to-violet-600',
    image:
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'development',
  },
  {
    icon: 'Cloud',
    title: 'DevOps and Infrastructure Management',
    description: 'Streamline development lifecycle and ensure smooth, reliable operation of your applications',
    features: [
      'Infrastructure as Code (IaC)',
      'Continuous Integration and Deployment (CI/CD)',
      'Containerization',
      'Microservices Architecture',
      'Performance Optimization',
    ],
    gradient: 'from-purple-600 to-indigo-600',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'devops',
  },
  {
    icon: 'Database',
    title: 'Data and Analytics Services',
    description: 'Transform raw data into actionable insights that drive strategic business decisions',
    features: [
      'Database Management',
      'Business Intelligence (BI)',
      'Data Visualization',
      'Big Data Solutions',
      'Machine Learning & AI',
    ],
    gradient: 'from-violet-600 to-purple-600',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'data-analytics',
  },
  {
    icon: 'Shield',
    title: 'Cloud Infrastructure Management',
    description: 'Designing, deploying, and managing cloud environments that are optimized for high availability, security, and performance',
    features: [
      'Cloud Strategy & Consultation',
      'Cloud-Native Applications',
      'Cloud Infrastructure Setup',
      'Security & Compliance',
      'Monitoring & Optimization',
    ],
    gradient: 'from-indigo-600 to-violet-600',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'cloud',
  },
  {
    icon: 'TestTube',
    title: 'Quality Assurance (QA) and Testing Services',
    description: 'Comprehensive testing methodologies ensuring flawless user experiences',
    features: [
      'Automated Testing',
      'Performance Testing',
      'Security Testing',
      'User Acceptance Testing',
      'Compatibility Testing',
    ],
    gradient: 'from-purple-600 to-indigo-600',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'qa-testing',
  },
  {
    icon: 'Settings',
    title: 'Maintenance and Support Services',
    description: 'Ongoing support ensuring peak performance and reliability of your applications',
    features: [
      'Bug Fixes and Updates',
      '24/7 Monitoring',
      'Performance Optimization',
      'Security Hardening',
      'Technical Support',
    ],
    gradient: 'from-violet-600 to-purple-600',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'maintenance',
  },
  {
    icon: 'MessageSquare',
    title: 'Consulting Services',
    description: 'Strategic guidance for digital transformation and technology optimization',
    features: [
      'Digital Strategy',
      'Technology Assessment',
      'Process Optimization',
      'Change Management',
      'IT Consulting',
    ],
    gradient: 'from-indigo-600 to-violet-600',
    image:
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'consulting',
  },
];

// Icon mapping for dynamic rendering
import { Palette, Code, Cloud, Database, Shield, TestTube, Settings, MessageSquare } from 'lucide-react';
const iconMap: Record<string, React.ElementType> = {
  Palette,
  Code,
  Cloud,
  Database,
  Shield,
  TestTube,
  Settings,
  MessageSquare,
};

const whyChooseUs = [
  {
    icon: <Star className="w-8 h-8 text-violet-600 mb-2" />,
    title: "Proven Expertise",
    description: "Decades of experience delivering digital solutions for global brands and startups alike."
  },
  {
    icon: <Users className="w-8 h-8 text-violet-600 mb-2" />,
    title: "Client-Centric Approach",
    description: "We tailor every solution to your unique business needs and goals."
  },
  {
    icon: <Award className="w-8 h-8 text-violet-600 mb-2" />,
    title: "Award-Winning Team",
    description: "Our team is recognized for innovation, quality, and results."
  }
];

const sampleCaseStudies = [
  {
    title: "Global Tech Corp Digital Transformation",
    summary: "300% increase in efficiency, $2.5M annual savings for a Fortune 500 client.",
    link: "/resources/case-studies"
  },
  {
    title: "Healthcare Analytics Platform",
    summary: "60% faster patient processing, 95% data accuracy improvement.",
    link: "/resources/case-studies"
  }
];

const testimonials = [
  {
    quote: "Stacia Tech transformed our business with their innovative solutions. Their team is truly world-class.",
    author: "CTO, Global Tech Corp"
  },
  {
    quote: "The results exceeded our expectations. We saw immediate improvements in efficiency and customer satisfaction.",
    author: "Director, Healthcare Network"
  }
];

// Add detailed key features data with explanations and images for each service
const keyFeaturesDetails: Record<string, Array<{ title: string; description: string; image: string }>> = {
  design: [
    {
      title: 'UI/UX Design & Prototyping',
      description: 'We craft intuitive, visually appealing interfaces to enhance user satisfaction and retention. Our prototyping process enables rapid validation, ensuring seamless user journeys. By focusing on user-centered design, we create experiences that are both functional and engaging, tailored to your brand and audience needs, driving better interaction and loyalty.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Brand Identity Design',
      description: 'We develop cohesive brand identities with logos, color schemes, and visual systems that reflect your unique value. Our designs build trust and recognition, ensuring consistency across all touchpoints. From startups to established businesses, we create memorable identities that resonate with your audience and strengthen market presence.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Marketing Material Design',
      description: 'We design impactful marketing assets for digital and print channels, capturing attention and driving conversions. From banners to brochures, our creations align with your brand and goals, ensuring consistency and engagement. Our strategic approach maximizes reach and effectiveness, helping you connect with your audience and achieve measurable results.',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Digital Graphics Creation',
      description: 'Our custom graphics and illustrations elevate your brand’s storytelling and visual impact. Tailored to your identity, our designs enhance engagement across websites, apps, and campaigns. We combine creativity and strategy to produce unique visuals that communicate your message effectively, leaving a lasting impression on your audience.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Wireframing and Prototyping',
      description: 'We create wireframes and prototypes to visualize ideas and test usability early, minimizing risks. Our iterative process ensures user-friendly designs before development begins. By validating concepts quickly, we deliver solutions that align with your vision, enhance user experience, and streamline the development process for optimal results.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
  ],
  development: [
    {
      title: 'Web Development (Frontend & Backend)',
      description: 'We create fast, secure, and scalable web applications with modern frameworks, focusing on performance, user experience, and adaptability. From custom software to complex integrations, we deliver innovative digital solutions that drive growth, enhance competitiveness, and provide lasting value.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Mobile App Development (iOS & Android)',
      description: 'We create high-performance mobile apps for iOS and Android, offering native and cross-platform solutions. Our focus on user engagement ensures seamless experiences across devices. By leveraging cutting-edge technologies, we deliver apps that meet your business objectives, drive user satisfaction, and maintain scalability for future growth.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Custom Software Development',
      description: 'We design bespoke software to address unique business challenges, ensuring flexibility and scalability. Our solutions integrate seamlessly with existing systems, supporting your growth. By focusing on your specific needs, we deliver tailored applications that enhance efficiency, streamline operations, and provide a competitive edge in your industry.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'API Development & Integration',
      description: 'We develop secure, scalable APIs to connect your systems and enable new functionalities. Our integration services ensure seamless communication with third-party platforms, enhancing efficiency. By prioritizing reliability and performance, we unlock new capabilities for your business, supporting innovation and streamlined operations across your digital ecosystem.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Cross-Platform App Development',
      description: 'We build apps that deliver consistent, high-quality experiences across web, iOS, and Android. Using efficient cross-platform frameworks, we maximize reach while minimizing development time. Our solutions ensure performance and user engagement, helping you connect with a broader audience while maintaining brand consistency and functionality.',
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
    },
  ],
  devops: [
    {
      title: 'Infrastructure as Code (IaC)',
      description: 'We automate infrastructure provisioning with IaC for consistent, scalable cloud and on-prem environments. Our approach ensures repeatability, reduces errors, and accelerates deployment. By streamlining setup and management, we enable your business to scale efficiently while maintaining reliability and control over your infrastructure resources.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Continuous Integration and Deployment (CI/CD)',
      description: 'Our CI/CD pipelines automate building, testing, and deployment, speeding up delivery and reducing errors. We ensure reliable, high-quality releases with minimal downtime. By streamlining development cycles, we help you bring features to market faster, maintaining a competitive edge with consistent, efficient software updates.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Containerization',
      description: 'We leverage Docker and Kubernetes for containerization, ensuring portability and scalability. Our solutions optimize resource use and simplify deployment across environments. By packaging applications with their dependencies, we enhance consistency, streamline operations, and enable rapid scaling to meet your business demands effectively.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Microservices Architecture',
      description: 'We design modular microservices for agility, resilience, and scalability in complex systems. Our approach enables independent development and deployment, reducing risks. By breaking down applications into manageable services, we enhance flexibility, streamline updates, and ensure your systems adapt to evolving business needs efficiently.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Performance Optimization',
      description: 'We monitor and tune infrastructure and applications for optimal speed, reliability, and cost efficiency. Our proactive approach identifies bottlenecks and enhances performance. By leveraging analytics and best practices, we ensure your systems run smoothly, delivering consistent user experiences while minimizing operational costs and downtime.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
  ],
  'data-analytics': [
    {
      title: 'Database Management',
      description: 'We design and manage secure, scalable databases to ensure data integrity and performance. Our solutions support your business growth with efficient data handling. By optimizing storage and access, we enable fast, reliable data operations, empowering your organization with robust data infrastructure for critical applications.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Business Intelligence (BI)',
      description: 'We transform data into actionable insights with real-time analytics and interactive dashboards. Our BI solutions empower smarter decision-making, revealing trends and opportunities. By aligning data with your business goals, we drive efficiency, improve strategic planning, and enhance your competitive advantage in the market.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Data Visualization',
      description: 'We create custom visualizations to clearly communicate complex data, highlighting trends and insights. Our designs make information accessible and actionable for stakeholders. By tailoring visuals to your needs, we enhance decision-making, ensuring your data tells a compelling story that drives business growth and strategy.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Big Data Solutions',
      description: 'We harness big data technologies to process and analyze massive datasets, unlocking valuable insights. Our scalable solutions drive innovation and efficiency at scale. By leveraging advanced tools, we help you extract actionable intelligence, enabling data-driven strategies that give your business a competitive edge in your industry.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Machine Learning & AI',
      description: 'We implement AI and machine learning for predictive analytics and automation, driving innovation. Our solutions deliver actionable insights and streamline processes. By integrating intelligent technologies, we enhance decision-making and efficiency, helping your business stay ahead with cutting-edge, data-driven strategies tailored to your goals.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
  ],
  cloud: [
    {
      title: 'Cloud Strategy & Consultation',
      description: 'We craft tailored cloud strategies to boost agility, scalability, and cost savings. Our consultation aligns technology with your business goals for maximum ROI. By assessing your needs, we create a roadmap that optimizes cloud adoption, ensuring long-term success and flexibility in dynamic market environments.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Cloud-Native Applications',
      description: 'We build resilient, scalable cloud-native applications optimized for rapid innovation. Our solutions leverage cloud environments for flexibility and performance. By designing for the cloud, we ensure seamless deployment, high availability, and adaptability, empowering your business to innovate and grow in a competitive digital landscape.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'We provision secure, high-availability cloud infrastructure on AWS, Azure, and GCP. Our setups ensure scalability and reliability for your applications. By tailoring configurations to your needs, we deliver robust environments that support growth, performance, and security, enabling seamless operations for your business.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Security & Compliance',
      description: 'We implement robust cloud security controls to protect data and ensure compliance. Our solutions meet industry standards, safeguarding your applications and users. By prioritizing security, we minimize risks and build trust, enabling your business to operate confidently in regulated or sensitive environments.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Monitoring & Optimization',
      description: 'We continuously monitor and optimize cloud resources for performance and cost efficiency. Our analytics-driven approach ensures reliability and scalability. By identifying opportunities for improvement, we enhance system performance, reduce expenses, and maintain seamless operations, supporting your business goals with efficient cloud management.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
  ],
  qaTesting: [
    {
      title: 'Automated Testing',
      description: 'We implement automated testing frameworks to ensure reliable, bug-free releases. Our solutions increase test coverage and accelerate delivery, maintaining quality. By automating repetitive tasks, we reduce errors and free up resources, enabling faster, more consistent deployments that meet your business and user expectations.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Performance Testing',
      description: 'We simulate real-world scenarios to identify bottlenecks and ensure your application performs under pressure. Our testing optimizes speed and reliability. By addressing performance issues early, we deliver seamless user experiences, ensuring your application scales effectively and meets demands in high-traffic environments.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Security Testing',
      description: 'We detect vulnerabilities through rigorous security testing, ensuring your application meets top standards. Our approach safeguards data and users from threats. By identifying risks early, we help you deploy secure solutions, building trust and protecting your business in a digital-first world.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'User Acceptance Testing',
      description: 'We validate that your product meets business requirements and user expectations. Our user acceptance testing ensures seamless functionality and satisfaction. By aligning with your goals, we confirm your solution delivers value, enhancing user adoption and ensuring a high-quality experience before launch.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Compatibility Testing',
      description: 'We ensure your application performs flawlessly across browsers, devices, and platforms. Our compatibility testing maximizes reach and user satisfaction. By verifying consistent functionality, we help you deliver seamless experiences, ensuring your product is accessible and reliable for all users, regardless of their environment.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
  ],
  maintenance: [
    {
      title: 'Bug Fixes and Updates',
      description: 'We provide rapid bug fixes and updates to keep your applications secure and stable. Our proactive approach ensures minimal downtime and consistent performance. By addressing issues quickly, we maintain user trust and support your business operations, delivering reliable software that evolves with your needs.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: '24/7 Monitoring',
      description: 'Our 24/7 monitoring detects issues before they impact your business, ensuring uptime and reliability. With proactive alerts and rapid response, we minimize disruptions. Our comprehensive approach keeps your systems running smoothly, allowing you to focus on growth while we handle technical stability.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Performance Optimization',
      description: 'We continuously tune applications for speed and efficiency, adapting to your evolving needs. Our optimization enhances reliability and user satisfaction. By leveraging analytics, we identify improvements to reduce costs and boost performance, ensuring your systems remain competitive and effective in dynamic environments.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Security Hardening',
      description: 'We implement advanced security measures to protect your data and infrastructure from threats. Our hardening processes ensure robust defenses and compliance. By proactively addressing vulnerabilities, we safeguard your users and business, maintaining trust and operational integrity in a secure digital landscape.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Technical Support',
      description: 'Our expert technical support is available 24/7 to resolve issues and answer questions. We provide fast, reliable assistance to keep your systems running smoothly. By offering dedicated support, we ensure minimal disruptions, empowering your business with confidence and operational continuity at all times.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
  ],
  consulting: [
    {
      title: 'Digital Strategy',
      description: 'We develop digital strategies that align technology with your business goals for maximum ROI. Our tailored plans drive innovation and efficiency, ensuring competitiveness. By understanding your vision, we create actionable roadmaps that optimize investments and position your organization for long-term success in a digital world.',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Technology Assessment',
      description: 'We evaluate your technology stack to identify modernization and innovation opportunities. Our assessments uncover inefficiencies and recommend strategic improvements. By aligning tech with your goals, we ensure scalability and competitiveness, helping your business leverage cutting-edge solutions for sustained growth and success.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Process Optimization',
      description: 'We streamline workflows to boost productivity and reduce costs, eliminating inefficiencies. Our tailored solutions enhance operational performance and scalability. By analyzing your processes, we implement strategies that drive measurable results, ensuring your business operates at peak efficiency in a competitive market environment.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Change Management',
      description: 'We guide your organization through change with proven frameworks, minimizing disruption. Our strategies ensure smooth transitions and maximize adoption. By aligning stakeholders and processes, we help you implement technology or process changes effectively, driving success and maintaining business continuity during transformation.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'IT Consulting',
      description: 'We provide expert IT consulting on technology selection, implementation, and scaling. Our advice aligns with your long-term vision, ensuring sustainable growth. By offering strategic insights, we help you navigate complex IT decisions, optimizing infrastructure and processes to drive innovation and business success.',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
  ],
};
// Add relevant descriptions for each service
const serviceDescriptions: Record<string, { title: string; description: string }> = {
  design: {
    title: 'Design Services: Crafting Visual Excellence',
    description: 'Our design team delivers visually stunning, user-centric interfaces that elevate your brand and captivate your audience. Specializing in UI/UX design, brand identity, and digital graphics, we create seamless, intuitive experiences that drive engagement and loyalty. From wireframing to prototyping, we ensure every touchpoint is both aesthetically pleasing and highly functional. Our collaborative approach aligns designs with your business goals, ensuring consistency across platforms. By combining creativity with strategic insight, we craft visuals that resonate with your target audience, enhance user satisfaction, and strengthen your market presence. Let us transform your ideas into compelling designs that leave a lasting impression and deliver measurable results for your business.',
  },
  development: {
    title: 'What Makes Our Development Services Stand Out',
    description: 'Our expert development team builds robust, scalable, and high-performing web and mobile applications tailored to your unique business needs. Leveraging cutting-edge technologies and best practices, we deliver secure, maintainable, and future-proof solutions. From dynamic frontends to reliable backends and seamless API integrations, we ensure exceptional user experiences and operational efficiency. Our agile methodology enables rapid delivery, continuous improvement, and adaptability to your evolving goals. Whether it’s custom software, cross-platform apps, or complex system integrations, we prioritize performance, security, and scalability. Partner with us to transform your vision into reality with innovative digital products that drive growth, enhance competitiveness, and deliver lasting value to your business and users.',
  },
  devops: {
    title: 'DevOps & Infrastructure: Reliable, Automated, Scalable',
    description: 'Our DevOps services streamline your development lifecycle and operations with modern, automated solutions. We implement CI/CD pipelines, infrastructure as code (IaC), and containerization using tools like Docker and Kubernetes to ensure rapid, reliable, and secure application delivery. Our approach enhances scalability, reduces errors, and accelerates time-to-market. By optimizing infrastructure across cloud and on-prem environments, we ensure high availability and performance. Our team provides continuous monitoring and optimization, enabling your systems to adapt to changing demands. With a focus on automation and best practices, we empower your business to achieve operational excellence, minimize downtime, and scale efficiently while maintaining security and cost-effectiveness, allowing you to focus on innovation and growth.',
  },
  'data-analytics': {
    title: 'Unlock Insights with Data & Analytics',
    description: 'Our data and analytics services transform raw data into actionable insights to drive your business forward. We leverage advanced business intelligence (BI) tools, data visualization, and machine learning to uncover trends, optimize operations, and inform strategic decisions. From designing scalable databases to creating interactive dashboards, we ensure your data is accessible and impactful. Our solutions empower you to identify opportunities, enhance efficiency, and gain a competitive edge. Whether it’s big data processing or predictive analytics, we tailor our approach to your specific needs, delivering measurable results. With a focus on accuracy and clarity, we help you harness the power of data to fuel innovation, improve decision-making, and achieve sustainable business growth.',
  },
  cloud: {
    title: 'Why Choose Our Cloud Infrastructure Management',
    description: 'Our cloud experts design, deploy, and manage secure, high-availability cloud environments on platforms like AWS, Azure, and GCP. We create tailored strategies to migrate, modernize, and scale your infrastructure, ensuring performance, compliance, and cost-efficiency. Our services include cloud-native application development, robust security controls, and 24/7 monitoring to minimize risks and maximize reliability. We optimize resources to reduce costs while supporting your business’s growth and innovation. By aligning cloud solutions with your goals, we enable seamless operations and agility in a dynamic digital landscape. Trust us to handle the complexities of cloud management, so you can focus on driving value and achieving long-term success with a future-ready infrastructure.',
  },
  'qa-testing': {
    title: 'Quality Assurance & Testing: Flawless Experiences',
    description: 'Our QA team ensures your applications are reliable, secure, and user-friendly through comprehensive testing methodologies. We implement automated, performance, and security testing to deliver flawless digital experiences that meet your business requirements. From identifying vulnerabilities to validating cross-platform compatibility, we ensure your products perform under real-world conditions. Our rigorous processes minimize bugs, enhance usability, and boost user satisfaction. By simulating diverse scenarios, we optimize application performance and scalability, ensuring seamless operation across devices and environments. Partner with us to achieve high-quality releases that build trust and drive engagement, delivering consistent value to your users and maintaining your competitive edge in the market with dependable, high-performing solutions.',
  },
  maintenance: {
    title: 'Maintenance & Support: Always On, Always Secure',
    description: 'Our maintenance and support services keep your applications running at peak performance with minimal downtime. We provide rapid bug fixes, regular updates, and 24/7 monitoring to ensure reliability and security. Our proactive approach identifies and resolves issues before they impact your business, maintaining user trust and operational continuity. From performance optimization to security hardening, we adapt to your evolving needs, ensuring scalability and efficiency. Our expert technical support is available around the clock to address challenges and provide guidance. With a focus on stability and innovation, we help you deliver seamless experiences, safeguard your systems, and focus on growth while we handle the technical complexities of ongoing maintenance.',
  },
  consulting: {
    title: 'Consulting Services: Strategic Digital Guidance',
    description: 'Our consulting services provide strategic guidance to navigate digital transformation and achieve sustainable growth. We assess your technology landscape, identify inefficiencies, and deliver actionable roadmaps tailored to your business goals. From digital strategy to process optimization and change management, we ensure your investments drive maximum ROI. Our experts offer insights on technology selection, implementation, and scaling, aligning solutions with your long-term vision. By streamlining workflows and fostering innovation, we empower your organization to stay competitive in a rapidly evolving market. Partner with us to transform challenges into opportunities, leveraging our expertise to enhance efficiency, reduce costs, and position your business for success with a clear, future-ready strategy.',
  },
};

// Add process workflows for each service
const processWorkflows: Record<string, Array<{ title: string; description: string }>> = {
  design: [
    { title: 'Discovery', description: 'We understand your brand, goals, and audience to set a strong design foundation.' },
    { title: 'Moodboarding', description: 'We explore visual directions and inspirations to align on style and tone.' },
    { title: 'UI/UX Design', description: 'We create wireframes, prototypes, and high-fidelity designs for seamless user experiences.' },
    { title: 'Handoff', description: 'We deliver design assets and guidelines for smooth development implementation.' },
  ],
  development: [
    { title: 'Requirements & Planning', description: 'We gather requirements and define the technical roadmap.' },
    { title: 'Architecture', description: 'We design scalable, secure, and maintainable system architecture.' },
    { title: 'Implementation', description: 'Our developers build, integrate, and test your solution.' },
    { title: 'QA & Launch', description: 'We rigorously test and deploy your application for a flawless launch.' },
  ],
  devops: [
    { title: 'Assessment', description: 'We evaluate your current infrastructure and DevOps maturity.' },
    { title: 'Automation', description: 'We implement CI/CD pipelines and automate infrastructure provisioning.' },
    { title: 'Monitoring', description: 'We set up monitoring, logging, and alerting for proactive management.' },
    { title: 'Optimization', description: 'We continuously optimize for performance, reliability, and cost.' },
  ],
  'data-analytics': [
    { title: 'Data Audit', description: 'We assess your data sources, quality, and business needs.' },
    { title: 'Modeling & Integration', description: 'We design data models and integrate disparate sources.' },
    { title: 'Analysis & Visualization', description: 'We build dashboards and reports for actionable insights.' },
    { title: 'Advanced Analytics', description: 'We implement machine learning and predictive analytics.' },
  ],
  cloud: [
    { title: 'Cloud Strategy', description: 'We define a tailored cloud adoption and migration plan.' },
    { title: 'Migration', description: 'We move your workloads to the cloud with minimal disruption.' },
    { title: 'Optimization', description: 'We tune your cloud environment for cost, security, and performance.' },
    { title: 'Ongoing Management', description: 'We provide 24/7 monitoring, support, and continuous improvement.' },
  ],
  'qa-testing': [
    { title: 'Test Planning', description: 'We define test strategies and acceptance criteria.' },
    { title: 'Test Case Development', description: 'We create automated and manual test cases.' },
    { title: 'Execution', description: 'We run tests, log defects, and ensure quality at every stage.' },
    { title: 'Reporting', description: 'We deliver detailed reports and recommendations for improvement.' },
  ],
  maintenance: [
    { title: 'Onboarding', description: 'We review your systems and set up monitoring.' },
    { title: 'Proactive Maintenance', description: 'We apply updates, patches, and performance optimizations.' },
    { title: 'Issue Resolution', description: 'We quickly address bugs and incidents as they arise.' },
    { title: 'Continuous Support', description: 'We provide ongoing technical support and reporting.' },
  ],
  consulting: [
    { title: 'Assessment', description: 'We analyze your business and technology landscape.' },
    { title: 'Strategy', description: 'We develop actionable digital transformation roadmaps.' },
    { title: 'Implementation Guidance', description: 'We support you through change management and execution.' },
    { title: 'Review & Optimization', description: 'We measure results and refine strategies for ongoing success.' },
  ],
};

// Add FAQs for each service
const faqData: Record<string, Array<{ question: string; answer: string }>> = {
  design: [
    { question: 'What design tools do you use?', answer: 'We use Figma, Adobe Creative Suite, and Sketch to create high-quality, user-centric designs, ensuring compatibility with industry standards and seamless collaboration.' },
    { question: 'Can you work with our brand guidelines?', answer: 'Yes, we align all designs with your brand identity, ensuring consistency across visuals, colors, and typography to strengthen your market presence.' },
    { question: 'Do you provide design handoff for developers?', answer: 'We deliver organized assets, style guides, and documentation, enabling developers to implement designs efficiently and accurately for seamless integration.' },
    { question: 'How do you ensure user-friendly designs?', answer: 'We conduct user research, usability testing, and iterative prototyping to create intuitive, engaging interfaces that enhance user satisfaction and retention.' },
    { question: 'Can you redesign existing products?', answer: 'Yes, we revamp outdated designs with modern aesthetics and improved usability, aligning with your brand and current user expectations.' },
    { question: 'Do you offer animation design?', answer: 'We create dynamic animations and micro-interactions to enhance user engagement, ensuring smooth, visually appealing experiences across digital platforms.' },
  ],
  development: [
    { question: 'What tech stacks do you support?', answer: 'We work with React, Angular, Node.js, Python, Java, and .NET, tailoring solutions to meet your project’s specific technical and business requirements.' },
    { question: 'How do you ensure code quality?', answer: 'We implement code reviews, automated testing, and CI/CD pipelines to deliver maintainable, high-quality code that meets industry standards and performs reliably.' },
    { question: 'Can you integrate with third-party APIs?', answer: 'Yes, we seamlessly integrate with various APIs and services, ensuring robust connectivity and enhanced functionality for your applications.' },
    { question: 'Do you build scalable applications?', answer: 'We design applications with scalability in mind, using modular architectures and cloud-ready solutions to support your business growth effectively.' },
    { question: 'How do you handle project timelines?', answer: 'We use agile methodologies, setting clear milestones and regular updates to ensure timely delivery while maintaining flexibility for evolving requirements.' },
    { question: 'Can you develop cross-platform apps?', answer: 'Yes, we create cross-platform apps for web, iOS, and Android, ensuring consistent performance and user experience across all devices.' },
  ],
  devops: [
    { question: 'Which cloud platforms do you support?', answer: 'We support AWS, Azure, Google Cloud, and hybrid/on-prem solutions, tailoring infrastructure to your scalability and performance needs.' },
    { question: 'Do you offer 24/7 monitoring?', answer: 'Yes, we provide 24/7 monitoring and alerting to ensure your infrastructure remains reliable, secure, and optimized at all times.' },
    { question: 'Can you automate our deployments?', answer: 'We specialize in CI/CD automation, enabling faster, safer, and more consistent releases with minimal manual intervention.' },
    { question: 'How do you manage infrastructure costs?', answer: 'We optimize resource allocation and use cost-effective tools to minimize expenses while maintaining high performance and scalability.' },
    { question: 'Do you support containerization?', answer: 'Yes, we use Docker and Kubernetes for containerized deployments, ensuring portability, scalability, and efficient resource management.' },
    { question: 'Can you handle disaster recovery?', answer: 'We implement robust disaster recovery plans, including backups and failover systems, to ensure business continuity during disruptions.' },
  ],
  'data-analytics': [
    { question: 'Can you work with our existing data sources?', answer: 'Yes, we integrate with databases, cloud storage, and third-party providers to leverage your existing data for actionable insights.' },
    { question: 'Do you provide custom dashboards?', answer: 'We build interactive, tailored dashboards that visualize your KPIs, enabling data-driven decisions and clear business insights.' },
    { question: 'Is my data secure?', answer: 'We adhere to strict security protocols and compliance standards, ensuring your data is protected and handled with utmost care.' },
    { question: 'Can you implement machine learning?', answer: 'Yes, we develop ML models for predictive analytics, automating processes and uncovering insights to drive business growth.' },
    { question: 'How do you handle large datasets?', answer: 'We use big data technologies to process and analyze massive datasets efficiently, delivering scalable and accurate analytics solutions.' },
    { question: 'Do you offer real-time analytics?', answer: 'Yes, we provide real-time analytics solutions, enabling instant insights for timely decision-making and operational efficiency.' },
  ],
  cloud: [
    { question: 'Can you migrate us to the cloud?', answer: 'We manage end-to-end cloud migrations, ensuring minimal downtime and seamless transition to platforms like AWS, Azure, or GCP.' },
    { question: 'How do you ensure cloud security?', answer: 'We implement identity management, encryption, and compliance best practices to secure your cloud environment and protect data.' },
    { question: 'Do you offer ongoing cloud management?', answer: 'We provide continuous monitoring, optimization, and support to ensure your cloud infrastructure remains efficient and reliable.' },
    { question: 'Can you optimize cloud costs?', answer: 'Yes, we analyze usage and implement cost-saving strategies to maximize efficiency without compromising performance or scalability.' },
    { question: 'Do you support hybrid cloud setups?', answer: 'We design and manage hybrid cloud solutions, integrating on-prem and cloud environments for flexibility and performance.' },
    { question: 'How do you handle cloud scalability?', answer: 'We architect scalable cloud solutions with auto-scaling and load balancing to meet your growing business demands seamlessly.' },
  ],
  'qa-testing': [
    { question: 'What types of testing do you offer?', answer: 'We provide automated, manual, performance, security, and compatibility testing to ensure high-quality, reliable applications.' },
    { question: 'How do you report test results?', answer: 'We deliver detailed reports with actionable insights, identifying issues and providing recommendations for optimal performance.' },
    { question: 'Can you test on multiple devices?', answer: 'Yes, we test across browsers, devices, and platforms to ensure consistent performance and broad compatibility.' },
    { question: 'Do you perform security testing?', answer: 'We conduct rigorous security testing to identify vulnerabilities, ensuring your applications meet high security standards.' },
    { question: 'How do you ensure testing efficiency?', answer: 'We combine automation and manual testing to maximize coverage, reduce errors, and accelerate the testing process.' },
    { question: 'Can you test user experience?', answer: 'Yes, we perform usability testing to ensure intuitive, user-friendly interfaces that enhance satisfaction and engagement.' },
  ],
  maintenance: [
    { question: 'What is included in your support?', answer: 'We offer bug fixes, updates, 24/7 monitoring, performance optimization, and dedicated technical support for reliable operations.' },
    { question: 'How quickly do you respond to issues?', answer: 'We provide rapid response SLAs and 24/7 support to address issues promptly, minimizing downtime and disruptions.' },
    { question: 'Can you maintain legacy systems?', answer: 'Yes, we support and modernize legacy systems, ensuring stability, security, and compatibility with current technologies.' },
    { question: 'Do you provide performance tuning?', answer: 'We continuously optimize applications for speed and efficiency, ensuring high performance as your needs evolve.' },
    { question: 'How do you handle security updates?', answer: 'We apply timely security patches and hardening measures to protect your systems from emerging threats.' },
    { question: 'Can you scale support services?', answer: 'Yes, we offer flexible support plans to scale with your business, ensuring consistent reliability and performance.' },
  ],
  consulting: [
    { question: 'What industries do you consult for?', answer: 'We serve technology, healthcare, finance, retail, and more, tailoring solutions to your industry-specific challenges.' },
    { question: 'Do you help with digital transformation?', answer: 'We provide end-to-end guidance, from strategy to execution, to drive successful digital transformation initiatives.' },
    { question: 'Can you assist with change management?', answer: 'Yes, we use proven frameworks to manage change, ensuring smooth transitions and high adoption rates.' },
    { question: 'Do you assess existing technology?', answer: 'We evaluate your tech stack to identify gaps and recommend solutions for modernization and efficiency.' },
    { question: 'Can you help with cost optimization?', answer: 'Yes, we analyze processes and technologies to streamline operations and reduce costs effectively.' },
    { question: 'Do you provide strategic roadmaps?', answer: 'We deliver actionable, tailored roadmaps to align technology with your long-term business goals.' },
  ],
};

const SpecificServices: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  // Find the service by link param
  const service = services.find((s) => s.link === title);

  const Icon = iconMap[service?.icon ?? ''];
  const detailedFeatures = keyFeaturesDetails[service?.link ?? ''] || service?.features.map((f) => ({ title: f, description: '', image: '' })) || [];

  // Carousel state for key features
  const [featureIdx, setFeatureIdx] = useState(0);
  const handlePrev = () => setFeatureIdx((prev) => (prev === 0 ? detailedFeatures.length - 1 : prev - 1));
  const handleNext = () => setFeatureIdx((prev) => (prev === detailedFeatures.length - 1 ? 0 : prev + 1));

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-4 text-red-600">Service Not Found</h2>
        <Button onClick={() => navigate(-1)} variant="outline">
          <ArrowLeft className="mr-2 w-4 h-4" /> Go Back
        </Button>
      </div>
    );
  }

  const currentDesc = serviceDescriptions[service.link] || {
    title: service.title,
    description: service.description
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />

      {/* Clean Hero Section (no gradient, no image) */}
      <section className="w-full flex flex-col items-center justify-center py-20  bg-white">
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-violet-50 mb-6 shadow-md">
            {Icon && <Icon className="w-10 h-10 text-violet-700" />}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-space">{service.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-2">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 stacia-container py-16">
        {/* Key Features Carousel */}
        <h2 className="text-2xl font-bold mb-6 text-violet-700">Key Features</h2>
        <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-3xl p-6 md:p-12 mb-12 shadow-lg relative">
          {/* Feature Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
            <img
              src={detailedFeatures[featureIdx]?.image}
              alt={detailedFeatures[featureIdx]?.title}
              className="rounded-2xl object-cover w-full max-w-md h-64 md:h-80 bg-white shadow-md"
              style={{ background: '#fff' }}
            />
          </div>
          {/* Feature Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-between h-64 md:h-80   px-0 md:px-12 relative">
            {/* Carousel Controls - top right */}
            <div className="absolute top-0 right-0 flex gap-2 z-10">
              <button
                onClick={handlePrev}
                className="w-10 h-10 flex items-center justify-center border border-violet-300 rounded-full hover:bg-violet-50 transition mt-2 mr-2"
                aria-label="Previous Feature"
              >
                <ChevronLeft className="w-5 h-5 text-violet-500" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 flex items-center justify-center border border-violet-300 rounded-full hover:bg-violet-50 transition mt-2"
                aria-label="Next Feature"
              >
                <ChevronRight className="w-5 h-5 text-violet-500" />
              </button>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-2">{detailedFeatures[featureIdx]?.title}</h3>
            <p className="text-lg text-gray-600 mb-6">{detailedFeatures[featureIdx]?.description}</p>

          </div>
        </div>
        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {detailedFeatures.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full border border-violet-400 ${featureIdx === idx ? 'bg-violet-600' : 'bg-white'}`}
            />
          ))}
        </div>
        {/* Dynamic Service Description Section */}
        <section className="w-full flex flex-col md:flex-row items-center justify-start  p-8 md:p-16 mb-16">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{currentDesc.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentDesc.description}
            </p>
          </div>
        </section>
        {/* Use Cases Section */}
        {/* <section className="w-full bg-white py-16 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-violet-700">Use Cases</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-lg font-semibold text-gray-900">Seamless System Integration</h3>
                <p className="text-gray-600">Integrate new solutions with your existing infrastructure for minimal disruption and maximum efficiency.</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-gray-900">Rapid Product Launch</h3>
                <p className="text-gray-600">Accelerate your go-to-market strategy with our agile development and deployment processes.</p>
              </li>
              <li>
                <h3 className="text-lg font-semibold text-gray-900">Data-Driven Decision Making</h3>
                <p className="text-gray-600">Leverage analytics and reporting to make informed business decisions and optimize performance.</p>
              </li>
            </ul>
          </div>
        </section> */}
        {/* Process/Workflow Section */}
        <section className="w-full bg-gray-50 py-16 mb-16 rounded-3xl shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-violet-700">Our Process</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {/* Vertical/Horizontal Progress Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-200 to-violet-400 z-0" style={{top: '56px'}} />
              <div className="block md:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 to-violet-400 z-0" />
              {(processWorkflows[service.link] || [
                { title: 'Discovery', description: 'We analyze your needs and define clear project goals.' },
                { title: 'Design', description: 'Our team creates wireframes, prototypes, and visual concepts.' },
                { title: 'Development', description: 'We build, test, and refine your solution using best practices.' },
                { title: 'Launch & Support', description: 'We deploy your solution and provide ongoing support and optimization.' },
              ]).map((step, idx) => (
                <div
                  key={idx}
                  tabIndex={0}
                  className={`group stacia-glass-card relative z-10 flex flex-col items-center rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:rotate-1 border-2 border-transparent hover:border-violet-400 stacia-fade-in animation-delay-${idx * 2}00 focus:outline-none focus:ring-4 focus:ring-violet-200`}
                >
                  <div
                    className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white text-2xl font-bold border-4 border-white shadow-lg group-hover:stacia-bounce transition-all duration-300"
                    style={{ boxShadow: '0 4px 24px 0 rgba(139, 92, 246, 0.15)' }}
                  >
                    {/* If you want to use icons, replace the number below with an icon component */}
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold mb-2 text-lg md:text-xl text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        {/* <section className="w-full bg-white py-16 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-violet-700">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <li>
                <h3 className="font-semibold text-gray-900 mb-2">Faster Time to Market</h3>
                <p className="text-gray-600">Our streamlined processes and agile methodologies help you launch products and features quickly, staying ahead of the competition.</p>
              </li>
              <li>
                <h3 className="font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">We build with scalability in mind, ensuring your digital products can grow with your business and handle increased demand effortlessly.</p>
              </li>
              <li>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">Our team of experts is available to provide guidance, troubleshooting, and ongoing support whenever you need it.</p>
              </li>
              <li>
                <h3 className="font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
                <p className="text-gray-600">We optimize resources and processes to deliver high-quality solutions that maximize your ROI and minimize unnecessary expenses.</p>
              </li>
            </ul>
          </div>
        </section> */}
        {/* Client Logos Section */}
        {/* <section className="w-full bg-gray-50 py-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-6 text-violet-700">Trusted By Leading Brands</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <img src="/public/brand1.png" alt="Brand 1" className="h-10" />
              <img src="/public/brand2.png" alt="Brand 2" className="h-10" />
              <img src="/public/brand3.png" alt="Brand 3" className="h-10" />
              <img src="/public/brand4.png" alt="Brand 4" className="h-10" />
            </div>
          </div>
        </section> */}
        {/* Testimonial Highlight */}
        {/* <section className="w-full bg-white py-16 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-violet-700">What Our Clients Say</h2>
            <blockquote className="italic text-lg text-gray-700 mb-4">
              “Stacia Tech delivered our project on time and exceeded our expectations. Their expertise and dedication made all the difference.”
            </blockquote>
            <div className="text-violet-700 font-semibold">— Head of IT, Global Retailer</div>
          </div>
        </section> */}
        {/* FAQ Section */}
        <section className="w-full bg-white py-16 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-violet-700">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
              {(faqData[service.link] || [
                { question: 'How do you ensure project quality?', answer: 'We follow industry best practices, conduct thorough testing, and maintain open communication throughout the project lifecycle.' },
                { question: 'Can you integrate with our existing systems?', answer: 'Absolutely. We specialize in seamless integrations with a wide range of platforms and technologies.' },
                { question: 'What is your support policy?', answer: 'We offer ongoing support and maintenance packages to ensure your solution remains secure and up-to-date.' },
              ]).map((faq, idx) => (
                <AccordionItem
                  value={`faq-${idx}`}
                  key={idx}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all shadow-sm data-[state=open]:border-violet-400 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger
                    className="text-lg font-semibold text-gray-900 flex justify-between items-center px-6 py-5 focus:outline-none transition-all border-none"
                  >
                    <span className="text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-6 pb-6 pt-0 text-base border-none">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        {/* services content */}
        {/* CTA */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-violet-700">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Let's discuss how our {service.title.toLowerCase()} can accelerate your digital transformation journey.
          </p>
          <Button asChild className="stacia-button-primary text-lg px-10 py-6">
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </section>

        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to Services
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default SpecificServices;