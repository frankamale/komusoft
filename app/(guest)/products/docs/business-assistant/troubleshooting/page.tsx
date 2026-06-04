"use client";

import { AlertTriangle, Cloud, Database, Users, Shield, RefreshCw, HelpCircle, Mail, Lock, Monitor } from 'lucide-react';
import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-assistant";

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
            "Verify the email address was confirmed during signup",
            "Check spam/junk folder for the verification email",
            "Try a password reset from the login page",
            "Clear browser cache and cookies",
            "Contact support if the account shows as inactive",
          ],
        },
        {
          title: "Two-factor authentication issues",
          symptoms: ["Can't receive 2FA codes", "Authenticator app not working", "Locked out of account"],
          solutions: [
            "Ensure the phone has a connection for SMS codes",
            "Check that the authenticator app is configured correctly",
            "Use backup codes if available",
            "Contact support for account recovery",
          ],
        },
      ],
    },
    {
      category: "Performance & Loading",
      icon: RefreshCw,
      problems: [
        {
          title: "Slow loading times",
          symptoms: ["Pages take long to load", "Dashboard unresponsive", "Reports timeout"],
          solutions: [
            "Check internet connection speed (2 Mbps minimum)",
            "Clear browser cache and cookies",
            "Try a different browser",
            "Disable browser extensions temporarily",
            "Check the status page for a widespread issue",
          ],
        },
        {
          title: "Application freezing or crashing",
          symptoms: ["Browser tab unresponsive", "Application stops responding", "Error messages displayed"],
          solutions: [
            "Refresh the browser page",
            "Clear browser cache and local storage",
            "Try an incognito/private window",
            "Update the browser to the latest version",
            "Check the browser console for error messages",
          ],
        },
      ],
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
            "Try a different browser or device",
            "Contact support if it persists across devices",
          ],
        },
        {
          title: "Offline sync or import/export failures",
          symptoms: ["Offline changes not syncing", "CSV upload fails", "File format errors"],
          solutions: [
            "Reconnect the device so offline changes can sync",
            "Verify the file format matches the template",
            "Check file size limits (maximum 10MB)",
            "Ensure CSV headers are correct",
            "Try smaller batches for large imports",
          ],
        },
      ],
    },
    {
      category: "Team Collaboration",
      icon: Users,
      problems: [
        {
          title: "Team member invitation issues",
          symptoms: ["Invites not received", "Users can't accept invitations", "Permission errors"],
          solutions: [
            "Verify email addresses are correct",
            "Check spam/junk folders for invitations",
            "Ensure the domain isn't blocking our emails",
            "Resend the invitation from team settings",
            "Contact support for bulk invitation help",
          ],
        },
        {
          title: "Permission and access problems",
          symptoms: ["Can't access certain features", "Actions blocked by permissions", "Role changes not taking effect"],
          solutions: [
            "Check role assignments in team settings",
            "Refresh the browser after permission changes",
            "Sign out and back in to refresh the session",
            "Verify the user is assigned to the correct projects",
            "Ask an administrator to adjust the role",
          ],
        },
      ],
    },
    {
      category: "Integrations & Payments",
      icon: Cloud,
      problems: [
        {
          title: "API connection failures",
          symptoms: ["API calls returning errors", "Webhook deliveries failing", "Integration sync stopped"],
          solutions: [
            "Verify API credentials are correct",
            "Check that API rate limits have not been exceeded",
            "Ensure webhook endpoints are accessible",
            "Review the API documentation for correct endpoints",
            "Regenerate API keys if compromised",
          ],
        },
        {
          title: "Payment gateway issues",
          symptoms: ["Payments not processing", "Gateway connection errors", "Transaction failures"],
          solutions: [
            "Verify payment gateway credentials",
            "Check the gateway service status",
            "Ensure the correct currency and amounts",
            "Test with a different payment method",
            "Contact the gateway support for configuration help",
          ],
        },
      ],
    },
    {
      category: "Browser & Device",
      icon: Monitor,
      problems: [
        {
          title: "Browser compatibility issues",
          symptoms: ["Features not working", "Display problems", "JavaScript errors"],
          solutions: [
            "Update the browser to the latest version",
            "Try Chrome or Firefox",
            "Disable browser extensions",
            "Clear browser cache and cookies",
            "Check the browser console for JavaScript errors",
          ],
        },
        {
          title: "Mobile app problems",
          symptoms: ["App crashes", "Sync issues", "Push notifications not working"],
          solutions: [
            "Update the app to the latest version",
            "Restart the device and try again",
            "Check the mobile data/WiFi connection",
            "Clear the app cache and data",
            "Reinstall the app if problems persist",
          ],
        },
      ],
    },
  ];

  const diagnosticTools = [
    {
      name: "Browser Developer Tools",
      description: "Check the console for JavaScript and network errors",
      instructions: "Press F12, open the Console tab, look for error messages",
    },
    {
      name: "Network Connectivity Test",
      description: "Verify internet connection and speed",
      instructions: "Visit fast.com or speedtest.net to test the connection",
    },
    {
      name: "Browser Incognito Mode",
      description: "Test without extensions or cached data",
      instructions: "Open an incognito/private window and try again",
    },
    {
      name: "System Status Page",
      description: "Check for service outages or maintenance",
      instructions: "Visit status.komusoft.com for real-time service status",
    },
  ];

  return (
    <DocLayout
      title="Troubleshooting Guide"
      subtitle="Common issues and solutions for Business Assistant"
      current="Troubleshooting Guide"
      prev={{ label: "Data Privacy & Audit", href: `${base}/privacy` }}
    >
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
          <div>
            <p className="text-red-800 font-semibold">Need immediate help?</p>
            <p className="text-red-700 text-sm">
              Call our support team on <a href="tel:+256750688747" className="underline">+256 750 688747</a> or email{" "}
              <a href="mailto:support@komusoft.com" className="underline">support@komusoft.com</a>.
            </p>
          </div>
        </div>
      </div>

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
              <li>Refresh the browser page</li>
              <li>Close other browser tabs</li>
              <li>Try a different browser</li>
            </ol>
          </div>
        </div>
      </div>

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
                    <h4 className="font-medium text-gray-700 mb-2">Symptoms</h4>
                    <ul className="space-y-1">
                      {problem.symptoms.map((symptom, symptomIndex) => (
                        <li key={symptomIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 shrink-0"></div>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Solutions</h4>
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

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Diagnostic Tools</h2>
        <p className="text-gray-700 mb-6">Use these tools to diagnose issues before contacting support.</p>
        <div className="grid md:grid-cols-2 gap-4">
          {diagnosticTools.map((tool, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
              <div className="bg-gray-900 rounded p-2 text-gray-100 font-mono text-xs">{tool.instructions}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-green-900 mb-4">Prevention Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <Shield className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
            <p className="text-gray-600 text-sm">Keep browsers and devices updated</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <Lock className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-semibold text-gray-900 mb-2">Strong Passwords</h3>
            <p className="text-gray-600 text-sm">Use unique, complex passwords with 2FA</p>
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

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <HelpCircle className="w-6 h-6 text-[#05ADEE]" />
          <h2 className="text-xl font-bold text-gray-900">Additional Support Resources</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Support</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li><strong>Phone:</strong> +256 750 688747</li>
              <li><strong>Email:</strong> support@komusoft.com</li>
              <li><strong>Live Chat:</strong> Available in the dashboard</li>
              <li><strong>Website:</strong> www.komusoft.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">What to Include</h3>
            <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
              <li>Detailed description of the issue</li>
              <li>Browser and device information</li>
              <li>Screenshots if applicable</li>
              <li>Steps to reproduce the problem</li>
              <li>Your account email address</li>
            </ul>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessAssistantTroubleshootingPage() {
  return <BusinessAssistantTroubleshooting />;
}
