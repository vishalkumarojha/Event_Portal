import { Request, Response } from 'express';
import { supabase, supabaseAdmin } from '../config/supabase';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) return res.status(401).json({ error: authError.message });

    // Fetch user role from metadata or profiles table
    // In this flow, we'll assume it's in the user_metadata
    const role = authData.user.user_metadata?.role || 'STUDENT';

    const token = jwt.sign(
      { id: authData.user.id, email: authData.user.email, role }, 
      JWT_SECRET, 
      { expiresIn: '1d' }
    );

    res.json({ user: { ...authData.user, role }, token });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// Removed public signup as per requirements

export const createClub = async (req: Request, res: Response) => {
  const { email, password, clubName } = req.body;

  try {
    // Create the user via Admin API to bypass email confirmation and allow direct role assignment
    const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { role: 'CLUB', clubName }
    });

    if (userError) return res.status(400).json({ error: userError.message });

    // Sync with public.clubs table
    const { error: dbError } = await supabaseAdmin.from('clubs').insert({
      id: userData.user.id,
      name: clubName,
      email: email
    });

    if (dbError) {
      console.error('Error syncing club to DB:', dbError);
      // We don't necessarily return error here as Auth succeeded, 
      // but it should be addressed.
    }

    res.json({ message: 'Club account created successfully', user: userData.user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// DSW can also create Directors
export const createDirector = async (req: Request, res: Response) => {
  const { email, password, role } = req.body; // TECHNICAL_DIRECTOR or NON_TECHNICAL_DIRECTOR

  if (!['TECHNICAL_DIRECTOR', 'NON_TECHNICAL_DIRECTOR'].includes(role)) {
    return res.status(400).json({ error: 'Invalid director role' });
  }

  try {
    const { data: userData, error: userError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { role }
    });

    if (userError) return res.status(400).json({ error: userError.message });

    res.json({ message: 'Director account created successfully', user: userData.user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
