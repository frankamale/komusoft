"use client";

import { AlertTriangle, Wifi, Database, Printer, Users, Shield, RefreshCw, FileText, HelpCircle } from 'lucide-react';
import { DocLayout } from "../components/DocLayout";

const base = "/products/docs/business-manager";

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
            "Disable VPN connections temporarily",
          ],
        },
        {
          title: "Intermittent connection drops",
          symptoms: ["Random disconnections", "Slow performance", "Data synchronization issues"],
          solutions: [
            "Check network cable connections and quality",
            "Verify network switch/hub configuration",
            "Monitor network traffic for congestion",
            "Prefer wired connections over wireless",
            "Configure network timeouts appropriately",
          ],
        },
      ],
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
            "Test connection using SQL Server Management Studio",
          ],
        },
        {
          title: "Database corruption or data loss",
          symptoms: ["Inconsistent data", "Application crashes", "Unable to save transactions"],
          solutions: [
            "Restore from the latest backup immediately",
            "Run database consistency checks (DBCC CHECKDB)",
            "Verify disk space and hardware health",
            "Check for concurrent access conflicts",
            "Contact support for database repair assistance",
          ],
        },
      ],
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
            "Check paper roll and print head condition",
          ],
        },
        {
          title: "Poor print quality or alignment",
          symptoms: ["Faded text", "Misaligned printing", "Paper jams"],
          solutions: [
            "Clean print head with approved cleaning solution",
            "Adjust paper alignment guides",
            "Replace worn ribbon or thermal paper",
            "Update printer firmware if available",
            "Calibrate printer settings in the application",
          ],
        },
      ],
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
            "Check if the account is locked due to failed attempts",
            "Ensure the account is active and login is permitted",
            "Verify the user has an appropriate role",
            "Reset password if necessary (administrator only)",
          ],
        },
        {
          title: "Insufficient permissions for operations",
          symptoms: ["Cannot access certain features", "Save operations fail", "Configuration changes blocked"],
          solutions: [
            "Review user role assignments",
            "Check specific privilege settings",
            "Ensure the role has the required module access",
            "Verify privileges match job requirements",
            "Contact administrator for permission changes",
          ],
        },
      ],
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
            "Maintain the database regularly",
            "Check for virus/malware infections",
            "Optimize database indexes and statistics",
          ],
        },
        {
          title: "Out of memory errors",
          symptoms: ["Application crashes", "Unable to open large reports", "Memory allocation errors"],
          solutions: [
            "Close other running applications",
            "Increase virtual memory/page file size",
            "Reduce concurrent user connections",
            "Clear temporary files and cache",
            "Upgrade system RAM if possible",
          ],
        },
      ],
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
            "Contact URA support for credential issues",
          ],
        },
        {
          title: "Receipt numbering sequence errors",
          symptoms: ["Duplicate receipt numbers", "Invalid receipt format", "Compliance warnings"],
          solutions: [
            "Reset the receipt numbering sequence",
            "Verify EFRIS device registration",
            "Check system date and time accuracy",
            "Update receipt templates to the latest format",
            "Run compliance verification checks",
          ],
        },
      ],
    },
  ];

  const diagnosticTools = [
    {
      name: "System Information Tool",
      description: "Gather comprehensive system information for support",
      command: "Start > Run > msinfo32 > File > Export",
    },
    {
      name: "Network Diagnostics",
      description: "Test network connectivity and configuration",
      command: "Command Prompt: ping [server-ip] && tracert [server-ip]",
    },
    {
      name: "Database Connection Test",
      description: "Verify database connectivity and permissions",
      command: "SQL Server Management Studio > Connect > Test Connection",
    },
    {
      name: "Event Viewer",
      description: "Check Windows system and application logs",
      command: "Start > Run > eventvwr > Windows Logs > Application/System",
    },
  ];

  return (
    <DocLayout
      title="Troubleshooting Guide"
      subtitle="Common issues and solutions for Business Manager"
      current="Troubleshooting Guide"
      prev={{ label: "Backup & Recovery", href: `${base}/backup` }}
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
            <h3 className="font-semibold text-blue-900 mb-2">Application Won&apos;t Start</h3>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Restart your computer</li>
              <li>Run as Administrator</li>
              <li>Check antivirus exclusions</li>
              <li>Repair the installation</li>
            </ol>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Database Connection Issues</h3>
            <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
              <li>Start the SQL Server service</li>
              <li>Check network connectivity</li>
              <li>Verify credentials</li>
              <li>Test with SQL Server Management Studio</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Core Action Buttons You Will See Everywhere</h2>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          {[
            ["NEW", "Add new records"],
            ["EDIT", "Modify existing entries"],
            ["DELETE", "Remove records (with confirmation)"],
            ["REFRESH", "Synchronise / reload data"],
            ["PRINT", "Print current view or selection"],
            ["LISTING", "Summary view of a selected item"],
            ["CREDIT", "Shortcut to Goods Returned"],
            ["SECURE", "Security / lock functions"],
          ].map(([btn, desc], i) => (
            <div key={i} className="bg-white rounded p-3 border border-gray-200">
              <span className="font-mono font-semibold text-[#05ADEE]">{btn}</span>
              <span className="text-gray-600"> &mdash; {desc}</span>
            </div>
          ))}
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
              <div className="bg-gray-900 rounded p-2 text-gray-100 font-mono text-xs">{tool.command}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-green-900 mb-4">Prevention Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-4">
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
              <li><strong>Website:</strong> www.komusoft.com</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">What to Include</h3>
            <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
              <li>Detailed description of the issue</li>
              <li>Steps to reproduce the problem</li>
              <li>Error messages and screenshots</li>
              <li>System information and logs</li>
              <li>Recent changes to the system</li>
            </ul>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}

export default function BusinessManagerTroubleshootingPage() {
  return <BusinessManagerTroubleshooting />;
}
