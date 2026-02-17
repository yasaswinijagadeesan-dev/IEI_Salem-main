
import { CommitteeMember, MembershipType, EngineeringDivision, SubCommittee, Event, Announcement, GalleryItem } from './types';

export const EXECUTIVE_COMMITTEE: CommitteeMember[] = [
  {
    id: '1',
    name: 'Dr. S. Karthikeyan',
    designation: 'Professor & Head',
    division: EngineeringDivision.MECHANICAL,
    membershipType: MembershipType.FIE,
    role: 'Chairman',
    imageUrl: 'https://picsum.photos/seed/chairman/300/300'
  },
  {
    id: '2',
    name: 'Er. R. Venkatesh',
    designation: 'Consulting Engineer',
    division: EngineeringDivision.CIVIL,
    membershipType: MembershipType.MIE,
    role: 'Secretary',
    imageUrl: 'https://picsum.photos/seed/sec/300/300'
  },
  {
    id: '3',
    name: 'Dr. P. Rajendran',
    designation: 'Senior Engineer',
    division: EngineeringDivision.ELECTRICAL,
    membershipType: MembershipType.FIE,
    role: 'Committee Member',
    imageUrl: 'https://picsum.photos/seed/mem1/300/300'
  },
  {
    id: '4',
    name: 'Er. S. Meenakshi',
    designation: 'Production Head',
    division: EngineeringDivision.PRODUCTION,
    membershipType: MembershipType.AMIE,
    role: 'Committee Member',
    imageUrl: 'https://picsum.photos/seed/mem2/300/300'
  }
];

export const SUB_COMMITTEES: SubCommittee[] = [
  {
    title: 'Finance Sub Committee',
    members: [
      { name: 'Dr. S. Karthikeyan', membershipNo: 'F-12345', position: 'Chairman' },
      { name: 'Er. R. Venkatesh', membershipNo: 'M-54321', position: 'Convener' }
    ]
  },
  {
    title: 'Technical Sub Committee',
    members: [
      { name: 'Dr. P. Rajendran', membershipNo: 'F-99887', position: 'Chairman' },
      { name: 'Er. J. Doe', membershipNo: 'AM-11223', position: 'Member' }
    ]
  },
  {
    title: 'Women Engineer Cell',
    members: [
      { name: 'Er. S. Meenakshi', membershipNo: 'AM-55667', position: 'Chairman' }
    ]
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Annual General Meeting (AGM) 2025',
    date: '2025-06-15',
    venue: 'IEI Salem Hall, Salem',
    type: 'Membership',
    description: 'The annual gathering of all IEI Salem members to discuss progress and future plans.',
    imageUrl: 'https://picsum.photos/seed/agm/800/400',
    status: 'Upcoming',
    speakers: ['IEI National President', 'Chairman IEI-SLC']
  },
  {
    id: 'e2',
    title: 'Workshop on AI in Structural Engineering',
    date: '2025-02-28',
    venue: 'Online - Zoom Platform',
    type: 'Technical',
    description: 'Exploring the impact of Large Language Models and Computer Vision in modern Civil engineering.',
    imageUrl: 'https://picsum.photos/seed/aiwork/800/400',
    status: 'Upcoming',
    speakers: ['Dr. Tech Specialist', 'Er. AI Researcher']
  },
  {
    id: 'e3',
    title: 'Recent Trends in Renewable Energy',
    date: '2024-12-10',
    venue: 'Sona College of Technology, Salem',
    type: 'Technical',
    description: 'A seminar focusing on solar and wind energy advancements in Tamil Nadu.',
    imageUrl: 'https://picsum.photos/seed/energy/800/400',
    status: 'Past'
  }
];

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
  { id: '1', text: 'Nominations for Executive Committee 2025-2027 are now open.', date: '2025-01-20', isImportant: true },
  { id: '2', text: 'Membership drive for student chapters starting from Feb 1st.', date: '2025-01-22', isImportant: false },
  { id: '3', text: 'IEI Salem Newsletter Jan 2025 Edition Published.', date: '2025-01-15', isImportant: false }
];

export const MOCK_GALLERY: GalleryItem[] = [
  { id: 'g1', imageUrl: 'https://picsum.photos/seed/gal1/800/600', category: 'Annual General Meetings', caption: 'AGM 2024 Group Photo', year: 2024 },
  { id: 'g2', imageUrl: 'https://picsum.photos/seed/gal2/800/600', category: 'Technical Seminars', caption: 'Workshop on IoT', year: 2024 },
  { id: 'g3', imageUrl: 'https://picsum.photos/seed/gal3/800/600', category: 'Workshops', caption: 'Hands-on CAD Training', year: 2023 },
  { id: 'g4', imageUrl: 'https://picsum.photos/seed/gal4/800/600', category: 'Special Events', caption: 'Engineers Day Celebration', year: 2024 }
];
