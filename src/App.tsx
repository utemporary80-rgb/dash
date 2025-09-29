import React, { useState } from 'react';
import { 
  Menu, 
  Users, 
  FolderOpen, 
  Activity, 
  UserCheck, 
  Clock, 
  CheckSquare, 
  FileText, 
  BarChart3, 
  Settings, 
  Download, 
  RotateCcw,
  ChevronDown,
  Bell,
  Search
} from 'lucide-react';

function App() {
  const [selectedYear] = useState('2024');
  const [selectedQuarter] = useState('Q2');

  const sidebarItems = [
    { icon: BarChart3, label: 'Admin Dashboard', active: true },
    { icon: Users, label: 'Clients' },
    { icon: FolderOpen, label: 'Projects' },
    { icon: Activity, label: 'Change Activity Type' },
    { icon: UserCheck, label: 'Employees' },
    { icon: Clock, label: 'Timesheet Setting' },
    { icon: CheckSquare, label: 'Task Allocation' },
    { icon: FileText, label: 'Approvals' },
    { icon: Settings, label: 'Evaluation Setting' },
    { icon: Download, label: 'Export' },
    { icon: Settings, label: 'Admin Configuration' },
    { icon: RotateCcw, label: 'Role Change' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">P</span>
            </div>
            <span className="font-semibold text-gray-800">Pursuit Software</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    item.active
                      ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Menu className="w-5 h-5 text-gray-500" />
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Year</span>
                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                  <option>{selectedYear}</option>
                </select>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs border border-gray-300 rounded">Q1</button>
                  <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded">Q2</button>
                  <button className="px-3 py-1 text-xs border border-gray-300 rounded">Q3</button>
                  <button className="px-3 py-1 text-xs border border-gray-300 rounded">Q4</button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm">
                Change Status
              </button>
              <span className="text-sm text-gray-700">Yashvini Sharma</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="col-span-8">
              {/* Plan Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800">Plan</h2>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">Category</span>
                    <div className="mt-2">
                      <span className="inline-block bg-gray-100 px-3 py-1 rounded text-sm">Leadership</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Employee Contribution Cards */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Q2 Employee Contribution */}
                <div className="bg-purple-600 text-white rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">Q2</div>
                    <div className="text-sm opacity-90">Employee Contribution</div>
                    <div className="text-xs opacity-75 mt-1">Yashvini Sharma</div>
                  </div>
                </div>

                {/* Q2 Lead Feedback */}
                <div className="bg-purple-600 text-white rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">Q2</div>
                    <div className="text-sm opacity-90">Lead Feedback</div>
                    <div className="text-xs opacity-75 mt-1">Sourabrato Banerjee</div>
                  </div>
                </div>

                {/* Practice Lead Feedback */}
                <div className="bg-purple-600 text-white rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">Q2</div>
                    <div className="text-sm opacity-90">Practice Lead Feedback</div>
                    <div className="text-xs opacity-75 mt-1">Shrestha Gupta</div>
                  </div>
                </div>
              </div>

              {/* Content Description */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="p-4">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution of letters, as opposed to using 'Content here, content here', making it 
                    look like readable English.
                  </p>
                  <div className="mt-4 flex justify-between items-center text-xs text-gray-500">
                    <span>Rating: 4</span>
                    <span>20</span>
                  </div>
                </div>
              </div>

              {/* Additional Content */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Rating: 0</span>
                    <span className="text-sm text-gray-600">0</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Rating: 0</span>
                    <span className="text-sm text-gray-600">0</span>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="font-medium text-gray-800 mb-2">Contribution Summary</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      There are many variations of passages of Lorem Ipsum available, but the majority 
                      have suffered alteration in some form, by injected humour, or randomised words 
                      which don't look even slightly believable. If you are going to use a passage of Lorem 
                      Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-4">
              {/* Billability Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <div className="p-4 text-center">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Billability</h3>
                  <div className="text-2xl font-bold text-gray-800 mb-1">23.3</div>
                  <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
              </div>

              {/* Final Percentage Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <div className="p-4 text-center">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Final Percentage</h3>
                  <div className="text-2xl font-bold text-gray-800 mb-1">62.3</div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-gray-600 text-xs">?</span>
                  </div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">on 2</span>
                  <span className="text-gray-800">done</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">on 2</span>
                  <span className="text-gray-800">done</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;