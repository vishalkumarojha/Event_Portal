import { Request, Response } from 'express';
import { supabaseAdmin } from '../config/supabase';

export const createEvent = async (req: Request, res: Response) => {
  const { name, description, category, date_time, venue, max_capacity, registration_type, club_id } = req.body;

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
        status: 'Pending Approval' // Default status
      }
    ]).select();

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: 'Event submitted for approval', event: data[0] });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  const { status } = req.query;

  try {
    let query = supabaseAdmin.from('events').select('*');
    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const updateEventStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, remarks } = req.body; // Approved, Rejected

  try {
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
