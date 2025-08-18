# Replit.md - Courier Management System

## Overview

This is a comprehensive courier management system designed for food delivery logistics operations. The system manages couriers, vehicles, payroll, performance analytics, and provides real-time tracking capabilities. It integrates with multiple food delivery platforms including Jahez, HungerStation, and ToYou.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Shadcn/UI components with Tailwind CSS
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight routing
- **Form Handling**: React Hook Form with Zod validation
- **Internationalization**: Custom translation system supporting English and Arabic (RTL)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Passport.js with session-based auth
- **File Processing**: Multer for uploads, ExcelJS for spreadsheet processing
- **AI Integration**: Anthropic Claude for intelligent Excel processing
- **Real-time Communication**: WebSocket for live notifications

### Database Schema
- **Users & Roles**: Role-based access control system
- **Couriers**: Comprehensive courier profiles with performance tracking
- **Vehicles**: Fleet management with delegation capabilities
- **Payroll**: Multi-app payment processing (Jahez, ToYou, HungerStation)
- **Performance**: Analytics and KPI tracking
- **Notifications**: Real-time alert system

## Key Components

### Data Management
- **Bulk Import System**: Excel-based import for couriers and vehicles
- **AI-Powered Processing**: Intelligent data matching and validation
- **Document Management**: Google Drive integration for document storage
- **Data Protection**: Audit logging and backup systems

### Business Logic
- **Multi-App Support**: Handles different food delivery platforms
- **Payroll Automation**: Automated deductions and calculations
- **Performance Analytics**: Real-time KPI tracking and reporting
- **Fleet Management**: Vehicle delegation and tracking

### User Interface
- **Dashboard**: Real-time operations monitoring
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA compliance and keyboard navigation
- **Theming**: Custom brand colors and styling

## Data Flow

1. **User Authentication**: Session-based authentication with role permissions
2. **Data Entry**: Manual forms or bulk Excel import
3. **Processing**: AI validation and data normalization
4. **Storage**: PostgreSQL with audit trails
5. **Analytics**: Real-time dashboard updates
6. **Notifications**: WebSocket-based alerts
7. **Reporting**: Excel export and analytics

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL (cloud-hosted)
- **AI Service**: Anthropic Claude API
- **Cloud Storage**: Google Drive API
- **UI Components**: Radix UI primitives
- **Charts**: Recharts for data visualization

### Development Tools
- **Build Tool**: Vite for fast development
- **TypeScript**: Full type safety
- **ESLint/Prettier**: Code quality and formatting
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Development
- Hot module replacement with Vite
- TypeScript compilation
- Database migrations with Drizzle
- Environment-based configuration

### Production
- Server-side rendering preparation
- Static asset optimization
- Database connection pooling
- Session store configuration

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `ANTHROPIC_API_KEY`: AI service authentication
- `GOOGLE_DRIVE_*`: Cloud storage credentials
- `SESSION_SECRET`: Authentication security

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Recent Updates

### January 11, 2025 - User Management Enhancements
- **Delete User Feature**: Made delete user functionality available to all authenticated users
- **Detailed Permissions System**: Implemented granular permission control for all system modules
  - Added permissions for specific actions (add, edit, delete) on each page
  - Created permissions manager UI for CEO, Owner, and CTO roles
  - Updated database with detailed permissions for all roles
  - City Supervisors cannot add vehicles in Fleet Management (as requested)
- **UI Improvements**: Separated edit/password functions from delete for better visibility

### January 18, 2025 - City-Based Filtering for Supervisors & Safe Management Updates
- **Supervisor City Assignment**: Added `supervisorCity` field to user schema for city supervisors
- **City-Based Data Filtering**: Implemented filtering across all major modules:
  - Couriers: Supervisors only see couriers from their assigned city
  - Vehicles: Supervisors only see vehicles from their assigned city
  - Performance Data: Supervisors only see performance data for couriers in their city
  - Dashboard Stats: All statistics are filtered by supervisor's city
- **API Enhancements**: Updated all relevant API endpoints to check user's supervisorCity and filter data accordingly
- **User Form Updates**: Added city selection dropdown when creating/editing city supervisor users
- **Safe Management Enhancement**: Enhanced CitySafe page with total receipts and payments calculation for each safe type
  - Updated balance cards to display opening balance, total receipts (green), total payments (red), and current balance
  - Renamed "City Safe" to "Safe Management" throughout the application
  - Fixed authentication issues for transaction creation

### January 20, 2025 - Accommodation Management Enhancements  
- **Critical API Fixes**: Fixed API parameter ordering issue (corrected to apiRequest(method, url, data))
- **Database Schema Updates**: 
  - Added `accommodation_payments` table for rent payment tracking
  - Enhanced `accommodations` table with contract management fields (contractUrl, rentFrequency, nextRentDueDate)
- **Payment Tracking System**: Implemented comprehensive rent payment management with automatic due date calculation
- **Storage Layer Updates**: Added methods for accommodation payment CRUD operations
- **API Routes**: Added endpoints for accommodation payment management

### January 20, 2025 - Secure Cloud Storage Implementation
- **Object Storage Integration**: Implemented Replit Object Storage for secure file handling
  - Created ObjectStorageService for file operations
  - Implemented ACL-based access control for file security
  - Added ObjectUploader component for client-side uploads
- **Security Features**:
  - All files stored with private visibility by default
  - User-based ownership tracking
  - Secure presigned URLs for direct uploads
- **File Upload Routes**: Added comprehensive API endpoints for file upload/download
- **Accommodation Management**: Integrated secure contract document uploads with cloud storage

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
- January 11, 2025. Added delete users for all, implemented detailed permissions system
- January 18, 2025. Implemented city-based filtering for supervisors, enhanced Safe Management with receipts/payments totals
- January 20, 2025. Fixed critical API issues, added accommodation payment tracking system, implemented secure cloud storage
```