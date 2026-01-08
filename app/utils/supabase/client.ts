import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://neamfrwkhhcexlqbszpp.supabase.co'
const supabaseAnonKey = 'sb_publishable_jEnb2rAkzJb8GsKIjrmvpw_2TDPMfSF'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
