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
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      active_tables: {
        Row: {
          covers: number | null
          id: number
          order_type: string | null
          orders: Json | null
          pending_receipt_number: string | null
          table_number: string | null
          table_status: string | null
          transaction_id: string | null
          updated_at: string | null
        }
        Insert: {
          covers?: number | null
          id?: number
          order_type?: string | null
          orders?: Json | null
          pending_receipt_number?: string | null
          table_number?: string | null
          table_status?: string | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Update: {
          covers?: number | null
          id?: number
          order_type?: string | null
          orders?: Json | null
          pending_receipt_number?: string | null
          table_number?: string | null
          table_status?: string | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_audit_log: {
        Row: {
          created_at: string | null
          id: string
          raw_output: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          raw_output?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          raw_output?: string | null
        }
        Relationships: []
      }
      atoa_payments: {
        Row: {
          amount: number
          atoa_fee: number | null
          atoa_request_id: string | null
          id: string
          net_amount: number | null
          settled_at: string | null
          status: string | null
          transaction_id: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          atoa_fee?: number | null
          atoa_request_id?: string | null
          id?: string
          net_amount?: number | null
          settled_at?: string | null
          status?: string | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          atoa_fee?: number | null
          atoa_request_id?: string | null
          id?: string
          net_amount?: number | null
          settled_at?: string | null
          status?: string | null
          transaction_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      backup_bookings_march_03: {
        Row: {
          booking_date: string | null
          covers: number | null
          created_at: string | null
          customer_name: string | null
          id: string | null
          revenue_estimate: number | null
          status: string | null
        }
        Insert: {
          booking_date?: string | null
          covers?: number | null
          created_at?: string | null
          customer_name?: string | null
          id?: string | null
          revenue_estimate?: number | null
          status?: string | null
        }
        Update: {
          booking_date?: string | null
          covers?: number | null
          created_at?: string | null
          customer_name?: string | null
          id?: string | null
          revenue_estimate?: number | null
          status?: string | null
        }
        Relationships: []
      }
      booking_slots: {
        Row: {
          created_at: string
          day_of_week: number
          id: string
          is_active: boolean
          slot_label: string
          slot_value: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          day_of_week: number
          id?: string
          is_active?: boolean
          slot_label: string
          slot_value: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          day_of_week?: number
          id?: string
          is_active?: boolean
          slot_label?: string
          slot_value?: string
          sort_order?: number
        }
        Relationships: []
      }
      bookings: {
        Row: {
          booking_date: string | null
          covers: number | null
          created_at: string | null
          customer_name: string | null
          id: string
          revenue_estimate: number | null
          status: string | null
        }
        Insert: {
          booking_date?: string | null
          covers?: number | null
          created_at?: string | null
          customer_name?: string | null
          id?: string
          revenue_estimate?: number | null
          status?: string | null
        }
        Update: {
          booking_date?: string | null
          covers?: number | null
          created_at?: string | null
          customer_name?: string | null
          id?: string
          revenue_estimate?: number | null
          status?: string | null
        }
        Relationships: []
      }
      catering_leads: {
        Row: {
          created_at: string
          email: string
          estimated_guests: number | null
          event_type: string
          id: string
          marketing_params: Json | null
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          estimated_guests?: number | null
          event_type: string
          id?: string
          marketing_params?: Json | null
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          estimated_guests?: number | null
          event_type?: string
          id?: string
          marketing_params?: Json | null
          name?: string
        }
        Relationships: []
      }
      daily_summaries: {
        Row: {
          card_total: number | null
          cash_total: number | null
          date: string
          id: string
          is_finalized: boolean | null
          monzo_total: number | null
          total_gross: number | null
          total_net: number | null
          total_vat: number | null
        }
        Insert: {
          card_total?: number | null
          cash_total?: number | null
          date?: string
          id?: string
          is_finalized?: boolean | null
          monzo_total?: number | null
          total_gross?: number | null
          total_net?: number | null
          total_vat?: number | null
        }
        Update: {
          card_total?: number | null
          cash_total?: number | null
          date?: string
          id?: string
          is_finalized?: boolean | null
          monzo_total?: number | null
          total_gross?: number | null
          total_net?: number | null
          total_vat?: number | null
        }
        Relationships: []
      }
      director_loan_account: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          running_balance: number
          transaction_type: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          running_balance: number
          transaction_type: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          running_balance?: number
          transaction_type?: string
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount: number | null
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          organization_id: string | null
          status: string | null
        }
        Insert: {
          amount?: number | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          organization_id?: string | null
          status?: string | null
        }
        Update: {
          amount?: number | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          organization_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      financial_ledger: {
        Row: {
          audit_hash: string | null
          bank_transaction_id: string | null
          category: string | null
          created_at: string | null
          description: string | null
          document_url: string | null
          gross_amount: number
          id: string
          invoice_reference: string | null
          metadata: Json | null
          net_amount: number | null
          order_type: string | null
          payment_method: string | null
          reconciled: boolean | null
          status: Database["public"]["Enums"]["audit_status"] | null
          supplier_name: string | null
          table_id: number | null
          table_number: number | null
          transaction_date: string
          type: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount: number | null
        }
        Insert: {
          audit_hash?: string | null
          bank_transaction_id?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          document_url?: string | null
          gross_amount: number
          id?: string
          invoice_reference?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          reconciled?: boolean | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          supplier_name?: string | null
          table_id?: number | null
          table_number?: number | null
          transaction_date?: string
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Update: {
          audit_hash?: string | null
          bank_transaction_id?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          document_url?: string | null
          gross_amount?: number
          id?: string
          invoice_reference?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          reconciled?: boolean | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          supplier_name?: string | null
          table_id?: number | null
          table_number?: number | null
          transaction_date?: string
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Relationships: []
      }
      organizations: {
        Row: {
          anchor_date: string | null
          created_at: string | null
          id: string
          name: string
          settings: Json | null
          slug: string
          starting_vat: number | null
          treasury_anchor_r: number | null
        }
        Insert: {
          anchor_date?: string | null
          created_at?: string | null
          id?: string
          name: string
          settings?: Json | null
          slug: string
          starting_vat?: number | null
          treasury_anchor_r?: number | null
        }
        Update: {
          anchor_date?: string | null
          created_at?: string | null
          id?: string
          name?: string
          settings?: Json | null
          slug?: string
          starting_vat?: number | null
          treasury_anchor_r?: number | null
        }
        Relationships: []
      }
      reservations: {
        Row: {
          created_at: string
          email: string
          guest_name: string
          id: string
          party_size: number
          source: string | null
          time_slot: string
        }
        Insert: {
          created_at?: string
          email: string
          guest_name: string
          id?: string
          party_size: number
          source?: string | null
          time_slot: string
        }
        Update: {
          created_at?: string
          email?: string
          guest_name?: string
          id?: string
          party_size?: number
          source?: string | null
          time_slot?: string
        }
        Relationships: []
      }
      restaurant_tables: {
        Row: {
          capacity: number | null
          created_at: string
          id: string
          table_name: string | null
          table_number: number
        }
        Insert: {
          capacity?: number | null
          created_at?: string
          id?: string
          table_name?: string | null
          table_number: number
        }
        Update: {
          capacity?: number | null
          created_at?: string
          id?: string
          table_name?: string | null
          table_number?: number
        }
        Relationships: []
      }
      revenue_records: {
        Row: {
          amount: number | null
          created_at: string | null
          id: string
          notes: string | null
          organization_id: string | null
          period_end: string | null
          period_start: string | null
          product_cost: number | null
          vat_amount: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          id?: string
          notes?: string | null
          organization_id?: string | null
          period_end?: string | null
          period_start?: string | null
          product_cost?: number | null
          vat_amount?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          id?: string
          notes?: string | null
          organization_id?: string | null
          period_end?: string | null
          period_start?: string | null
          product_cost?: number | null
          vat_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "revenue_records_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_ledger: {
        Row: {
          created_at: string | null
          gross_sales: number
          guests: number | null
          id: string
          is_refund: boolean | null
          items: Json
          original_tx_id: string | null
          payment_split: Json
          table_id: string
          tips_total: number | null
          vat_total: number
        }
        Insert: {
          created_at?: string | null
          gross_sales: number
          guests?: number | null
          id?: string
          is_refund?: boolean | null
          items: Json
          original_tx_id?: string | null
          payment_split: Json
          table_id: string
          tips_total?: number | null
          vat_total: number
        }
        Update: {
          created_at?: string | null
          gross_sales?: number
          guests?: number | null
          id?: string
          is_refund?: boolean | null
          items?: Json
          original_tx_id?: string | null
          payment_split?: Json
          table_id?: string
          tips_total?: number | null
          vat_total?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_ledger_original_tx_id_fkey"
            columns: ["original_tx_id"]
            isOneToOne: false
            referencedRelation: "sales_ledger"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          id: string
          key: string
          updated_at: string | null
          user_id: string | null
          value: Json | null
        }
        Insert: {
          id?: string
          key: string
          updated_at?: string | null
          user_id?: string | null
          value?: Json | null
        }
        Update: {
          id?: string
          key?: string
          updated_at?: string | null
          user_id?: string | null
          value?: Json | null
        }
        Relationships: []
      }
      siphoned_invoices: {
        Row: {
          amount: number | null
          created_at: string | null
          id: string
          storage_path: string | null
          tenant_id: string | null
          vendor: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          id?: string
          storage_path?: string | null
          tenant_id?: string | null
          vendor?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          id?: string
          storage_path?: string | null
          tenant_id?: string | null
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "siphoned_invoices_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      survival_walls: {
        Row: {
          current_balance: number | null
          id: number
          name: string
          target_amount: number
        }
        Insert: {
          current_balance?: number | null
          id?: number
          name: string
          target_amount: number
        }
        Update: {
          current_balance?: number | null
          id?: number
          name?: string
          target_amount?: number
        }
        Relationships: []
      }
      system_audit: {
        Row: {
          created_at: string | null
          id: string
          mutation_type: string
          payload_hash: string
          record_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          mutation_type: string
          payload_hash: string
          record_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          mutation_type?: string
          payload_hash?: string
          record_id?: string
        }
        Relationships: []
      }
      system_control: {
        Row: {
          force_refresh_timestamp: string | null
          id: number
          is_active: boolean | null
          required_version: string
          tenant_id: string | null
        }
        Insert: {
          force_refresh_timestamp?: string | null
          id: number
          is_active?: boolean | null
          required_version?: string
          tenant_id?: string | null
        }
        Update: {
          force_refresh_timestamp?: string | null
          id?: number
          is_active?: boolean | null
          required_version?: string
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "system_control_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          created_at: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: string
          user_id?: string | null
        }
        Relationships: []
      }
      vendor_intelligence: {
        Row: {
          created_at: string | null
          default_category: string | null
          id: string
          is_active: boolean | null
          organization_id: string | null
          reclaim_weight: number | null
          vat_rate: number | null
          vendor_name: string
        }
        Insert: {
          created_at?: string | null
          default_category?: string | null
          id?: string
          is_active?: boolean | null
          organization_id?: string | null
          reclaim_weight?: number | null
          vat_rate?: number | null
          vendor_name: string
        }
        Update: {
          created_at?: string | null
          default_category?: string | null
          id?: string
          is_active?: boolean | null
          organization_id?: string | null
          reclaim_weight?: number | null
          vat_rate?: number | null
          vendor_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_intelligence_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      absolute_truth_monitor: {
        Row: {
          audit_hash: string | null
          created_at: string | null
          description: string | null
          gross_amount: number | null
          id: string | null
          metadata: Json | null
          net_amount: number | null
          order_type: string | null
          payment_method: string | null
          status: Database["public"]["Enums"]["audit_status"] | null
          table_number: number | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount: number | null
        }
        Insert: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Update: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Relationships: []
      }
      accountant_audit_ledger: {
        Row: {
          applied_vat_rate: number | null
          created_at: string | null
          expense_type: string | null
          recapturable_vat: number | null
          receipt_image_url: string | null
          total_amount: number | null
          vendor: string | null
        }
        Relationships: []
      }
      accruals: {
        Row: {
          audit_hash: string | null
          created_at: string | null
          description: string | null
          gross_amount: number | null
          id: string | null
          metadata: Json | null
          net_amount: number | null
          order_type: string | null
          payment_method: string | null
          status: Database["public"]["Enums"]["audit_status"] | null
          table_number: number | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount: number | null
        }
        Insert: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Update: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Relationships: []
      }
      daily_z_report: {
        Row: {
          gross_revenue: number | null
          margin_recaptured: number | null
          refund_count: number | null
          shift_date: string | null
          tips_total: number | null
          total_atoa: number | null
          total_card: number | null
          total_cash: number | null
          total_covers: number | null
          vat_collected: number | null
        }
        Relationships: []
      }
      logic_stress_test: {
        Row: {
          audit_hash: string | null
          created_at: string | null
          description: string | null
          gross_amount: number | null
          id: string | null
          metadata: Json | null
          net_amount: number | null
          order_type: string | null
          payment_method: string | null
          status: Database["public"]["Enums"]["audit_status"] | null
          table_number: number | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount: number | null
        }
        Insert: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Update: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Relationships: []
      }
      revenues: {
        Row: {
          audit_hash: string | null
          created_at: string | null
          description: string | null
          gross_amount: number | null
          id: string | null
          metadata: Json | null
          net_amount: number | null
          order_type: string | null
          payment_method: string | null
          status: Database["public"]["Enums"]["audit_status"] | null
          table_number: number | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount: number | null
        }
        Insert: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Update: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Relationships: []
      }
      shift_audit_summary: {
        Row: {
          gross_total: number | null
          net_sales: number | null
          tips_total: number | null
          total_atoa: number | null
          total_card: number | null
          total_cash: number | null
          total_covers: number | null
          vat_total: number | null
        }
        Relationships: []
      }
      wastages: {
        Row: {
          audit_hash: string | null
          created_at: string | null
          description: string | null
          gross_amount: number | null
          id: string | null
          metadata: Json | null
          net_amount: number | null
          order_type: string | null
          payment_method: string | null
          status: Database["public"]["Enums"]["audit_status"] | null
          table_number: number | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount: number | null
        }
        Insert: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Update: {
          audit_hash?: string | null
          created_at?: string | null
          description?: string | null
          gross_amount?: number | null
          id?: string | null
          metadata?: Json | null
          net_amount?: number | null
          order_type?: string | null
          payment_method?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          table_number?: number | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"] | null
          vat_amount?: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculate_s_number: { Args: { p_organization_id: string }; Returns: Json }
      calculate_safe_to_invest: {
        Args: { org_id: string }
        Returns: {
          dla_siphon: number
          safe_to_invest: number
          survival_wall: number
          total_revenue: number
          vat_provision: number
        }[]
      }
      clear_table_orders: {
        Args: { target_table_number: string }
        Returns: undefined
      }
      digest: { Args: { algorithm: string; data: string }; Returns: string }
      get_reservation_availability: {
        Args: { _date: string }
        Returns: {
          booked_seats: number
          time_slot: string
        }[]
      }
      process_refund: { Args: { target_tx_id: string }; Returns: string }
      settle_and_clear_v2: {
        Args: {
          gross_val: number
          meta_data: Json
          order_type_val: string
          pay_method: string
          target_table_id: number
          vat_val: number
        }
        Returns: undefined
      }
      settle_and_clear_v3: {
        Args: {
          covers_val: number
          gross_val: number
          meta_data: Json
          order_type_val: string
          pay_method: string
          target_table_id: number
          vat_val: number
        }
        Returns: undefined
      }
    }
    Enums: {
      audit_status: "raw" | "verified" | "disputed" | "reconciled"
      transaction_type:
        | "revenue"
        | "expense"
        | "accrual"
        | "dla_movement"
        | "sale"
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
    Enums: {
      audit_status: ["raw", "verified", "disputed", "reconciled"],
      transaction_type: [
        "revenue",
        "expense",
        "accrual",
        "dla_movement",
        "sale",
      ],
    },
  },
} as const
