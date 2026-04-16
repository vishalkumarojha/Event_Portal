import { Request, Response } from 'express';
import { supabaseAdmin } from '../config/supabase';

export const submitReport = async (req: Request, res: Response) => {
  const { event_id, club_id, summary, attendance_count, budget_details, documents } = req.body;

  try {
    const { data, error } = await supabaseAdmin.from('reports').insert([
      { 
        event_id, 
        club_id, 
        summary, 
        attendance_count, 
        budget_details, 
        documents,
        status: 'Pending Review' 
      }
    ]).select();

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: 'Report submitted successfully', report: data[0] });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getReports = async (req: Request, res: Response) => {
  const { status } = req.query;

  try {
    let query = supabaseAdmin.from('reports').select('*, events(name), profiles(email)');
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

export const updateReportStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, remarks } = req.body; // Approved, Rejected

  try {
    const { data, error } = await supabaseAdmin
      .from('reports')
      .update({ status, remarks })
      .eq('id', id)
      .select();

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: `Report status updated to ${status}`, report: data[0] });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
