//db.ts
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw new Error('Missing Supabase environment variables')
}

const supabase = createClient(
  process.env.SUPABASE_URL!, // Supabase URL from your project settings
  process.env.SUPABASE_KEY!, {
    global:{
      headers: {
        Authorization: `Bearer ${process.env.SUPABASE_KEY}`
      }
    }
  }
)

export default supabase
