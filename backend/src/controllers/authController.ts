import { Request, Response } from 'express';
import { supabase } from '../config/supabase';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) return res.status(401).json({ error: error.message });

    const token = jwt.sign({ id: data.user.id, email: data.user.email }, JWT_SECRET, { expiresIn: '1d' });

    res.json({ user: data.user, token });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role },
      },
    });

    if (error) return res.status(400).json({ error: error.message });

    res.json({ user: data.user });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const sendInvite = async (req: Request, res: Response) => {
  // Logic for DSW to send club invite link
  const { email } = req.body;
  
  // Mock invite link generation
  const inviteLink = `http://localhost:1111/dashboard/signup?invite=${Buffer.from(email).toString('base64')}`;
  
  res.json({ message: 'Invite sent', inviteLink });
};
