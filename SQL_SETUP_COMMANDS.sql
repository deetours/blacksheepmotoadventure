-- ============================================================================
-- BLACKSHEEP MOTO ADVENTURE - SUPABASE SQL SETUP
-- ============================================================================

-- Step 1: Create the trips table
-- ============================================================================

CREATE TABLE IF NOT EXISTS trips (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  region text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('Moderate', 'Advanced', 'Extreme')),
  duration text NOT NULL,
  days integer NOT NULL,
  altitude text NOT NULL,
  price integer NOT NULL,
  image text NOT NULL,
  description text NOT NULL,
  itinerary jsonb NOT NULL,
  inclusions text[] NOT NULL,
  exclusions text[] NOT NULL,
  "bestFor" text[] NOT NULL,
  faqs jsonb NOT NULL,
  created_at timestamp DEFAULT now(),
  updated_at timestamp DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE trips ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access" ON trips
  FOR SELECT
  USING (true);

-- Step 2: Insert Leh Ladakh Expedition
-- ============================================================================

INSERT INTO trips (
  title,
  region,
  difficulty,
  duration,
  days,
  altitude,
  price,
  image,
  description,
  itinerary,
  inclusions,
  exclusions,
  "bestFor",
  faqs
) VALUES (
  'Leh Ladakh Expedition',
  'Ladakh',
  'Advanced',
  '11 Days / 10 Nights',
  11,
  '18,380 ft',
  28999,
  '/images/ladakh.jpg',
  'The ultimate Himalayan motorcycle expedition. Ride through the highest motorable passes in the world, witness the surreal beauty of Pangong Lake, and push your limits across Khardung La and Chang La.',
  '[
    {"day": 1, "title": "Manali - Arrival & Briefing", "description": "Arrive in Manali. Bike inspection, gear check, and expedition briefing at Blacksheep basecamp.", "altitude": "6,726 ft"},
    {"day": 2, "title": "Manali to Jispa", "description": "Ride through Rohtang Pass and descend into the Lahaul Valley. First taste of high altitude riding.", "altitude": "10,600 ft"},
    {"day": 3, "title": "Jispa to Sarchu", "description": "Cross Baralacha La pass. The landscape transforms from green valleys to barren moonscape.", "altitude": "14,070 ft"},
    {"day": 4, "title": "Sarchu to Leh", "description": "The big day. Cross Nakee La, Lachalung La, and the legendary Gata Loops. Arrive in Leh by evening.", "altitude": "11,562 ft"},
    {"day": 5, "title": "Leh - Rest & Acclimatize", "description": "Rest day in Leh. Explore the old town, visit Shanti Stupa, and let your body adjust to the altitude."},
    {"day": 6, "title": "Leh to Nubra Valley", "description": "Ride over Khardung La - one of the highest motorable passes. Descend into the sand dunes of Nubra.", "altitude": "18,380 ft"},
    {"day": 7, "title": "Nubra to Pangong Lake", "description": "Ride through Shyok River valley to the ethereal Pangong Tso. Camp by the lake under a million stars.", "altitude": "14,270 ft"},
    {"day": 8, "title": "Pangong to Hanle", "description": "Ride to the remote Hanle village. Visit the Indian Astronomical Observatory. True isolation.", "altitude": "14,764 ft"},
    {"day": 9, "title": "Hanle to Leh", "description": "Return via Chumur and Upshi. Final stretch through dramatic river valleys back to Leh.", "altitude": "11,562 ft"},
    {"day": 10, "title": "Leh - Free Day", "description": "Explore Leh at your own pace. Visit monasteries, shop at the market, or simply rest."},
    {"day": 11, "title": "Departure", "description": "Transfer to Leh airport or begin the return ride to Manali. End of expedition."}
  ]'::jsonb,
  ARRAY[
    'Royal Enfield Himalayan 450 (fuel included)',
    'All accommodations (hotels & camps)',
    'Breakfast & dinner daily',
    '4x4 backup vehicle with mechanic',
    'First aid & oxygen cylinder',
    'Inner line permits',
    'Experienced road captain'
  ],
  ARRAY[
    'Lunch',
    'Personal expenses',
    'Riding gear rental',
    'Travel insurance',
    'Airfare'
  ],
  ARRAY[
    'Experienced riders',
    'Adventure seekers',
    'Photography enthusiasts',
    'Those who want to conquer the highest passes'
  ],
  '[
    {"question": "Do I need a motorcycle license?", "answer": "Yes, a valid motorcycle license is mandatory. We verify this during the briefing."},
    {"question": "What about altitude sickness?", "answer": "We build in acclimatization days. Our backup vehicle carries oxygen cylinders and first aid. Our road captain is trained in high-altitude emergency response."},
    {"question": "Can beginners join?", "answer": "This is an advanced expedition. We recommend at least 1 year of riding experience and comfort with off-road conditions."},
    {"question": "What if my bike breaks down?", "answer": "Our 4x4 backup vehicle follows the group with a full-time mechanic and spare parts. No rider is ever left stranded."}
  ]'::jsonb
);

-- Step 3: Insert Manali - Sach Pass - Manali Route
-- ============================================================================

INSERT INTO trips (
  title,
  region,
  difficulty,
  duration,
  days,
  altitude,
  price,
  image,
  description,
  itinerary,
  inclusions,
  exclusions,
  "bestFor",
  faqs
) VALUES (
  'Manali – Sach Pass – Manali Route',
  'Himachal Pradesh',
  'Advanced',
  '7 Days / 6 Nights',
  7,
  '4,420 m',
  18999,
  '/images/expedition.jpg',
  'Conquer the infamous Sach Pass, one of India''s most adventurous mountain roads. Experience pristine Himalayan terrain, cross glacial rivers, and discover remote valleys untouched by mainstream tourism.',
  '[
    {"day": 1, "title": "Manali → Tandi", "description": "Cross Atal Tunnel into Lahaul Valley. Ride along Chandra and Bhaga rivers. Visit Sissu Waterfall Viewpoint. Top up fuel here - last petrol pump before Chamba.", "altitude": "2,570 m"},
    {"day": 2, "title": "Tandi → Udaipur → Killar", "description": "Visit Trilokinath Temple & Mrikula Devi Temple. Ride along wild Chenab River through dense pine forests and cliffs.", "altitude": "2,600 m"},
    {"day": 3, "title": "Killar → Sach Pass → Bairagarh", "description": "Climb the infamous Sach Pass with stunning glacier views. Narrow trails, water crossings, and streams. One of the trip''s highlights.", "altitude": "4,420 m"},
    {"day": 4, "title": "Bairagarh → Chamba", "description": "Descend from high alpine terrain to lush pine forests. Visit Chamera Lake viewpoint en route.", "altitude": "996 m"},
    {"day": 5, "title": "Chamba → Khajjiar → Dalhousie", "description": "Stop at Khajjiar, the ''Mini Switzerland of India.'' Gentle scenic day for rest and recovery.", "altitude": "1,970 m"},
    {"day": 6, "title": "Dalhousie → Jot Pass → Palampur", "description": "Ride over Jot Pass with superb Himalayan views. Pass through tea estates and charming hill towns.", "altitude": "2,400 m"},
    {"day": 7, "title": "Palampur → Mandi → Manali", "description": "Visit Baijnath Temple. Ride alongside Beas River through green valleys. Return to Manali with unforgettable memories.", "altitude": "2,050 m"}
  ]'::jsonb,
  ARRAY[
    'Royal Enfield Himalayan 450 (fuel included)',
    'All accommodations (mid-range hotels)',
    'Breakfast & dinner daily',
    '4x4 backup vehicle',
    'Experienced road captain',
    'Route briefing and safety gear'
  ],
  ARRAY[
    'Lunch',
    'Personal expenses',
    'Travel insurance',
    'Airfare',
    'Bike rental insurance'
  ],
  ARRAY[
    'Adventure enthusiasts',
    'Experienced riders',
    'Off-road enthusiasts',
    'Nature photographers'
  ],
  '[
    {"question": "Is Sach Pass really that difficult?", "answer": "Yes, Sach Pass (4,420m) is challenging with steep ascents, water crossings, and narrow trails. It''s for experienced riders comfortable with off-road conditions."},
    {"question": "What type of bike is required?", "answer": "Dual-sport bikes with high ground clearance are ideal. We provide Royal Enfield Himalayan 450 which is perfect for this route."},
    {"question": "When is the best time to ride?", "answer": "Mid-July to Late September offers the best weather. Passes may be accessible from June, but weather can be unpredictable."},
    {"question": "How many kilometers per day?", "answer": "Average 100-150 km per day, with Day 3 (Sach Pass) being the most challenging. Riding time: 5-8 hours daily."}
  ]'::jsonb
);

-- Step 3: Insert Spiti Valley Expedition
-- ============================================================================

INSERT INTO trips (
  title,
  region,
  difficulty,
  duration,
  days,
  altitude,
  price,
  image,
  description,
  itinerary,
  inclusions,
  exclusions,
  "bestFor",
  faqs
) VALUES (
  'Spiti Valley Expedition',
  'Spiti',
  'Advanced',
  '9 Days / 8 Nights',
  9,
  '11,320 ft',
  42000,
  '/images/spiti.jpg',
  'Journey through one of India''s most remote and mystical valleys. Experience ancient monasteries perched on cliffs, the world''s highest post office, Asia''s tallest bridge, and pristine Himalayan landscapes.',
  '[
    {"day": 1, "title": "Arrival at Chandigarh → Manali", "description": "Arrive early morning at Chandigarh. Transfer to Manali by tempo. Check-in, group briefing & bike allocation. Meet your fellow riders and begin your Himalayan adventure.", "altitude": "6,726 ft"},
    {"day": 2, "title": "Manali → Jibhi", "description": "Ride through pine forests & rolling hills. Cross Aut Tunnel toward Tirthan Valley. Experience the beauty of the lesser-known valleys. Optional visit to Jibhi Waterfall.", "altitude": "7,000 ft"},
    {"day": 3, "title": "Jibhi → Sangla", "description": "Early start to cross Jalori Pass at 10,800 ft. Continue via Rampur & Karcham. Witness stunning Kinnaur Valley views and enjoy riverside riding along the Sutlej.", "altitude": "10,800 ft"},
    {"day": 4, "title": "Sangla → Chitkul → Nako", "description": "Ride to Chitkul, the last Indian village near Indo-Tibet border at 11,320 ft. Lunch at ''Hindustan ka Aakhri Dhaba''. Witness Baspa River and Khab Sangam. Enter the mystical Spiti region.", "altitude": "11,320 ft"},
    {"day": 5, "title": "Nako → Tabo", "description": "Cross Kinnaur terrains and enter Spiti Valley. Visit Nako Lake and witness the dramatic transition to desert landscapes. Discover the spiritual essence of the region.", "altitude": "10,000 ft"},
    {"day": 6, "title": "Tabo → Dhankar → Hikkim → Kaza", "description": "Visit cliff-side Dhankar Monastery. Post a letter from the world''s highest post office in Hikkim. Lunch at Komic, the highest motorable village. Reach Kaza by evening.", "altitude": "12,500 ft"},
    {"day": 7, "title": "Kaza → Chicham → Chandratal", "description": "Visit Key Monastery. Cross Chicham Bridge, Asia''s tallest bridge. Ride to the stunning Chandratal Lake surrounded by barren mountains. Camp under the stars.", "altitude": "13,050 ft"},
    {"day": 8, "title": "Chandratal → Atal Tunnel → Manali", "description": "Ride along Chandra River. Cross the Atal Tunnel, one of the world''s highest. Visit Shigri Glacier views. Return to Manali.", "altitude": "12,000 ft"},
    {"day": 9, "title": "Manali → Chandigarh", "description": "Farewell breakfast with your riding family. Group photo session. Certificate ceremony. Transfer back to Chandigarh with unforgettable memories."}
  ]'::jsonb,
  ARRAY[
    'Royal Enfield 411cc bike',
    'Backup vehicle with mechanic & marshal',
    'Double-sharing accommodation (MAP plan)',
    'Mineral water while riding',
    'Oxygen cylinder & first aid',
    'Fuel for entire tour',
    'Pickup & drop from Chandigarh',
    'Breakfast & dinner daily'
  ],
  ARRAY[
    'Lunch',
    'Drinks',
    'Personal expenses',
    'Extra costs due to weather or natural disasters'
  ],
  ARRAY[
    'Adventure seekers',
    'Experienced riders',
    'Photography enthusiasts',
    'Spiritual explorers',
    'Off-road enthusiasts'
  ],
  '[
    {"question": "Is Spiti Valley accessible year-round?", "answer": "No. The best time is May to September when all passes are open. In winter, the valley is cut off due to heavy snow."},
    {"question": "What if Kunzum Pass is closed?", "answer": "If Kunzum Pass is closed due to weather, we divert via Kalpa. There''s an additional charge of ₹1,000 per bike for this alternate route."},
    {"question": "What about altitude sickness?", "answer": "We start from Chandigarh at low altitude and gradually climb. Our road captain is trained in altitude management. We carry oxygen cylinders and first aid kits."},
    {"question": "Can I book this trip solo?", "answer": "Yes! Solo riders are welcome. You''ll be paired with another rider for shared accommodation (double-sharing)."},
    {"question": "What if weather affects Chandratal camping?", "answer": "If weather is unfavorable, we provide backup accommodation at Batal instead of camping at Chandratal Lake."},
    {"question": "How experienced do I need to be?", "answer": "You need at least 6 months of riding experience on highways. Comfort with high altitude and off-road conditions is essential."}
  ]'::jsonb
);

-- Step 4: Insert Spiti – Zanskar Valley Expedition
-- ============================================================================

INSERT INTO trips (
  title,
  region,
  difficulty,
  duration,
  days,
  altitude,
  price,
  image,
  description,
  itinerary,
  inclusions,
  exclusions,
  "bestFor",
  faqs
) VALUES (
  'Spiti – Zanskar Valley Expedition',
  'Zanskar',
  'Extreme',
  '12 Days / 11 Nights',
  12,
  '15,000+ ft',
  62000,
  '/images/zanskar.jpg',
  'The ultimate high-altitude expedition into the most remote corners of the Himalayas. Ride to legendary monasteries carved into cliffs, cross glaciers, traverse remote passes, and discover the raw essence of Zanskar. Experience the ride of your lifetime.',
  '[
    {"day": 1, "title": "Arrival | Manali", "description": "Arrive in Manali, check in, rest, and attend briefing + bike allocation. Meet your ride crew, inspect machines, and prepare for the journey ahead.", "altitude": "6,726 ft"},
    {"day": 2, "title": "Into the Mountains | Manali → Jibhi", "description": "Ride through forest corridors and winding Himalayan roads toward the hidden hamlet of Jibhi. Forest scenery and mountain air.", "altitude": "7,000 ft"},
    {"day": 3, "title": "Borderland Ride | Jibhi → Chitkul", "description": "Long, scenic ride through dramatic terrain toward India''s last village near the border. Expect raw valleys, river roads, and alpine views.", "altitude": "11,320 ft"},
    {"day": 4, "title": "Entering the High Desert | Chitkul → Nako", "description": "Landscape transforms from green valleys to stark mountain desert as you approach Spiti''s gateway. Witness the dramatic geological shift.", "altitude": "11,000 ft"},
    {"day": 5, "title": "Monasteries & Cliffs | Nako → Kaza via Lalung, Gue & Dhankar", "description": "Ride past ancient monasteries perched on cliffs and witness Spiti''s most iconic spiritual landmarks. Dhankar Monastery is breathtaking.", "altitude": "12,500 ft"},
    {"day": 6, "title": "Highest Villages Ride | Kaza Local", "description": "Explore Langza, Komic, Hikkim & Key Monastery. Ride to some of the highest inhabited villages in the world. Visit the world''s highest post office.", "altitude": "12,860 ft"},
    {"day": 7, "title": "Lake of the Moon | Kaza → Chandratal via Kibber & Chicham Bridge", "description": "Cross one of Asia''s highest bridges and continue toward Chandratal, the legendary high-altitude lake. Stunning moonlit landscapes.", "altitude": "13,050 ft"},
    {"day": 8, "title": "Into Lahaul | Chandratal → Jispa", "description": "Ride along glacier-fed rivers and rugged mountain terrain into Lahaul Valley. Experience pristine wilderness and raw Himalayan beauty.", "altitude": "11,500 ft"},
    {"day": 9, "title": "Crossing Into Zanskar | Jispa → Padum via Shinkhula Pass", "description": "High-altitude pass crossing into Zanskar Valley, one of the most remote regions of the Himalayas. This is the expedition you came for.", "altitude": "15,240 ft"},
    {"day": 10, "title": "Glacier Exploration Ride | Padum Local", "description": "Visit Drang Drung Glacier and Pensila Top. A day of raw Himalayan landscapes and high-altitude exploration. Photography paradise.", "altitude": "14,800 ft"},
    {"day": 11, "title": "Sacred Trail | Padum → Purne → Trek to Phuktal Monastery", "description": "Ride to Purne and trek to the legendary cliff-side monastery carved into the mountains. Spiritual awakening guaranteed.", "altitude": "12,320 ft"},
    {"day": 12, "title": "The Grand Return | Purne → Manali via Atal Tunnel", "description": "Final ride through dramatic mountain roads and tunnels back to Manali. Expedition concludes with memories carved into your story forever.", "altitude": "9,200 ft"}
  ]'::jsonb,
  ARRAY[
    'Royal Enfield 411cc / 450cc bike',
    'Backup vehicle with mechanic & marshal',
    'All accommodations (hotels & high-altitude camps)',
    'Mineral water while riding',
    'Oxygen cylinder & comprehensive first aid',
    'Fuel for entire journey',
    'Pickup & drop from Manali',
    'Breakfast & dinner daily',
    'Trekking guide to Phuktal Monastery'
  ],
  ARRAY[
    'Lunch',
    'Drinks',
    'Personal expenses',
    'Trekking gear rental',
    'Travel insurance',
    'Extra costs due to weather or natural disasters'
  ],
  ARRAY[
    'Extreme adventure seekers',
    'Expert riders with high-altitude experience',
    'Professional photographers',
    'Spiritual explorers',
    'Off-road champions',
    'Those seeking ultimate Himalayan conquest'
  ],
  '[
    {"question": "Is this trip really extreme?", "answer": "Yes. This is our most challenging expedition. You''ll cross 15,000+ ft passes, ride in remote deserts, trek to isolated monasteries, and experience true isolation. Only for riders with serious altitude and riding experience."},
    {"question": "What if I get altitude sickness?", "answer": "We have oxygen cylinders, first aid kits, and a trained medical marshal. We acclimatize gradually and have backup plans. However, severe altitude sickness may require evacuation by helicopter."},
    {"question": "Can beginners ride this?", "answer": "Absolutely not. We require minimum 2 years of high-altitude riding experience, comfort with extreme weather, and excellent physical fitness. This is not for beginners."},
    {"question": "What about the weather?", "answer": "The trip runs only May-September. Even then, weather can change dramatically. We monitor closely and reroute if necessary. Your safety is paramount."},
    {"question": "What if a pass is closed?", "answer": "If Shinkhula Pass is closed, we have backup routes. This may add ₹2,000-3,000 per rider and change the itinerary."},
    {"question": "What about the trek to Phuktal?", "answer": "The trek is moderate (3-4 hours round trip). You don''t need mountaineering skills, but good fitness helps. The monastery is worth every step."},
    {"question": "Is this the hardest ride Blacksheep offers?", "answer": "Currently, yes. This combines altitude, distance, remoteness, and spiritual significance. After this, you''ll have conquered the ultimate Himalayan challenge."}
  ]'::jsonb
);

-- Step 5: Verify the data was inserted
-- ============================================================================

SELECT 
  id,
  title,
  region,
  difficulty,
  price,
  days,
  created_at
FROM trips
ORDER BY created_at DESC;
