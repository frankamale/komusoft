"use client";

import { ArrowLeft, AlertTriangle, Wifi, Database, Printer, Users, Shield, RefreshCw, FileText, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export function BusinessManagerTroubleshooting() {
  const issues = [
    {
      category: "Network & Connectivity",
      icon: Wifi,
      problems: [
        {
          title: "Client terminals cannot connect to server",
          symptoms: ["Connection timeout errors", "Unable to access shared database", "Network error messages"],
          solutions: [
            "Verify server IP address in client configuration",
            "Check firewall settings allow port 1433 (SQL Server)",
            "Ensure all devices are on the same network subnet",
            "Test network connectivity with ping command",
            "Disable VPN connections temporarily"
          ]
        },
        {
          title: "Intermittent connection drops",
          symptoms: ["Random disconnections", "Slow performance", "Data synchronization issues"],
          solutions: [
            "Check network cable connections and quality",
            "Verify network switch/hub configuration",
            "Monitor network traffic for congestion",
            "Consider wired connections over wireless",
            "Configure network timeouts appropriately"
          ]
        }
      ]
    },
    {
      category: "Database Issues",
      icon: Database,
      problems: [
        {
          title: "Database connection failed",
          symptoms: ["Login failed for user", "Cannot open database", "SQL Server not accessible"],
          solutions: [
            "Start SQL Server service (services.msc)",
            "Verify SQL Server Browser service is running",
            "Check database user credentials",
            "Ensure TCP/IP protocol is enabled",
            "Test connection using SQL Server Management Studio"
          ]
        },
        {
          title: "Database corruption or data loss",
          symptoms: ["Inconsistent data", "Application crashes", "Unable to save transactions"],
          solutions: [
            "Restore from latest backup immediately",
            "Run database consistency checks (DBCC CHECKDB)",
            "Verify disk space and hardware health",
            "Check for concurrent access conflicts",
            "Contact support for database repair assistance"
          ]
        }
      ]
    },
    {
      category: "Printer Problems",
      icon: Printer,
      problems: [
        {
          title: "Receipt printer not responding",
          symptoms: ["Print jobs fail", "Printer offline status", "Receipts not printing"],
          solutions: [
            "Check printer power and cable connections",
            "Verify correct printer driver installation",
            "Set printer as default in Windows",
            "Test printer with Windows test page",
            "Check paper roll and print head condition"
          ]
        },
        {
          title: "Poor print quality or alignment",
          symptoms: ["Faded text", "Misaligned printing", "Paper jams"],
          solutions: [
            "Clean print head with approved cleaning solution",
            "Adjust paper alignment guides",
            "Replace worn ribbon or thermal paper",
            "Update printer firmware if available",
            "Calibrate printer settings in application"
          ]
        }
      ]
    },
    {
      category: "User Access & Permissions",
      icon: Users,
      problems: [
        {
          title: "User cannot log in",
          symptoms: ["Invalid username/password", "Account locked", "Access denied errors"],
          solutions: [
            "Verify username and password (case sensitive)",
            "Check if account is locked due to failed attempts",
            "Ensure user account is active and not expired",
            "Verify user has appropriate role permissions",
            "Reset password if necessary (administrator only)"
          ]
        },
        {
          title: "Insufficient permissions for operations",
          symptoms: ["Cannot access certain features", "Save operations fail", "Configuration changes blocked"],
          solutions: [
            "Review user role assignments",
            "Check specific permission settings",
            "Ensure user is assigned to correct user group",
            "Verify role permissions match job requirements",
            "Contact administrator for permission changes"
          ]
        }
      ]
    },
    {
      category: "Performance Issues",
      icon: RefreshCw,
      problems: [
        {
          title: "Application running slowly",
          symptoms: ["Delayed response times", "Freezing during operations", "Slow report generation"],
          solutions: [
            "Close unnecessary applications",
            "Increase system RAM if below minimum",
            "Defragment database regularly",
            "Check for virus/malware infections",
            "Optimize database indexes and statistics"
          ]
        },
        {
          title: "Out of memory errors",
          symptoms: ["Application crashes", "Unable to open large reports", "Memory allocation errors"],
          solutions: [
            "Close other running applications",
            "Increase virtual memory/page file size",
            "Reduce concurrent user connections",
            "Clear temporary files and cache",
            "Upgrade system RAM if possible"
          ]
        }
      ]
    },
    {
      category: "EFRIS Compliance",
      icon: FileText,
      problems: [
        {
          title: "EFRIS synchronization failed",
          symptoms: ["Cannot send receipts to URA", "Authentication errors", "Network timeout"],
          solutions: [
            "Verify internet connectivity",
            "Check EFRIS credentials and certificates",
            "Ensure correct server endpoints",
            "Monitor EFRIS service status",
            "Contact URA support for credential issues"
          ]
        },
        {
          title: "Receipt numbering sequence errors",
          symptoms: ["Duplicate receipt numbers", "Invalid receipt format", "Compliance warnings"],
          solutions: [
            "Reset receipt numbering sequence",
            "Verify EFRIS device registration",
            "Check system date and time accuracy",
            "Update receipt templates to latest format",
            "Run compliance verification checks"
          ]
        }
      ]
    }
  ];

  const diagnosticTools = [
    {
      name: "System Information Tool",
      description: "Gather comprehensive system information for support",
      command: "Start → Run → msinfo32 → File → Export"
    },
    {
      name: "Network Diagnostics",
      description: "Test network connectivity and configuration",
      command: "Command Prompt: ping [server-ip] && tracert [server-ip]"
    },
    {
      name: "Database Connection Test",
      description: "Verify database connectivity and permissions",
      command: "SQL Server Management Studio → Connect → Test Connection"
    },
    {
      name: "Event Viewer",
      description: "Check Windows system and application logs",
      command: "Start → Run → eventvwr → Windows Logs → Application/System"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/business-manager" className="hover:text-[#05ADEE]">Business Manager</Link>
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
              href="/products/docs/business-manager"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Troubleshooting Guide</h1>
              <p className="text-gray-600">Common issues and solutions for Business Manager</p>
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
              <h3 className="font-semibold text-blue-900 mb-2">Application Won&apos;t Start</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Restart your computer</li>
                <li>Run as Administrator</li>
                <li>Check antivirus exclusions</li>
                <li>Repair installation</li>
              </ol>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Database Connection Issues</h3>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Start SQL Server service</li>
                <li>Check network connectivity</li>
                <li>Verify credentials</li>
                <li>Test with SQL Management Studio</li>
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
            Use these built-in and external tools to diagnose issues before contacting support.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {diagnosticTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                <div className="bg-gray-900 rounded p-2 text-gray-100 font-mono text-xs">
                  {tool.command}
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
              <h3 className="font-semibold text-gray-900 mb-2">Regular Backups</h3>
              <p className="text-gray-600 text-sm">Daily automated backups with offsite storage</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <RefreshCw className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">System Updates</h3>
              <p className="text-gray-600 text-sm">Keep Windows and SQL Server updated</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Wifi className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Network Monitoring</h3>
              <p className="text-gray-600 text-sm">Regular network health checks</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Users className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">User Training</h3>
              <p className="text-gray-600 text-sm">Regular training and access reviews</p>
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
                <li><strong>Phone:</strong> +256 414 320 000 (Mon-Fri, 9AM-5PM EAT)</li>
                <li><strong>Email:</strong> support@komusoft.com</li>
                <li><strong>Response Time:</strong> Within 4 hours for critical issues</li>
                <li><strong>Emergency:</strong> +256 700 000 000 (24/7)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">What to Include</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Detailed description of the issue</li>
                <li>• Steps to reproduce the problem</li>
                <li>• Error messages and screenshots</li>
                <li>• System information and logs</li>
                <li>• Recent changes to the system</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BusinessManagerTroubleshootingPage() {
  return <BusinessManagerTroubleshooting />;
}