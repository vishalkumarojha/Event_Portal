import { Request, Response } from 'express';
import { supabase } from '../config/supabase';

export const listClubs = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('clubs')
      .select('*')
      .order('name');

    if (error) return res.status(400).json({ error: error.message });
    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getClubDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    // Fetch club info
    const { data: club, error: clubError } = await supabase
      .from('clubs')
      .select('*')
      .eq('id', id)
      .single();

    if (clubError) return res.status(404).json({ error: 'Club not found' });

    // Fetch club events
    const { data: events, error: eventsError } = await supabase
      .from('events')
      .select('*')
      .eq('club_id', id)
      .order('date_time', { ascending: false });

    // Fetch club members
    const { data: members, error: membersError } = await supabase
      .from('club_members')
      .select('*')
      .eq('club_id', id);

    res.json({
      ...club,
      events: events || [],
      members: members || []
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
