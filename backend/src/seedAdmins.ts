import { supabaseAdmin } from './config/supabase';

async function seedAdmins() {
  const admins = [
    {
      email: 'dsw@institution.edu',
      password: 'dsw_admin_2026',
      metadata: { role: 'DSW' }
    },
    {
      email: 'tech.director@institution.edu',
      password: 'tech_dir_2026',
      metadata: { role: 'TECHNICAL_DIRECTOR' }
    },
    {
      email: 'nontech.director@institution.edu',
      password: 'nontech_dir_2026',
      metadata: { role: 'NON_TECHNICAL_DIRECTOR' }
    },
    {
      email: 'robotics.club@institution.edu',
      password: 'club_init_2026',
      metadata: { role: 'CLUB', clubName: 'The Tech Collective' }
    }
  ];

  console.log('Seeding initial administrators...');

  for (const admin of admins) {
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: admin.email,
      password: admin.password,
      email_confirm: true,
      user_metadata: admin.metadata
    });

    if (error) {
      if (error.message.includes('User already exists')) {
        console.log(`Skipping: ${admin.email} (Already exists)`);
      } else {
        console.error(`Error creating ${admin.email}:`, error.message);
      }
    } else {
      console.log(`Created: ${admin.email}`);
    }
  }

  console.log('Seeding completed.');
}

seedAdmins();
