
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          content: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users2"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          id: string
          name: string | null
          user_name: string | null
        }
        Insert: {
          avatar_url?: string | null
          id: string
          name?: string | null
          user_name?: string | null
        }
        Update: {
          avatar_url?: string | null
          id?: string
          name?: string | null
          user_name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      users2: {
        Row: {
          avatar_url: string | null
          id: string | null
          name: string | null
          user_name: string | null
        }
        Insert: {
          avatar_url?: never
          id?: string | null
          name?: never
          user_name?: never
        }
        Update: {
          avatar_url?: never
          id?: string | null
          name?: never
          user_name?: never
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]