import { Request, Response } from 'express';
import { supabaseAdmin } from '../config/supabase';
import QRCode from 'qrcode';

export const registerForEvent = async (req: Request, res: Response) => {
  const { event_id, student_id, student_name, student_email } = req.body;

  try {
    // 1. Create registration record
    const { data, error } = await supabaseAdmin.from('registrations').insert([
      { event_id, student_id, student_name, student_email, status: 'Registered' }
    ]).select();

    if (error) return res.status(400).json({ error: error.message });

    const registration = data[0];

    // 2. Generate QR Code for the ticket
    const ticketData = JSON.stringify({
      registration_id: registration.id,
      event_id,
      student_id
    });

    const qrCodeDataUrl = await QRCode.toDataURL(ticketData);

    res.json({ 
      message: 'Registration successful', 
      registration, 
      ticket: { qrCode: qrCodeDataUrl } 
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getEventRegistrations = async (req: Request, res: Response) => {
  const { event_id } = req.params;

  try {
    const { data, error } = await supabaseAdmin
      .from('registrations')
      .select('*')
      .eq('event_id', event_id);

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const checkInStudent = async (req: Request, res: Response) => {
  const { registration_id } = req.body;

  try {
    const { data, error } = await supabaseAdmin
      .from('registrations')
      .update({ checked_in: true, check_in_time: new Date().toISOString() })
      .eq('id', registration_id)
      .select();

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: 'Check-in successful', registration: data[0] });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
