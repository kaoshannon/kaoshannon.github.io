import { Project } from '../components/ProjectCard';

import aqualogixLogo from '../assets/portfolio/aqualogix/logo.png'
import tntp from '../assets/portfolio/thenewthirdplace/walk.png';
// import dancing from '../assets/portfolio/thenewthirdplace/seawall-dance.mp4'; // TODO: support videos!
import guyHero from '../assets/portfolio/theguyapp/GuyHero.png';
import canadatogoMockup from '../assets/portfolio/canadatogo/CanadaToGoMockups.png'
import byoMockup from '../assets/portfolio/byo/BYOMockups.png'
import dhmHero from '../assets/portfolio/dearhiringmanager/dhmHero.png'
import dhmCopyPaste from '../assets/portfolio/dearhiringmanager/1-copy-and-paste.png'
import dhmGenerate from '../assets/portfolio/dearhiringmanager/3-generate-cover-letter.png'
import EYUniDecentraland from '../assets/portfolio/eyuni/EYUniVRsity_Decentraland.png'
import EYUniClassroom from '../assets/portfolio/eyuni/EYUniVRsity_Classroom.png'
import biztechLogo from '../assets/portfolio/biztechwebapp/biztech-logo.png'
import eventRegistration from '../assets/portfolio/biztechwebapp/BTWA.png'

const sampleProjects: Project[] = [
    {
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
        name: 'Understanding and Designing for Video-based Serious Leisure',
        year: '2022',
        description: 'A case study of musical instrument through video-based mediums. Co-authored with Dongwook Yoon, Mint Tanprasert, and Yixin Wang under supervision by Dongwook Yoon',
        type: 'research',
        skills: ['Human-Computer Interface', 'Research Design', 'Qualitative Thematic Analysis', 'Academic Writing'],
        images: [
        ]
    },
    {
        name: 'BYO',
        year: '2022',
        description: 'Cafe rewards platform to incentivize bring-your-own cup culture in Greater Vancouver.',
        type: 'design',
        skills: ['UI/UX Design', 'User Testing', 'Mobile Design', 'Incentive Systems Design'],
        images: [
            byoMockup
        ]
    },
    {
        name: 'CanadaToGo',
        year: '2022',
        description: 'Helping local restaurants operate during COVID-19 lockdowns with live capacity tracking.',
        type: 'software',
        skills: ['Frontend Development', 'Google Maps API', 'Web Development'],
        images: [
            canadatogoMockup
        ]
    },
    {
        name: 'Aqualogix',
        year: '2024 - 2025',
        description: 'Aqualogix transforms the problem of GPU cooling in data centers into an opportunity for carbon-free water heating in buildings. Our modular system captures waste heat from high-performance computing and redirects it to domestic hot water loops, reducing cooling costs for compute providers and heating costs for commercial properties.',
        type: 'other',
        skills: [],
        link: 'https://aqualogix.ca',
        images: [
            aqualogixLogo
        ]
    },
    {
        name: 'The Guy App',
        year: '2025',
        description: 'Ever heard the phrase, \'I know a guy\'? The Guy App connects you to trustworthy referrals - like mechanics, tutors, or anyone else you might need in a pinch - all through your personal network. Now you can find \'your guy\' with confidence.',
        type: 'software',
        skills: [],
        link: 'https://devpost.com/software/guy-app',
        images: [
            guyHero
        ]
    }
]

const archivedProjects: Project[] = [
    {
        name: 'Dear Hiring Manager...',
        year: '2023',
        description: 'What if you never have to customized another cover letter? DHM is your new one-stop shop for job applications. Let us pitch you to the hiring manager, so you can focus on doing what they\'re going to hire you for.',
        type: 'software',
        skills: ['Web Development', 'UI/UX Design', 'Product Management'],
        link: 'https://devpost.com/software/dear-hiring-manager',
        images: [
            dhmHero,
            dhmCopyPaste,
            dhmGenerate
        ]
    },
    {
        name: 'UBC BizTech',
        year: '2023',
        description: 'Member management and event registration web application for UBC BizTech.',
        type: 'software',
        skills: ['Web Development', 'User Registration', 'Event Management'],
        link: 'https://app.ubcbiztech.com/signup',
        images: [
            biztechLogo,
            eventRegistration,
        ]
    },
    {
        name: 'EY UniVRsity',
        year: '2022',
        description: 'Virtual reality employee training and professional development platform. Top Project of UBC BizTech and EY\'s product hackathon 2022.',
        type: 'software',
        skills: ['Product Management', 'VR Development', 'Unity'],
        link: 'https://devpost.com/software/ey-univrsity',
        images: [
            EYUniDecentraland,
            EYUniClassroom
        ]
    },
    {
        name: 'CryptoTune',
        year: '2022',
        description: 'Data sonification with Covalent\'s Ethereum API. Won Sponsor Prize in nwHacks 2022 (hosted by nwPlus, sponsored by Covalent).',
        type: 'other',
        skills: ['Data Sonification', 'Ethereum API', 'Audio Processing', 'Data Analysis'],
        link: 'https://www.youtube.com/embed/i8MvnZ33rTY',
        images: [
        ]
    },
];

export default sampleProjects