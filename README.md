# Healthcare-CureLink 🏥

<div align="center">
  <img src="https://ucarecdn.com/233658bf-268b-4875-80ea-8c73a0a8db15/chmm.png" alt="Healthcare-CureLink Banner" height = "8%" width="10%" />
  <p align="center">
    <strong>A modern healthcare patient management system</strong>
  </p>



<p align="center">
    <a href="https://chandramohan-code.wistia.com/medias/n3jzqubwnx" target="_blank">
  <img src="https://img.shields.io/badge/🎥_Video_Demo-Watch_Now-2ea44f?style=for-the-badge" alt="Video Demo" />
</a>
  </p>



  
  <p align="center">
    <a href="https://healthcare-cure-link.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-2ea44f?style=for-the-badge" alt="Live Demo" />
    </a>
    <a href="https://github.com/Chm555556/Healthcare-CureLink" target="_blank">
      <img src="https://img.shields.io/badge/📂_Source_Code-GitHub-181717?style=for-the-badge&logo=github" alt="GitHub" />
    </a>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white" alt="Appwrite" />
  </p>
  <img src="https://ucarecdn.com/7fdc86d3-147c-4d6c-b228-1a39a6874458/Screenshot20250610at124240PM.png" alt="Healthcare-CureLink Banner"   width="100%" />
</div>

---

## 📖 Overview

Healthcare-CureLink is a comprehensive healthcare patient management application designed to streamline the appointment booking process for both patients and healthcare providers. Built with modern web technologies, it offers a seamless experience for managing medical appointments with real-time notifications and administrative controls.

### 🎯 Purpose

The application addresses the common challenges in healthcare appointment management by providing:
- **Simplified booking process** for patients
- **Efficient administrative tools** for healthcare providers
- **Real-time communication** via SMS notifications
- **Comprehensive appointment tracking** and management

---

## ✨ Features

### 👥 Patient Features
- **🆔 User Registration**: Secure patient registration with personal profile creation
- **📅 Appointment Booking**: Schedule appointments with preferred doctors
- **📱 SMS Notifications**: Receive confirmation and reminder messages
- **📄 Document Upload**: Securely upload medical documents and files
- **📊 Appointment History**: View and track all past and upcoming appointments

### 🏥 Administrative Features
- **📋 Appointment Management**: View, confirm, and manage all scheduled appointments
- **✅ Appointment Confirmation**: Approve and schedule pending appointments
- **❌ Appointment Cancellation**: Cancel appointments when necessary
- **📈 Performance Monitoring**: Track application performance with Sentry integration
- **📊 Dashboard Analytics**: Comprehensive overview of appointment statistics

### 🔧 Technical Features
- **📱 Responsive Design**: Optimized for all devices and screen sizes
- **🔒 Secure File Storage**: Integrated with Appwrite for secure file management
- **⚡ Real-time Updates**: Instant synchronization across all devices
- **🔍 Error Tracking**: Comprehensive error monitoring and performance tracking

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | Next.js | React framework for production |
| **Language** | TypeScript | Type-safe JavaScript |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **UI Components** | ShadCN/UI | Pre-built accessible components |
| **Backend** | Appwrite | Backend-as-a-Service platform |
| **SMS Service** | Twilio | SMS notifications and communication |
| **Monitoring** | Sentry | Error tracking and performance monitoring |
| **Deployment** | Vercel | Hosting and deployment platform |

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have the following installed on your system:

- **Git** - [Download & Install Git](https://git-scm.com/)
- **Node.js** (v18 or higher) - [Download & Install Node.js](https://nodejs.org/)
- **npm** or **yarn** - Package manager (comes with Node.js)

### 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Chm555556/Healthcare-CureLink.git
   cd Healthcare-CureLink
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Appwrite Configuration
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   APPWRITE_API_KEY=your_api_key
   
   # Twilio Configuration
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   TWILIO_PHONE_NUMBER=your_twilio_phone
   
   # Sentry Configuration
   SENTRY_DSN=your_sentry_dsn
   ```

4. **Set up Appwrite**
   - Create an Appwrite project
   - Set up the required databases and collections
   - Configure authentication settings
   - Set up file storage buckets

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🏗️ Project Structure

```
Healthcare-CureLink/
├── 📁 app/                 # Next.js 13+ app directory
│   ├── 📁 (root)/         # Root pages
│   ├── 📁 admin/          # Admin dashboard
│   └── 📁 patients/       # Patient portal
├── 📁 components/         # Reusable UI components
│   ├── 📁 forms/          # Form components
│   ├── 📁 table/          # Table components
│   └── 📁 ui/             # ShadCN UI components
├── 📁 lib/                # Utility functions and configurations
│   ├── 📁 appwrite/       # Appwrite configuration
│   ├── 📁 utils/          # Helper functions
│   └── 📁 validations/    # Form validation schemas
├── 📁 public/             # Static assets
├── 📁 types/              # TypeScript type definitions
└── 📁 constants/          # Application constants
```

---

## 🔌 API Integration

### Appwrite Services
- **Authentication**: User registration and login
- **Database**: Patient records and appointment data
- **Storage**: Medical document uploads
- **Real-time**: Live updates for appointments

### Twilio Integration
- **SMS Notifications**: Appointment confirmations and reminders
- **Phone Verification**: Secure patient verification process

---

## 🎬 Video Demo

Click the image below to watch the full video demo :

[![Video Demo Preview](https://ucarecdn.com/fd1c926b-a932-489f-8d9e-e7eceae56599/thumbnail_with_play_button.png)](https://chandramohan-code.wistia.com/medias/n3jzqubwnx)

In this video, you will see:
- An introduction to Healthcare-CureLink.
- Patient registration and profile creation.
- Booking and managing appointments.
- Administrative features and dashboard overview.
---


## 📱 Screenshots

<div align="center">
  <img src="https://github.com/Chm555556/Portfolio/blob/main/public/cu5.avif" height = "5%" width="99%" />
  <p><em>Patient Dashboard - Book and manage appointments</em></p>
  
<img src="https://github.com/Chm555556/Portfolio/blob/main/public/cu6.avif" height = "5%" width="99%" />
  <p><em>Admin Panel - Manage all appointments and patients</em></p>
</div>

---

## 🤝 Contributing

We welcome contributions to Healthcare-CureLink! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### 📝 Contribution Guidelines
- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

---

## 🐛 Issues and Support

If you encounter any issues or have questions:

1. **Check existing issues** on [GitHub Issues](https://github.com/Chm555556/Healthcare-CureLink/issues)
2. **Create a new issue** with detailed information
3. **Provide steps to reproduce** the problem
4. **Include relevant screenshots** or error messages

---


## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **Appwrite** for the comprehensive backend solution
- **Tailwind CSS** for the utility-first CSS framework
- **ShadCN** for the beautiful UI components
- **Twilio** for reliable SMS services
- **Vercel** for seamless deployment

---

## 📞 Contact

**Project Maintainer**: [Chandra Mohan](https://chandramohan.site)

**Project Link**: [https://github.com/Chm555556/Healthcare-CureLink](https://github.com/Chm555556/Healthcare-CureLink)

**Live Demo**: [https://healthcare-cure-link.vercel.app/](https://healthcare-cure-link.vercel.app/)

---

<div align="center">
  <img src="https://ucarecdn.com/233658bf-268b-4875-80ea-8c73a0a8db15/chmm.png" alt="Healthcare-CureLink Banner" height = "10%" width="15%" />
  <p>Built with ❤️ for better healthcare management</p>
  
  <p>
    <a href="#healthcare-curelink-">Back to Top ⬆️</a>
  </p>
</div>
