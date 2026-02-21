# Supabase Setup Guide - Adding Trips

This guide explains how to set up Supabase and add trips to your Blacksheep Moto Adventure website.

## Prerequisites

- Supabase account and project created
- Environment variables configured (`.env.local`)
- Database access

## Step 1: Create the Trips Table in Supabase

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run this SQL query to create the trips table:

```sql
create table trips (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  region text not null,
  difficulty text not null check (difficulty in ('Moderate', 'Advanced', 'Extreme')),
  duration text not null,
  days integer not null,
  altitude text not null,
  price integer not null,
  image text not null,
  description text not null,
  itinerary jsonb not null,
  inclusions text[] not null,
  exclusions text[] not null,
  "bestFor" text[] not null,
  faqs jsonb not null,
  created_at timestamp default now()
);

-- Enable Row Level Security
alter table trips enable row level security;

-- Allow public read access
create policy "Allow public read" on trips
  for select
  using (true);
```

## Step 2: Add Trips via Admin Panel

### Option A: Use the Admin Panel (Recommended)

1. Navigate to `/admin` on your website
2. Click the buttons to add the pre-configured trips:
   - Leh Ladakh Expedition (11 Days, ₹28,999)
   - Manali Sach Pass Route (7 Days, ₹18,999)

### Option B: Add Trips Programmatically

Create a new trip by calling the `addTrip` function from the `useTrips` hook:

```typescript
const { addTrip } = useTrips()

const newTrip = {
  title: "Your Trip Title",
  region: "Ladakh",
  difficulty: "Advanced",
  duration: "10 Days / 9 Nights",
  days: 10,
  altitude: "18,380 ft",
  price: 25000,
  image: "/images/your-image.jpg",
  description: "Trip description...",
  itinerary: [
    {
      day: 1,
      title: "Day 1 Title",
      description: "Day description",
      altitude: "6,726 ft"
    },
    // ... more days
  ],
  inclusions: ["Item 1", "Item 2"],
  exclusions: ["Item 1"],
  bestFor: ["Category 1", "Category 2"],
  faqs: [
    {
      question: "Question?",
      answer: "Answer..."
    }
  ]
}

try {
  await addTrip(newTrip)
} catch (error) {
  console.error("Failed to add trip:", error)
}
```

### Option C: Insert Directly in Supabase

1. Go to the Supabase dashboard → Table Editor
2. Click on the `trips` table
3. Click "Insert" → "Insert new row"
4. Fill in all the required fields (JSON fields like `itinerary` and `faqs` should be valid JSON)

## Trip Structure

Each trip requires the following fields:

```typescript
interface Trip {
  id: string                    // Auto-generated UUID
  title: string                 // Trip name
  region: string                // Geographic region
  difficulty: "Moderate" | "Advanced" | "Extreme"
  duration: string              // e.g., "11 Days / 10 Nights"
  days: number                  // Total number of days
  altitude: string              // Maximum altitude reached
  price: number                 // Price in INR
  image: string                 // Path to trip image
  description: string           // Short description
  itinerary: Array<{            // Day-by-day breakdown
    day: number
    title: string
    description: string
    altitude?: string
  }>
  inclusions: string[]          // What's included
  exclusions: string[]          // What's not included
  bestFor: string[]             // Who should take this trip
  faqs: Array<{                 // Frequently asked questions
    question: string
    answer: string
  }>
}
```

## How It Works on the Frontend

### 1. Trips Listing Page (`/trips`)
- Displays all trips from Supabase
- Filters by region and difficulty
- Dynamically updates when new trips are added

### 2. Trip Detail Page (`/trips/[id]`)
- Shows full trip details including:
  - Day-by-day itinerary
  - Inclusions/Exclusions
  - FAQ section
  - Testimonials
  - Pricing and booking button

### 3. Admin Panel (`/admin`)
- Quick buttons to add pre-configured trips
- Can be expanded with a full admin dashboard for CRUD operations

## Image Management

1. Place trip images in the `/public/images` directory
2. Reference them in the trip's `image` field:
   ```
   image: "/images/ladakh.jpg"
   ```
3. Supported formats: JPG, PNG, WebP

## Styling & Customization

The trips use Tailwind CSS classes from your project. All components are styled to match the Blacksheep brand:
- Primary color for highlights and CTAs
- Dark theme (charcoal background)
- Responsive grid layouts
- Motion animations with Framer Motion

## Troubleshooting

### Trips not showing?
- Check that Supabase is properly connected (verify `.env.local`)
- Ensure the `trips` table exists and has data
- Check browser console for errors

### Images not loading?
- Verify image paths are correct
- Ensure images are in `/public/images/`
- Check image file permissions

### Admin panel not working?
- Verify you can access `/admin` route
- Check browser console for errors
- Ensure Supabase connection is working

## Security Notes

⚠️ **Important**: The current setup is public (read-only). To add authentication:

1. Update Supabase RLS policies to require authentication for write/delete operations
2. Implement admin authentication middleware
3. Add authentication checks to the admin panel

Example RLS policy for authenticated users only:
```sql
create policy "Allow authenticated users to write" on trips
  for insert
  with check (auth.role() = 'authenticated');
```

## Next Steps

1. Test adding a trip via the admin panel
2. Verify it appears on the trips listing page
3. Click through to the trip detail page
4. Customize the admin panel with additional fields as needed
5. Implement user authentication for secure trip management
