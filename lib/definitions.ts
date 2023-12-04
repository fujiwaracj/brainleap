import type { Database } from './database.types'

export type Tables<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Row']

// TODO: Find a fix or delete
export type Enums<T extends keyof Database['public']['Enums']> =
	Database['public']['Enums'][T]['Enum']
