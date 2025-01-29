

#Potential Database Schema


```sql
-- Users table (extends Supabase auth.users)
create table profiles (
  id uuid references auth.users primary key,
  full_name text,
  role text check (role in ('filmmaker', 'teacher', 'student')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Films table
create table films (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  creator_id uuid references profiles(id) not null,
  video_url text not null,
  duration integer,
  language text,
  age_rating text,
  tags text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Lesson plans table
create table lesson_plans (
  id uuid default uuid_generate_v4() primary key,
  film_id uuid references films(id) not null,
  teacher_id uuid references profiles(id) not null,
  title text not null,
  description text,
  learning_objectives text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Questions table (for both AI and teacher-created questions)
create table questions (
  id uuid default uuid_generate_v4() primary key,
  film_id uuid references films(id) not null,
  lesson_plan_id uuid references lesson_plans(id),
  question_text text not null,
  correct_answer text,
  options text[],
  type text check (type in ('multiple_choice', 'open_ended', 'true_false')),
  timestamp integer, -- timestamp in video where question appears
  is_ai_generated boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Student progress table
create table student_progress (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references profiles(id) not null,
  film_id uuid references films(id) not null,
  lesson_plan_id uuid references lesson_plans(id),
  watched_duration integer,
  completed boolean default false,
  last_watched timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Student answers table
create table student_answers (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references profiles(id) not null,
  question_id uuid references questions(id) not null,
  answer text not null,
  is_correct boolean,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```