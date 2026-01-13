-- Copy and paste this into the SQL Editor in your Supabase Dashboard

create table if not exists routines (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  name text not null,
  poses jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);

alter table routines enable row level security;

create policy "Users can view their own routines" on routines
  for select using (auth.uid() = user_id);

create policy "Users can insert their own routines" on routines
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own routines" on routines
  for update using (auth.uid() = user_id);

create policy "Users can delete their own routines" on routines
  for delete using (auth.uid() = user_id);
