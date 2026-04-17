import { Request, Response } from 'express';
import { supabaseAdmin } from '../config/supabase';
import { AuthRequest } from '../middleware/auth';

export const createEvent = async (req: Request, res: Response) => {
  const { name, description, category, date_time, venue, max_capacity, registration_type, club_id, event_type } = req.body;

  try {
    const { data, error } = await supabaseAdmin.from('events').insert([
      { 
        name, 
        description, 
        category, 
        date_time, 
        venue, 
        max_capacity, 
        registration_type, 
        club_id,
        event_type, // 'Technical' or 'Non-Technical'
        status: 'Pending Approval' 
      }
    ]).select();

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: 'Event submitted for approval', event: data[0] });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getEvents = async (req: AuthRequest, res: Response) => {
  const { status } = req.query;
  const user = req.user;

  try {
    let query = supabaseAdmin.from('events').select('*');
    
    if (status) {
      query = query.eq('status', status);
    }

    // Role-based filtering for Directors
    if (user?.role === 'TECHNICAL_DIRECTOR') {
      query = query.eq('event_type', 'Technical');
    } else if (user?.role === 'NON_TECHNICAL_DIRECTOR') {
      query = query.eq('event_type', 'Non-Technical');
    }
    // DSW and Others can see relevant events (or all if specified)

    const { data, error } = await query;

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateEventStatus = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { status, remarks } = req.body;
  const user = req.user;

  try {
    // Check if the director is allowed to approve this event
    const { data: eventData } = await supabaseAdmin.from('events').select('event_type').eq('id', id).single();
    
    if (user?.role === 'TECHNICAL_DIRECTOR' && eventData?.event_type !== 'Technical') {
      return res.status(403).json({ error: 'You can only approve Technical events' });
    }
    if (user?.role === 'NON_TECHNICAL_DIRECTOR' && eventData?.event_type !== 'Non-Technical') {
      return res.status(403).json({ error: 'You can only approve Non-Technical events' });
    }

    const { data, error } = await supabaseAdmin
      .from('events')
      .update({ status, remarks })
      .eq('id', id)
      .select();

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: `Event status updated to ${status}`, event: data[0] });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
