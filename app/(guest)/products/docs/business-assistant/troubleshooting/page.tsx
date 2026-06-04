"use client";

import { ArrowLeft, AlertTriangle, Cloud, Database, Users, Shield, RefreshCw, HelpCircle, Mail, Lock, Monitor } from 'lucide-react';
import Link from 'next/link';

export function BusinessAssistantTroubleshooting() {
  const issues = [
    {
      category: "Account & Login",
      icon: Mail,
      problems: [
        {
          title: "Can't access account after signup",
          symptoms: ["Login page shows error", "Password reset not working", "Account appears inactive"],
          solutions: [
            "Verify email address was confirmed during signup",
            "Check spam/junk folder for verification email",
            "Try password reset from login page",
            "Contact support if account shows as inactive",
            "Clear browser cache and cookies"
          ]
        },
        {
          title: "Two-factor authentication issues",
          symptoms: ["Can't receive 2FA codes", "Authenticator app not working", "Locked out of account"],
          solutions: [
            "Ensure phone has internet connection for SMS codes",
            "Check that authenticator app is properly configured",
            "Use backup codes if available",
            "Contact support for account recovery",
            "Disable 2FA temporarily through account recovery"
          ]
        }
      ]
    },
    {
      category: "Performance & Loading",
      icon: RefreshCw,
      problems: [
        {
          title: "Slow loading times",
          symptoms: ["Pages take long to load", "Dashboard unresponsive", "Reports timeout"],
          solutions: [
            "Check internet connection speed (minimum 5 Mbps)",
            "Clear browser cache and cookies",
            "Try using a different browser",
            "Disable browser extensions temporarily",
            "Check if it's a widespread issue on status page"
          ]
        },
        {
          title: "Application freezing or crashing",
          symptoms: ["Browser tab becomes unresponsive", "Application stops responding", "Error messages displayed"],
          solutions: [
            "Refresh the browser page",
            "Clear browser cache and local storage",
            "Try accessing from an incognito/private window",
            "Update browser to latest version",
            "Check browser console for error messages"
          ]
        }
      ]
    },
    {
      category: "Data & Synchronization",
      icon: Database,
      problems: [
        {
          title: "Data not saving or updating",
          symptoms: ["Changes not reflected", "Save button not working", "Data appears to revert"],
          solutions: [
            "Check internet connection stability",
            "Refresh the page and try again",
            "Clear browser cache and cookies",
            "Try using a different browser or device",
            "Contact support if issue persists across devices"
          ]
        },
        {
          title: "Import/export failures",
          symptoms: ["CSV upload fails", "Data export incomplete", "File format errors"],
          solutions: [
            "Verify file format matches template",
            "Check file size limits (maximum 10MB)",
            "Ensure CSV headers are correct",
            "Try smaller batches for large imports",
            "Contact support for complex data migrations"
          ]
        }
      ]
    },
    {
      category: "Team Collaboration",
      icon: Users,
      problems: [
        {
          title: "Team member invitation issues",
          symptoms: ["Invites not being received", "Users can't accept invitations", "Permission errors"],
          solutions: [
            "Verify email addresses are correct",
            "Check spam/junk folders for invitations",
            "Ensure domain isn't blocking our emails",
            "Try resending invitation from team settings",
            "Contact support for bulk invitation assistance"
          ]
        },
        {
          title: "Permission and access problems",
          symptoms: ["Can't access certain features", "Actions blocked by permissions", "Role changes not taking effect"],
          solutions: [
            "Check user role assignments in team settings",
            "Refresh browser after permission changes",
            "Log out and log back in to refresh session",
            "Verify user is assigned to correct projects",
            "Contact administrator for role adjustments"
          ]
        }
      ]
    },
    {
      category: "Integrations & API",
      icon: Cloud,
      problems: [
        {
          title: "API connection failures",
          symptoms: ["API calls returning errors", "Webhook deliveries failing", "Integration sync stopped"],
          solutions: [
            "Verify API credentials are correct",
            "Check API rate limits haven't been exceeded",
            "Ensure webhook endpoints are accessible",
            "Review API documentation for correct endpoints",
            "Regenerate API keys if compromised"
          ]
        },
        {
          title: "Payment gateway issues",
          symptoms: ["Payments not processing", "Gateway connection errors", "Transaction failures"],
          solutions: [
            "Verify payment gateway credentials",
            "Check gateway service status",
            "Ensure correct currency and amounts",
            "Test with different payment methods",
            "Contact gateway support for configuration help"
          ]
        }
      ]
    },
    {
      category: "Browser & Device",
      icon: Monitor,
      problems: [
        {
          title: "Browser compatibility issues",
          symptoms: ["Features not working", "Display problems", "JavaScript errors"],
          solutions: [
            "Update browser to latest version",
            "Try using Chrome or Firefox",
            "Disable browser extensions",
            "Clear browser cache and cookies",
            "Check browser console for JavaScript errors"
          ]
        },
        {
          title: "Mobile app problems",
          symptoms: ["App crashes", "Sync issues", "Push notifications not working"],
          solutions: [
            "Update app to latest version",
            "Restart device and try again",
            "Check mobile data/WiFi connection",
            "Clear app cache and data",
            "Reinstall app if problems persist"
          ]
        }
      ]
    }
  ];

  const diagnosticTools = [
    {
      name: "Browser Developer Tools",
      description: "Check console for JavaScript errors and network issues",
      instructions: "Press F12 → Console tab → Look for error messages"
    },
    {
      name: "Network Connectivity Test",
      description: "Verify internet connection and speed",
      instructions: "Visit fast.com or speedtest.net to test connection"
    },
    {
      name: "Browser Incognito Mode",
      description: "Test without extensions or cached data",
      instructions: "Open incognito/private window and try accessing app"
    },
    {
      name: "System Status Page",
      description: "Check for service outages or maintenance",
      instructions: "Visit status.komusoft.com for real-time service status"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/business-assistant" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-assistant" className="hover:text-[#05ADEE]">Business Assistant</Link>
            <span>/</span>
            <span className="text-[#05ADEE]">Troubleshooting Guide</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/products/docs/business-assistant"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Troubleshooting Guide</h1>
              <p className="text-gray-600">Common issues and solutions for Business Assistant</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-red-800 font-semibold">Need immediate help?</p>
                <p className="text-red-700 text-sm">
                  Contact our support team at <a href="tel:+256414320000" className="underline">+256 414 320 000</a> or
                  email <a href="mailto:support@komusoft.com" className="underline">support@komusoft.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Fixes */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Quick Fixes for Common Issues</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Login Problems</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Clear browser cache and cookies</li>
                <li>Try incognito/private browsing</li>
                <li>Check email for verification</li>
                <li>Use password reset if needed</li>
              </ol>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Performance Issues</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Check internet connection speed</li>
                <li>Refresh browser page</li>
                <li>Close other browser tabs</li>
                <li>Try different browser</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Troubleshooting Categories */}
        <div className="space-y-8 mb-12">
          {issues.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-[#05ADEE]" />
                <h2 className="text-xl font-bold text-gray-900">{category.category}</h2>
              </div>

              <div className="space-y-6">
                {category.problems.map((problem, problemIndex) => (
                  <div key={problemIndex} className="border-l-4 border-gray-200 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-700 mb-2">Symptoms:</h4>
                      <ul className="space-y-1">
                        {problem.symptoms.map((symptom, symptomIndex) => (
                          <li key={symptomIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2"></div>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Solutions:</h4>
                      <ol className="space-y-2">
                        {problem.solutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                            <span className="bg-[#05ADEE] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                              {solutionIndex + 1}
                            </span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Tools */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Diagnostic Tools</h2>
          <p className="text-gray-700 mb-6">
            Use these tools to diagnose issues before contacting support.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {diagnosticTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                <div className="bg-gray-900 rounded p-2 text-gray-100 font-mono text-xs">
                  {tool.instructions}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Prevention Best Practices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <Shield className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
              <p className="text-gray-600 text-sm">Keep browsers and devices updated</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Lock className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Strong Passwords</h3>
              <p className="text-gray-600 text-sm">Use unique, complex passwords</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Cloud className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Data Backup</h3>
              <p className="text-gray-600 text-sm">Regular data exports and backups</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Users className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Team Training</h3>
              <p className="text-gray-600 text-sm">Regular training on best practices</p>
            </div>
          </div>
        </div>

        {/* Support Resources */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-[#05ADEE]" />
            <h2 className="text-xl font-bold text-gray-900">Additional Support Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact Support</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>Email:</strong> support@komusoft.com (24/7)</li>
                <li><strong>Phone:</strong> +256 414 320 000 (Mon-Fri, 9AM-5PM EAT)</li>
                <li><strong>Live Chat:</strong> Available in dashboard</li>
                <li><strong>Response Time:</strong> Within 2 hours for paid plans</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">What to Include</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Detailed description of the issue</li>
                <li>• Browser and device information</li>
                <li>• Screenshots if applicable</li>
                <li>• Steps to reproduce the problem</li>
                <li>• Your account email address</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessAssistantTroubleshootingPage() {
  return <BusinessAssistantTroubleshooting />;
}