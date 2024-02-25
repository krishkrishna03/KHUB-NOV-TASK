import React from 'react';
import './PieChart.css';
const PieChart = ({ data, title }) => {
  // Calculate total value for percentage calculation
  const total = data.reduce((acc, entry) => acc + entry.value, 0);

  // Function to generate SVG path for a pie slice
  const getPath = (startAngle, percentage) => {
    const radius = 1;
    const x1 = radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = radius * Math.sin((startAngle * Math.PI) / 180);

    const x2 = radius * Math.cos(((startAngle + percentage) * Math.PI) / 180);
    const y2 = radius * Math.sin(((startAngle + percentage) * Math.PI) / 180);

    const largeArcFlag = percentage > 180 ? 1 : 0;

    return `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  // Function to render pie slices
  const renderSlices = () => {
    let startAngle = 0;

    return data.map((entry) => {
      const percentage = (entry.value / total) * 360;
      const path = getPath(startAngle, percentage);

      startAngle += percentage;

      return <path key={entry.label} d={path} fill={entry.color} />;
    });
  };

  // Function to render legends
  const renderLegends = () => {
    return data.map((entry) => (
      <div key={entry.label} className="legend-item">
        <span className="legend-color" style={{ backgroundColor: entry.color }}></span>
        <span className="legend-label">{entry.label}</span>
      </div>
    ));
  };

  return (
    <div className="pie-chart-container">
      <h2>{title}</h2>
      <svg viewBox="-1 -1 2 2" className="pie-chart" width="150" height="150">
        <g transform="rotate(-90)">
          {renderSlices()}
        </g>
      </svg>
      <div className="legend-container">{renderLegends()}</div>
    </div>
  );
};

const App = () => {
  // Sample data for the pie charts
  const pieChartData1 = [
    { label: 'Programming', value: 25, color: '#FF6384' },
    { label: 'Math', value: 20, color: '#36A2EB' },
    { label: 'Science', value: 30, color: '#FFCE56' },
    { label: 'Other', value: 25, color: '#4CAF50' },
  ];

  const pieChartData2 = [
    { label: 'Beginner', value: 40, color: '#FF6384' },
    { label: 'Intermediate', value: 30, color: '#36A2EB' },
    { label: 'Advanced', value: 20, color: '#FFCE56' },
    { label: 'Expert', value: 10, color: '#4CAF50' },
  ];
  const pieChartData3 = [
    { label: 'Web Development', value: 35, color: '#FF6384' },
    { label: 'Data Science', value: 25, color: '#36A2EB' },
    { label: 'Design', value: 20, color: '#FFCE56' },
    { label: 'Mobile App Development', value: 20, color: '#4CAF50' },
  ];

  const pieChartData4 = [
    { label: 'History', value: 30, color: '#FF6384' },
    { label: 'Algebra', value: 25, color: '#36A2EB' },
    { label: 'Biology', value: 25, color: '#FFCE56' },
    { label: 'Geography', value: 20, color: '#4CAF50' },
  ];
  

  // Add data for two more pie charts (pieChartData3 and pieChartData4)

  return (
    <div className="app-container">
      <PieChart data={pieChartData1} title="Topic Distribution" />
      <PieChart data={pieChartData2} title="Experience Level" />
      {/* Add two more instances of PieChart with different data */}
      <PieChart data={pieChartData3} title="Another Chart" /> 
      <PieChart data={pieChartData4} title="Yet Another Chart" /> 
    </div>
  );
};

export default App;
