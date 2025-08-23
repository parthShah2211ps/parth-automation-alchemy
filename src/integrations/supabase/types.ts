export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      admin_user: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          password: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          password?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          password?: string | null
        }
        Relationships: []
      }
      downloads: {
        Row: {
          created_at: string | null
          description: string | null
          download_count: number | null
          file_name: string
          file_type: string | null
          file_url: string
          id: string
          is_active: boolean | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          download_count?: number | null
          file_name: string
          file_type?: string | null
          file_url: string
          id?: string
          is_active?: boolean | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          download_count?: number | null
          file_name?: string
          file_type?: string | null
          file_url?: string
          id?: string
          is_active?: boolean | null
        }
        Relationships: []
      }
      experience: {
        Row: {
          achievements: string[] | null
          company: string
          created_at: string | null
          display_order: number | null
          end_date: string | null
          id: string
          is_current: boolean | null
          location: string | null
          responsibilities: string[] | null
          role: string
          start_date: string | null
          type: string | null
        }
        Insert: {
          achievements?: string[] | null
          company: string
          created_at?: string | null
          display_order?: number | null
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          location?: string | null
          responsibilities?: string[] | null
          role: string
          start_date?: string | null
          type?: string | null
        }
        Update: {
          achievements?: string[] | null
          company?: string
          created_at?: string | null
          display_order?: number | null
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          location?: string | null
          responsibilities?: string[] | null
          role?: string
          start_date?: string | null
          type?: string | null
        }
        Relationships: []
      }
      inquiries: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_read: boolean | null
          is_replied: boolean | null
          message: string
          name: string
          phone: string | null
          subject: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          is_read?: boolean | null
          is_replied?: boolean | null
          message: string
          name: string
          phone?: string | null
          subject?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_read?: boolean | null
          is_replied?: boolean | null
          message?: string
          name?: string
          phone?: string | null
          subject?: string | null
        }
        Relationships: []
      }
      my_profile: {
        Row: {
          automations_built: number | null
          bio: string | null
          email: string | null
          github_url: string | null
          hours_saved: number | null
          id: string
          linkedin_url: string | null
          location: string | null
          medium_url: string | null
          name: string | null
          phone: string | null
          product_skills: string[] | null
          projects_completed: number | null
          technical_skills: string[] | null
          title: string | null
          tools: string[] | null
          updated_at: string | null
          users_served: number | null
          years_experience: number | null
        }
        Insert: {
          automations_built?: number | null
          bio?: string | null
          email?: string | null
          github_url?: string | null
          hours_saved?: number | null
          id?: string
          linkedin_url?: string | null
          location?: string | null
          medium_url?: string | null
          name?: string | null
          phone?: string | null
          product_skills?: string[] | null
          projects_completed?: number | null
          technical_skills?: string[] | null
          title?: string | null
          tools?: string[] | null
          updated_at?: string | null
          users_served?: number | null
          years_experience?: number | null
        }
        Update: {
          automations_built?: number | null
          bio?: string | null
          email?: string | null
          github_url?: string | null
          hours_saved?: number | null
          id?: string
          linkedin_url?: string | null
          location?: string | null
          medium_url?: string | null
          name?: string | null
          phone?: string | null
          product_skills?: string[] | null
          projects_completed?: number | null
          technical_skills?: string[] | null
          title?: string | null
          tools?: string[] | null
          updated_at?: string | null
          users_served?: number | null
          years_experience?: number | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          category: string | null
          created_at: string | null
          demo_url: string | null
          description: string | null
          display_order: number | null
          end_date: string | null
          github_url: string | null
          id: string
          image_url: string | null
          impact_metric: string | null
          is_featured: boolean | null
          start_date: string | null
          tech_stack: string[] | null
          title: string
          users_count: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          display_order?: number | null
          end_date?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          impact_metric?: string | null
          is_featured?: boolean | null
          start_date?: string | null
          tech_stack?: string[] | null
          title: string
          users_count?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          display_order?: number | null
          end_date?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          impact_metric?: string | null
          is_featured?: boolean | null
          start_date?: string | null
          tech_stack?: string[] | null
          title?: string
          users_count?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
