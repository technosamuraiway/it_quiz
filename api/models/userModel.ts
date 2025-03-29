import supabase from '../config/db.js'

// Get user by username function (including is_admin field)
export const getUserByUsername = async (username: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('users')
    .select('id, username, password, is_admin')
    .eq('username', username)
    .single()

  if (error) return null // Return null instead of throwing an error for better handling in authController
  return data as User
}
