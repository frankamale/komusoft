"use client";

import { ArrowLeft, AlertTriangle, Layers, Wifi, Database, Cloud, Shield, RefreshCw, FileText, HelpCircle, HardDrive, Zap, Settings } from 'lucide-react';
import Link from 'next/link';

export function HybridSolutionTroubleshooting() {
  const issues = [
    {
      category: "Synchronization Issues",
      icon: RefreshCw,
      problems: [
        {
          title: "Data sync failing between offline and cloud",
          symptoms: ["Data not updating across systems", "Sync queues stuck", "Conflict resolution errors"],
          solutions: [
            "Check network connectivity between systems",
            "Verify sync service is running on all nodes",
            "Review sync conflict resolution settings",
            "Clear sync queues and restart synchronization",
            "Check system clocks are synchronized",
            "Monitor sync logs for detailed error messages"
          ]
        },
        {
          title: "Real-time sync delays or interruptions",
          symptoms: ["Delayed data updates", "Intermittent sync failures", "Performance degradation"],
          solutions: [
            "Optimize network bandwidth allocation",
            "Adjust sync frequency settings",
            "Implement data compression for large transfers",
            "Configure sync retry mechanisms",
            "Monitor network latency and packet loss",
            "Consider sync scheduling during off-peak hours"
          ]
        }
      ]
    },
    {
      category: "Network & Connectivity",
      icon: Wifi,
      problems: [
        {
          title: "Inter-site communication failures",
          symptoms: ["Locations can't communicate", "VPN tunnel failures", "Firewall blocking connections"],
          solutions: [
            "Verify VPN configurations on all sites",
            "Check firewall rules for required ports",
            "Test network connectivity between locations",
            "Review DNS resolution for internal services",
            "Implement redundant network paths",
            "Monitor network equipment health"
          ]
        },
        {
          title: "Cloud connectivity problems",
          symptoms: ["API calls failing", "Cloud services unreachable", "Authentication timeouts"],
          solutions: [
            "Verify internet connectivity and bandwidth",
            "Check cloud service status and maintenance windows",
            "Review API credentials and authentication tokens",
            "Implement connection pooling and retry logic",
            "Configure appropriate timeout settings",
            "Set up cloud connectivity monitoring"
          ]
        }
      ]
    },
    {
      category: "Database Performance",
      icon: Database,
      problems: [
        {
          title: "Database replication lag",
          symptoms: ["Data inconsistencies", "Read/write conflicts", "Performance bottlenecks"],
          solutions: [
            "Optimize database indexes and query performance",
            "Configure appropriate replication topologies",
            "Implement database connection pooling",
            "Monitor database resource utilization",
            "Consider database sharding for large deployments",
            "Review and optimize database maintenance schedules"
          ]
        },
        {
          title: "Data corruption or integrity issues",
          symptoms: ["Inconsistent data across systems", "Failed integrity checks", "Data recovery failures"],
          solutions: [
            "Implement regular database consistency checks",
            "Configure automated backup verification",
            "Set up database integrity monitoring",
            "Review transaction isolation levels",
            "Implement point-in-time recovery capabilities",
            "Establish data validation rules and constraints"
          ]
        }
      ]
    },
    {
      category: "System Performance",
      icon: Settings,
      problems: [
        {
          title: "High resource utilization",
          symptoms: ["CPU/memory spikes", "Disk I/O bottlenecks", "Network saturation"],
          solutions: [
            "Monitor system resource usage patterns",
            "Optimize application configurations",
            "Implement load balancing across servers",
            "Configure appropriate caching strategies",
            "Review and optimize background processes",
            "Consider hardware upgrades or scaling"
          ]
        },
        {
          title: "Application response time degradation",
          symptoms: ["Slow user interface", "Delayed transaction processing", "Timeout errors"],
          solutions: [
            "Profile application performance bottlenecks",
            "Optimize database queries and indexes",
            "Implement caching layers where appropriate",
            "Review application server configurations",
            "Monitor and optimize network latency",
            "Consider CDN implementation for static assets"
          ]
        }
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      problems: [
        {
          title: "Encryption key management issues",
          symptoms: ["Data decryption failures", "Key rotation problems", "Certificate expiration"],
          solutions: [
            "Implement automated certificate renewal",
            "Configure key rotation policies and procedures",
            "Set up key management service monitoring",
            "Review encryption algorithm compatibility",
            "Establish key backup and recovery procedures",
            "Monitor encryption performance impact"
          ]
        },
        {
          title: "Access control and authentication failures",
          symptoms: ["Unauthorized access attempts", "Authentication timeouts", "Permission inconsistencies"],
          solutions: [
            "Review and update access control policies",
            "Implement multi-factor authentication",
            "Configure session management properly",
            "Set up centralized authentication services",
            "Monitor authentication failure patterns",
            "Implement account lockout policies"
          ]
        }
      ]
    },
    {
      category: "Backup & Recovery",
      icon: HardDrive,
      problems: [
        {
          title: "Backup failures or corruption",
          symptoms: ["Failed backup jobs", "Corrupt backup files", "Incomplete backups"],
          solutions: [
            "Verify backup storage accessibility",
            "Test backup integrity regularly",
            "Implement backup compression and encryption",
            "Configure backup job monitoring and alerting",
            "Review backup retention policies",
            "Set up backup validation procedures"
          ]
        },
        {
          title: "Disaster recovery failures",
          symptoms: ["Recovery procedures failing", "Data loss during recovery", "Extended downtime"],
          solutions: [
            "Test disaster recovery procedures regularly",
            "Document and maintain recovery runbooks",
            "Implement automated failover mechanisms",
            "Configure monitoring for recovery processes",
            "Review and update business continuity plans",
            "Establish recovery time objectives (RTO)"
          ]
        }
      ]
    }
  ];

  const diagnosticTools = [
    {
      name: "Hybrid System Monitor",
      description: "Monitor sync status, performance, and health across all nodes",
      command: "Access via unified dashboard → System Health → Hybrid Monitor"
    },
    {
      name: "Network Diagnostics",
      description: "Test connectivity and performance between all locations",
      command: "Administration → Network Tools → Connectivity Test"
    },
    {
      name: "Database Health Check",
      description: "Verify database integrity and replication status",
      command: "Database Admin → Health Check → Run Diagnostics"
    },
    {
      name: "Log Aggregation Viewer",
      description: "Centralized logging for troubleshooting across systems",
      command: "System Logs → Aggregation → Filter by component"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/products/docs/hybrid-solution" className="hover:text-[#05ADEE]">Documentation</Link>
            <span>/</span>
            <Link href="/products/docs/hybrid-solution" className="hover:text-[#05ADEE]">Hybrid Solution</Link>
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
              href="/products/docs/hybrid-solution"
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Troubleshooting Guide</h1>
              <p className="text-gray-600">Advanced troubleshooting for hybrid business ecosystems</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-red-800 font-semibold">Enterprise Support Required?</p>
                <p className="text-red-700 text-sm">
                  For complex hybrid deployments, contact our enterprise support team at
                  <a href="tel:+256414320000" className="underline ml-1">+256 414 320 000</a> or
                  <a href="mailto:enterprise@komusoft.com" className="underline ml-1">enterprise@komusoft.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Critical Issues Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold text-red-900 mb-2">Critical Hybrid System Issues</h2>
              <p className="text-red-800 mb-3">
                Hybrid systems are complex and require specialized expertise. For issues involving:
              </p>
              <ul className="text-red-800 text-sm space-y-1">
                <li>• Complete system outages affecting multiple locations</li>
                <li>• Data corruption across synchronized systems</li>
                <li>• Security breaches or compliance violations</li>
                <li>• Performance issues impacting business operations</li>
              </ul>
              <p className="text-red-800 text-sm mt-3 font-semibold">
                Contact enterprise support immediately - do not attempt self-resolution.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Diagnostics */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Quick System Health Check</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4">
              <Layers className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-blue-900 mb-2">Sync Status</h3>
              <p className="text-sm text-blue-800">Check last sync times and queue status</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Wifi className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-blue-900 mb-2">Network Health</h3>
              <p className="text-sm text-blue-800">Verify connectivity between all nodes</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Database className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-blue-900 mb-2">Database Integrity</h3>
              <p className="text-sm text-blue-800">Run consistency checks on all databases</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Cloud className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-blue-900 mb-2">Cloud Services</h3>
              <p className="text-sm text-blue-800">Verify API connectivity and service status</p>
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
          <h2 className="text-xl font-bold text-gray-900 mb-4">Enterprise Diagnostic Tools</h2>
          <p className="text-gray-700 mb-6">
            Advanced monitoring and diagnostic tools for hybrid deployments.
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

        {/* Best Practices */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-4">Hybrid System Best Practices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <RefreshCw className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Regular Monitoring</h3>
              <p className="text-gray-600 text-sm">Implement 24/7 system health monitoring</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Shield className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Security Audits</h3>
              <p className="text-gray-600 text-sm">Monthly security assessments and updates</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <HardDrive className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Backup Verification</h3>
              <p className="text-gray-600 text-sm">Test backups weekly, verify integrity</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Database className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Performance Tuning</h3>
              <p className="text-gray-600 text-sm">Regular optimization and capacity planning</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <FileText className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Maintain up-to-date system documentation</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <Zap className="w-8 h-8 text-green-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Change Management</h3>
              <p className="text-gray-600 text-sm">Controlled deployment and rollback procedures</p>
            </div>
          </div>
        </div>

        {/* Enterprise Support */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-6 h-6 text-[#05ADEE]" />
            <h2 className="text-xl font-bold text-gray-900">Enterprise Support Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Priority Support Channels</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li><strong>24/7 Emergency:</strong> +256 700 000 001</li>
                <li><strong>Enterprise Hotline:</strong> +256 414 320 001</li>
                <li><strong>Dedicated Email:</strong> enterprise@komusoft.com</li>
                <li><strong>Response SLA:</strong> 1 hour for critical issues</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Support Packages Include</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Dedicated technical account manager</li>
                <li>• On-site support visits (annual)</li>
                <li>• Emergency response team</li>
                <li>• Custom training sessions</li>
                <li>• Advanced troubleshooting tools</li>
                <li>• System health monitoring</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#05ADEE]/5 border border-[#05ADEE]/20 rounded-lg">
            <p className="text-[#05ADEE] text-sm font-semibold">
              Enterprise customers receive priority access to our development team and can request custom features and integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HybridSolutionTroubleshootingPage() {
  return <HybridSolutionTroubleshooting />;
}