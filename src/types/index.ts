export interface Event {
  id: string;
  title: string;
  date: string; // ISO string format
  startTime: string; // Format: "HH:MM"
  endTime: string; // Format: "HH:MM"
  color?: string;
  description?: string;
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: Event[];
}