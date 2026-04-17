import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth
export const login = (credentials: any) => api.post('/auth/login', credentials);
export const signup = (data: any) => api.post('/auth/signup', data);
export const sendInvite = (email: string) => api.post('/auth/invite', { email });
export const createClub = (data: any) => api.post('/auth/create-club', data);
export const createDirector = (data: any) => api.post('/auth/create-director', data);

// Events
export const createEvent = (eventData: any) => api.post('/events', eventData);
export const getEvents = (status?: string) => api.get('/events', { params: { status } });
export const updateEventStatus = (id: string, status: string, remarks?: string) => 
  api.patch(`/events/${id}/status`, { status, remarks });

// Registrations
export const registerForEvent = (registrationData: any) => api.post('/registrations', registrationData);
export const getEventRegistrations = (eventId: string) => api.get(`/registrations/${eventId}`);
export const checkInStudent = (registrationId: string) => api.post('/registrations/check-in', { registration_id: registrationId });

export const subscribeNewsletter = (email: string) => api.post('/newsletter/subscribe', { email });

// Reports
export const submitReport = (reportData: any) => api.post('/reports', reportData);
export const getReports = (status?: string) => api.get('/reports', { params: { status } });
export const updateReportStatus = (id: string, status: string, remarks?: string) => 
  api.patch(`/reports/${id}/status`, { status, remarks });

// Clubs
export const getClubs = () => api.get('/clubs');
export const getClubDetails = (id: string) => api.get(`/clubs/${id}`);

export default api;
