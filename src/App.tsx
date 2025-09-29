import React, { useState, useMemo } from 'react';
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
  ChevronDown
} from 'lucide-react';

interface EvaluationData {
  id: string;
  category: string;
  quarter: string;
  employeeContribution: {
    name: string;
    feedback: string;
    rating: number;
    score: number;
  };
  leadFeedback: {
    name: string;
    feedback: string;
    rating: number;
    score: number;
  };
  practiceLeadFeedback: {
    name: string;
    feedback: string;
    rating: number;
    score: number;
  };
  billability: number;
  finalPercentage: number;
}

function App() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedQuarters, setSelectedQuarters] = useState<string[]>(['Q2']);

  // Sample evaluation data
  const evaluationData: EvaluationData[] = [
    {
      id: '1',
      category: 'Leadership',
      quarter: 'Q1',
      employeeContribution: {
        name: 'Yashvini Sharma',
        feedback: 'Demonstrated strong leadership skills in project coordination and team management.',
        rating: 4,
        score: 85
      },
      leadFeedback: {
        name: 'Sourabrato Banerjee',
        feedback: 'Shows excellent initiative and problem-solving capabilities.',
        rating: 4,
        score: 88
      },
      practiceLeadFeedback: {
        name: 'Shrestha Gupta',
        feedback: 'Consistently delivers high-quality work and mentors junior team members.',
        rating: 5,
        score: 92
      },
      billability: 85.5,
      finalPercentage: 88.3
    },
    {
      id: '2',
      category: 'Leadership',
      quarter: 'Q2',
      employeeContribution: {
        name: 'Yashvini Sharma',
        feedback: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
        rating: 4,
        score: 20
      },
      leadFeedback: {
        name: 'Sourabrato Banerjee',
        feedback: 'Excellent performance in Q2 with improved client communication skills.',
        rating: 4,
        score: 25
      },
      practiceLeadFeedback: {
        name: 'Shrestha Gupta',
        feedback: 'Outstanding contribution to practice development initiatives.',
        rating: 5,
        score: 30
      },
      billability: 23.3,
      finalPercentage: 62.3
    },
    {
      id: '3',
      category: 'Problem Solving',
      quarter: 'Q2',
      employeeContribution: {
        name: 'Yashvini Sharma',
        feedback: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
        rating: 0,
        score: 0
      },
      leadFeedback: {
        name: 'Sourabrato Banerjee',
        feedback: 'Good analytical thinking and creative problem-solving approach.',
        rating: 0,
        score: 0
      },
      practiceLeadFeedback: {
        name: 'Shrestha Gupta',
        feedback: 'Needs improvement in complex problem resolution.',
        rating: 0,
        score: 0
      },
      billability: 23.3,
      finalPercentage: 62.3
    },
    {
      id: '4',
      category: 'Leadership',
      quarter: 'Q3',
      employeeContribution: {
        name: 'Yashvini Sharma',
        feedback: 'Continued growth in leadership responsibilities and team coordination.',
        rating: 4,
        score: 22
      },
      leadFeedback: {
        name: 'Sourabrato Banerjee',
        feedback: 'Strong performance with increased client satisfaction scores.',
        rating: 4,
        score: 28
      },
      practiceLeadFeedback: {
        name: 'Shrestha Gupta',
        feedback: 'Excellent mentoring of new team members.',
        rating: 5,
        score: 32
      },
      billability: 78.2,
      finalPercentage: 82.0
    }
  ];

  const sidebarItems = [
    { icon: BarChart3, label: 'Admin Dashboard', active: true },
    { icon: Users, label: 'Clients' },
    { icon: FolderOpen, label: 'Projects' },
    { icon: Activity, label: 'Charge Activity Type' },
    { icon: UserCheck, label: 'Employees' },
    { icon: Clock, label: 'Timesheet Setting' },
    { icon: CheckSquare, label: 'Tasks Allocation' },
    { icon: FileText, label: 'Approvals' },
    { icon: Settings, label: 'Evaluation Setting' },
    { icon: Download, label: 'Export' },
    { icon: Settings, label: 'Admin Configuration' },
    { icon: RotateCcw, label: 'Role Change' }
  ];

  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
  const categories = ['Leadership', 'Problem Solving', 'Technical Skills', 'Communication'];

  // Filter data based on selected quarters
  const filteredData = useMemo(() => {
    return evaluationData.filter(item => selectedQuarters.includes(item.quarter));
  }, [selectedQuarters]);

  // Calculate aggregated metrics
  const aggregatedMetrics = useMemo(() => {
    if (filteredData.length === 0) return { billability: 0, finalPercentage: 0 };
    
    const totalBillability = filteredData.reduce((sum, item) => sum + item.billability, 0);
    const totalFinalPercentage = filteredData.reduce((sum, item) => sum + item.finalPercentage, 0);
    
    return {
      billability: totalBillability / filteredData.length,
      finalPercentage: totalFinalPercentage / filteredData.length
    };
  }, [filteredData]);

  const handleQuarterToggle = (quarter: string) => {
    setSelectedQuarters(prev => 
      prev.includes(quarter) 
        ? prev.filter(q => q !== quarter)
        : [...prev, quarter]
    );
  };

  const handleFeedbackChange = (id: string, type: 'employee' | 'lead' | 'practiceLead', field: 'feedback' | 'rating' | 'score', value: string | number) => {
    // In a real application, this would update the data in your state management system
    console.log(`Updating ${type} ${field} for ${id}:`, value);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r border-gray-200 fixed h-full overflow-y-auto">
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
      <div className="flex-1 ml-64 flex flex-col">
        {/* Header */}
        <header className="bg-purple-600 text-white px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Menu className="w-5 h-5" />
              <div className="flex items-center space-x-4">
                <span className="text-sm">Year</span>
                <div className="relative">
                  <select 
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="bg-white text-gray-800 border border-gray-300 rounded px-3 py-1 text-sm pr-8 appearance-none"
                  >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
                <div className="flex space-x-2">
                  {quarters.map(quarter => (
                    <button
                      key={quarter}
                      onClick={() => handleQuarterToggle(quarter)}
                      className={`px-3 py-1 text-xs rounded transition-colors ${
                        selectedQuarters.includes(quarter)
                          ? 'bg-white text-purple-600 font-medium'
                          : 'bg-purple-500 text-white hover:bg-purple-400'
                      }`}
                    >
                      {quarter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded text-sm transition-colors">
                Change Status
              </button>
              <span className="text-sm font-medium">Yashvini Sharma</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Categories */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800">Plan</h2>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-600 mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="p-2 bg-gray-50 rounded text-sm text-gray-700">
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Evaluation Table */}
            <div className="col-span-7">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800">Performance Evaluation</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Showing data for: {selectedQuarters.join(', ')} {selectedYear}
                  </p>
                </div>
                
                {/* Evaluation Cards */}
                <div className="p-4 space-y-6">
                  {filteredData.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                        <h3 className="font-medium text-gray-800">{item.category} - {item.quarter}</h3>
                      </div>
                      
                      <div className="grid grid-cols-3 divide-x divide-gray-200">
                        {/* Employee Contribution */}
                        <div className="p-4">
                          <div className="bg-purple-600 text-white text-center py-3 rounded-lg mb-4">
                            <div className="font-bold text-lg">{item.quarter}</div>
                            <div className="text-sm">Employee Contribution</div>
                            <div className="text-xs opacity-90">{item.employeeContribution.name}</div>
                          </div>
                          <textarea
                            value={item.employeeContribution.feedback}
                            onChange={(e) => handleFeedbackChange(item.id, 'employee', 'feedback', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded text-sm resize-none h-24 mb-3"
                            placeholder="Employee feedback..."
                          />
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Rating:</span>
                            <input
                              type="number"
                              min="0"
                              max="5"
                              value={item.employeeContribution.rating}
                              onChange={(e) => handleFeedbackChange(item.id, 'employee', 'rating', parseInt(e.target.value))}
                              className="w-16 p-1 border border-gray-300 rounded text-center"
                            />
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span className="text-gray-600">Score:</span>
                            <input
                              type="number"
                              value={item.employeeContribution.score}
                              onChange={(e) => handleFeedbackChange(item.id, 'employee', 'score', parseInt(e.target.value))}
                              className="w-16 p-1 border border-gray-300 rounded text-center"
                            />
                          </div>
                        </div>

                        {/* Lead Feedback */}
                        <div className="p-4">
                          <div className="bg-purple-600 text-white text-center py-3 rounded-lg mb-4">
                            <div className="font-bold text-lg">{item.quarter}</div>
                            <div className="text-sm">Lead Feedback</div>
                            <div className="text-xs opacity-90">{item.leadFeedback.name}</div>
                          </div>
                          <textarea
                            value={item.leadFeedback.feedback}
                            onChange={(e) => handleFeedbackChange(item.id, 'lead', 'feedback', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded text-sm resize-none h-24 mb-3"
                            placeholder="Lead feedback..."
                          />
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Rating:</span>
                            <input
                              type="number"
                              min="0"
                              max="5"
                              value={item.leadFeedback.rating}
                              onChange={(e) => handleFeedbackChange(item.id, 'lead', 'rating', parseInt(e.target.value))}
                              className="w-16 p-1 border border-gray-300 rounded text-center"
                            />
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span className="text-gray-600">Score:</span>
                            <input
                              type="number"
                              value={item.leadFeedback.score}
                              onChange={(e) => handleFeedbackChange(item.id, 'lead', 'score', parseInt(e.target.value))}
                              className="w-16 p-1 border border-gray-300 rounded text-center"
                            />
                          </div>
                        </div>

                        {/* Practice Lead Feedback */}
                        <div className="p-4">
                          <div className="bg-purple-600 text-white text-center py-3 rounded-lg mb-4">
                            <div className="font-bold text-lg">{item.quarter}</div>
                            <div className="text-sm">Practice Lead Feedback</div>
                            <div className="text-xs opacity-90">{item.practiceLeadFeedback.name}</div>
                          </div>
                          <textarea
                            value={item.practiceLeadFeedback.feedback}
                            onChange={(e) => handleFeedbackChange(item.id, 'practiceLead', 'feedback', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded text-sm resize-none h-24 mb-3"
                            placeholder="Practice lead feedback..."
                          />
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Rating:</span>
                            <input
                              type="number"
                              min="0"
                              max="5"
                              value={item.practiceLeadFeedback.rating}
                              onChange={(e) => handleFeedbackChange(item.id, 'practiceLead', 'rating', parseInt(e.target.value))}
                              className="w-16 p-1 border border-gray-300 rounded text-center"
                            />
                          </div>
                          <div className="flex justify-between items-center text-sm mt-2">
                            <span className="text-gray-600">Score:</span>
                            <input
                              type="number"
                              value={item.practiceLeadFeedback.score}
                              onChange={(e) => handleFeedbackChange(item.id, 'practiceLead', 'score', parseInt(e.target.value))}
                              className="w-16 p-1 border border-gray-300 rounded text-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {filteredData.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      No evaluation data available for the selected quarters.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Metrics */}
            <div className="col-span-3">
              {/* Billability Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <div className="p-4 text-center">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Billability</h3>
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {aggregatedMetrics.billability.toFixed(1)}
                  </div>
                  <div className="w-6 h-6 bg-green-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
              </div>

              {/* Final Percentage Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
                <div className="p-4 text-center">
                  <h3 className="text-sm font-medium text-gray-600 mb-2">Final Percentage</h3>
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {aggregatedMetrics.finalPercentage.toFixed(1)}
                  </div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-gray-600 text-xs">?</span>
                  </div>
                </div>
              </div>

              {/* Quarter Summary */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-medium text-gray-800">Selected Quarters</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-2">
                    {selectedQuarters.map(quarter => (
                      <div key={quarter} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{quarter} {selectedYear}</span>
                        <span className="text-green-600 font-medium">Active</span>
                      </div>
                    ))}
                  </div>
                  {selectedQuarters.length === 0 && (
                    <p className="text-sm text-gray-500">No quarters selected</p>
                  )}
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