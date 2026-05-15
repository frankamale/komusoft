"use client";

import { Book, Settings, Users, Database, Shield, HelpCircle, Download, Code, HardDrive, BarChart3 } from 'lucide-react';
import { Breadcrumb } from './components/Breadcrumb';
import { Header } from './components/Header';
import { DocSections } from './components/DocSections';
import { QuickLinks } from './components/QuickLinks';
import { SupportCTA } from './components/SupportCTA';

export function BusinessManagerDocs() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Installation and initial setup guides",
      docs: [
        {
          title: "Installation Guide",
          path: "/products/docs/business-manager/installation",
          description: "Step-by-step installation for Windows servers",
          icon: Download,
          time: "15 min read"
        },
        {
          title: "System Requirements",
          path: "/products/docs/business-manager/requirements",
          description: "Hardware and software prerequisites",
          icon: Settings,
          time: "5 min read"
        },
        {
          title: "Quick Start Guide",
          path: "/products/docs/business-manager/quickstart",
          description: "Get up and running in 30 minutes",
          icon: Book,
          time: "10 min read"
        }
      ]
    },
    {
      title: "Configuration",
      icon: Settings,
      description: "System setup and customization",
      docs: [
        {
          title: "Configuration Guide",
          path: "/products/docs/business-manager/configuration",
          description: "Complete system configuration walkthrough",
          icon: Settings,
          time: "20 min read"
        },
        {
          title: "User Management",
          path: "/products/docs/business-manager/user-management",
          description: "Creating users, roles, and permissions",
          icon: Users,
          time: "12 min read"
        },
        {
          title: "Network Setup",
          path: "/products/docs/business-manager/network",
          description: "LAN configuration for multi-terminal setup",
          icon: Database,
          time: "8 min read"
        }
      ]
    },
    {
      title: "Operations",
      icon: Database,
      description: "Daily operations and workflows",
      docs: [
        {
          title: "POS Operations",
          path: "/products/docs/business-manager/pos-operation",
          description: "Point of sale procedures and best practices",
          icon: Database,
          time: "18 min read"
        },
        {
          title: "Inventory Management",
          path: "/products/docs/business-manager/inventory",
          description: "Stock control and inventory procedures",
          icon: Database,
          time: "15 min read"
        },
        {
          title: "Reporting & Analytics",
          path: "/products/docs/business-manager/reporting",
          description: "Generating reports and business insights",
          icon: BarChart3,
          time: "14 min read"
        }
      ]
    },
    {
      title: "Compliance & Integration",
      icon: Shield,
      description: "Regulatory compliance and system integration",
      docs: [
        {
          title: "EFRIS Integration",
          path: "/products/docs/business-manager/efris",
          description: "URA EFRIS compliance setup and configuration",
          icon: Shield,
          time: "25 min read"
        },
        {
          title: "Payment Integration",
          path: "/products/docs/business-manager/payments",
          description: "Mobile money and payment processor setup",
          icon: Database,
          time: "16 min read"
        },
        {
          title: "API Documentation",
          path: "/products/docs/business-manager/api",
          description: "REST API reference and integration guide",
          icon: Code,
          time: "30 min read"
        }
      ]
    },
    {
      title: "Maintenance & Support",
      icon: HelpCircle,
      description: "System maintenance and troubleshooting",
      docs: [
        {
          title: "Backup & Recovery",
          path: "/products/docs/business-manager/backup",
          description: "Data backup procedures and disaster recovery",
          icon: HardDrive,
          time: "12 min read"
        },
        {
          title: "System Maintenance",
          path: "/products/docs/business-manager/maintenance",
          description: "Regular maintenance tasks and optimization",
          icon: Settings,
          time: "10 min read"
        },
        {
          title: "Troubleshooting Guide",
          path: "/products/docs/business-manager/troubleshooting",
          description: "Common issues and their solutions",
          icon: HelpCircle,
          time: "20 min read"
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Download Center",
      description: "Latest versions and updates",
      path: "/products/business-manager#download",
      icon: Download
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      path: "/products/docs/videos",
      icon: Book
    },
    {
      title: "Community Forum",
      description: "Ask questions and share knowledge",
      path: "/community",
      icon: Users
    },
    {
      title: "Contact Support",
      description: "Get help from our experts",
      path: "/contact",
      icon: HelpCircle
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DocSections docSections={docSections} />
        <QuickLinks quickLinks={quickLinks} />
        <SupportCTA />
      </div>
    </div>
  );
}

export default function BusinessManagerDocsPage() {
  return <BusinessManagerDocs />;
}