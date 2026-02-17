
export enum MembershipType {
  FIE = 'FIE',
  MIE = 'MIE',
  AMIE = 'AMIE',
  STUDENT = 'Student'
}

export enum EngineeringDivision {
  CIVIL = 'Civil Engineering',
  MECHANICAL = 'Mechanical Engineering',
  ELECTRICAL = 'Electrical Engineering',
  ELECTRONICS = 'Electronics & Comm. Engineering',
  COMPUTER = 'Computer Engineering',
  CHEMICAL = 'Chemical Engineering',
  AGRICULTURE = 'Agricultural Engineering',
  TEXTILE = 'Textile Engineering',
  PRODUCTION = 'Production Engineering'
}

export interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  division: EngineeringDivision | string;
  membershipType: MembershipType;
  imageUrl?: string;
  role: 'Chairman' | 'Secretary' | 'Committee Member' | 'Co-Opted' | 'Ex-Officio';
  linkedIn?: string;
}

export interface SubCommittee {
  title: string;
  members: {
    name: string;
    membershipNo: string;
    position: 'Chairman' | 'Convener' | 'Member';
  }[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  type: 'Technical' | 'Membership' | 'Student Chapter' | 'Women Engineer Cell';
  description: string;
  imageUrl: string;
  status: 'Upcoming' | 'Past' | 'Ongoing';
  speakers?: string[];
  brochureUrl?: string;
}

export interface Announcement {
  id: string;
  text: string;
  link?: string;
  date: string;
  isImportant: boolean;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  category: string;
  caption: string;
  year: number;
}
