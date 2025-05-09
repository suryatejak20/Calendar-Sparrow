import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Team Meeting',
    date: '2025-05-15',
    startTime: '09:00',
    endTime: '10:00',
    color: '#3B82F6', // blue
    description: 'Weekly team sync-up'
  },
  {
    id: '2',
    title: 'Product Demo',
    date: '2025-05-15',
    startTime: '11:00',
    endTime: '12:00',
    color: '#8B5CF6', // purple
    description: 'Demo the new features to the team'
  },
  {
    id: '3',
    title: 'Client Call',
    date: '2025-05-15',
    startTime: '14:00',
    endTime: '15:00',
    color: '#EC4899', // pink
    description: 'Quarterly review with ABC Corp'
  },
  {
    id: '4',
    title: 'Lunch with Sarah',
    date: '2025-05-16',
    startTime: '12:00',
    endTime: '13:00',
    color: '#10B981', // green
    description: 'Networking lunch at Bistro Garden'
  },
  {
    id: '5',
    title: 'Code Review',
    date: '2025-05-17',
    startTime: '10:00',
    endTime: '11:30',
    color: '#F59E0B', // amber
    description: 'Review PRs for the new feature'
  },
  {
    id: '6',
    title: 'Project Planning',
    date: '2025-05-17',
    startTime: '13:00',
    endTime: '14:30',
    color: '#3B82F6', // blue
    description: 'Q3 project planning session'
  },
  {
    id: '7',
    title: 'Interview Candidate',
    date: '2025-05-18',
    startTime: '11:00',
    endTime: '12:00',
    color: '#EC4899', // pink
    description: 'Senior developer interview'
  },
  {
    id: '8',
    title: 'All Hands',
    date: '2025-05-20',
    startTime: '09:00',
    endTime: '10:00',
    color: '#8B5CF6', // purple
    description: 'Monthly company all hands'
  },
  {
    id: '9',
    title: 'Design Review',
    date: '2025-05-20',
    startTime: '14:00',
    endTime: '15:00',
    color: '#F59E0B', // amber
    description: 'Review new UI designs'
  },
  {
    id: '10',
    title: 'Overlapping Event 1',
    date: '2025-05-22',
    startTime: '09:00',
    endTime: '11:00',
    color: '#3B82F6', // blue
    description: 'This will overlap with another event'
  },
  {
    id: '11',
    title: 'Overlapping Event 2',
    date: '2025-05-22',
    startTime: '10:00',
    endTime: '12:00',
    color: '#EC4899', // pink
    description: 'This overlaps with Overlapping Event 1'
  },
  {
    id: '12',
    title: 'Overlapping Event 3',
    date: '2025-05-22',
    startTime: '11:30',
    endTime: '13:30',
    color: '#8B5CF6', // purple
    description: 'This overlaps with Overlapping Event 2'
  }
];