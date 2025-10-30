export interface TeamMember {
  id: number;
  name: string;
  role: string;
  category: 'faculty' | 'student' | 'core' | 'all' | 'pastcoordinators' | 'pastmembers';
  description: string;
  linkedin?: string;
  image?: string;
  imageUrl?: string;
  avatarColor?: string;
  department?: string;
}
