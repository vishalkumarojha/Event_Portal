-- 1. Create Events Table
CREATE TABLE IF NOT EXISTS public.events (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name text NOT NULL,
    description text,
    category text,
    event_type text CHECK (event_type IN ('Technical', 'Non-Technical')),
    date_time timestamp with time zone,
    venue text,
    max_capacity integer,
    registration_type text,
    club_id uuid,
    status text DEFAULT 'Pending Approval',
    remarks text,
    created_at timestamp with time zone DEFAULT now()
);

-- 2. Create Registrations Table
CREATE TABLE IF NOT EXISTS public.registrations (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id uuid REFERENCES public.events(id),
    student_id text,
    student_name text,
    student_email text,
    status text DEFAULT 'Registered',
    checked_in boolean DEFAULT false,
    check_in_time timestamp with time zone,
    created_at timestamp with time zone DEFAULT now()
);

-- 3. Create Reports Table
CREATE TABLE IF NOT EXISTS public.reports (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    event_id uuid REFERENCES public.events(id),
    club_id uuid,
    summary text,
    attendance_count integer,
    budget_details jsonb,
    documents text[],
    status text DEFAULT 'Pending Review',
    remarks text,
    created_at timestamp with time zone DEFAULT now()
);

-- 4. Create Newsletter Subscriptions Table
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email text UNIQUE NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);
