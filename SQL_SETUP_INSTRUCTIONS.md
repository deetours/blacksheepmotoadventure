# How to Add Trips to Supabase - Step by Step

## Quick Start

Copy and paste the SQL commands from `SQL_SETUP_COMMANDS.sql` into your Supabase SQL editor.

## Step-by-Step Instructions

### 1. Open Supabase SQL Editor

- Go to your Supabase project dashboard: https://app.supabase.com
- Click on your project
- Go to **SQL Editor** (left sidebar)
- Click **New Query**

### 2. Copy All SQL Commands

Go to `SQL_SETUP_COMMANDS.sql` in this repository and copy ALL the content.

### 3. Paste into Supabase SQL Editor

Paste the entire SQL into the editor.

### 4. Run the Query

Click the **Run** button (or press `Ctrl+Enter`)

You should see:
```
✓ Success: Table created
✓ Success: 2 rows inserted
```

### 5. Verify the Data

At the bottom of the SQL editor, you'll see a preview showing both trips inserted.

## What Gets Created

### 1. Trips Table
- Auto-generated UUID for each trip
- All trip details (title, region, difficulty, etc.)
- Day-by-day itinerary as JSON
- FAQs and inclusions/exclusions
- Timestamps for created_at and updated_at

### 2. Two Sample Trips Inserted
1. **Leh Ladakh Expedition** - ₹28,999 (11 Days, Advanced)
2. **Manali Sach Pass Route** - ₹18,999 (7 Days, Advanced)

### 3. Security Policies (RLS)
- Public read access enabled
- Perfect for displaying trips on your website

## Verify It Worked

After running, you can check by:

1. Going to **Table Editor** in Supabase
2. Clicking on the **trips** table
3. You should see 2 rows with your trips

## Next Steps

1. Visit `/trips` on your website to see the trips listed
2. Click on a trip to see full details
3. Visit `/admin` to add more trips manually

## Troubleshooting

### Error: "Table already exists"
- This is fine! The SQL includes `IF NOT EXISTS`
- You can safely run it again

### Trips not showing on website?
- Make sure the page reloaded
- Check browser console for errors
- Verify `.env.local` has correct Supabase credentials

### JSON parsing error?
- The SQL escapes single quotes correctly
- Make sure you copied the ENTIRE SQL file

## SQL Breakdown

The SQL does 3 main things:

**Step 1: Create Table**
```sql
CREATE TABLE IF NOT EXISTS trips (...)
```

**Step 2: Enable Security**
```sql
ALTER TABLE trips ENABLE ROW LEVEL SECURITY
CREATE POLICY "Allow public read access"
```

**Step 3: Insert Trip 1**
```sql
INSERT INTO trips (...) VALUES (...)
```

**Step 4: Insert Trip 2**
```sql
INSERT INTO trips (...) VALUES (...)
```

**Step 5: Verify**
```sql
SELECT * FROM trips
```
