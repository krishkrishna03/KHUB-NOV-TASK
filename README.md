# KHUB-NOV-TASK

*Introduction*
The React eLearning Dashboard is a web application that provides a user interface for navigating through various sections such as Dashboard, Card, PieChart, Table, Form, and more. It features a responsive layout with a Navbar, Sidebar for navigation, and a Footer.

*Folder Strecture*

/src
|-- /components
|   |-- /Dashboard
|   |   |-- Dashboard.js
|   |   |-- Dashboard.css
|   |
|   |-- /Card
|   |   |-- Card.js
|   |   |-- Card.css
|   |
|   |-- /PieChart
|   |   |-- PieChart.js
|   |   |-- PieChart.css
|   |
|   |-- /Table
|   |   |-- Table.js
|   |   |-- Table.css
|   |
|   |-- /Form
|       |-- Form.js
|       |-- Form.css
|
|-- /layout
|   |-- Sidebar.js
|   |-- Sidebar.css
|   |-- Navbar.js
|   |-- Navbar.css
|   |-- Footer.js
|   |-- Footer.css
|
|-- App.js
|-- App.css
|-- index.js
|-- index.css


*Components*
*Navbar*
The Navbar component provides a simple navigation bar at the top of the application. It includes a logo and a search bar.

Usage Example:
<Navbar />

*Sidebar*

The Sidebar component is responsible for rendering the sidebar with navigation links. It uses React Router for navigation
Use this example
<BrowserRouter>
  <Sidebar>
    {/* ... */}
  </Sidebar>
</BrowserRouter>
*Dashboard*
The Dashboard component renders a set of social media buttons within a wrapper. It provides a responsive design with a hover effect to display additional information.

Usage Example:
<Dashboard />
Card, PieChart, Table, Form
These components represent various sections of the application, each rendering specific content related to the section name.

Usage Example:
<Card />
<PieChart />
<Table />
<Form />
  
*E-learning Table Component*
  
The ElearningTable component is designed to display a table of e-learning courses with relevant information such as course name, instructor, duration, level, and enrollment statistics.

*Table Structure and Data*
The component uses a static set of data for demonstration purposes. The tableData array represents rows of the table, including the header.

*Styling*
The component includes CSS styles for proper layout and formatting. It provides a clean and organized presentation of e-learning course information.

*Example for Styling*

.elearning-table-container {
  text-align: center;
  margin: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #000000;
  padding: 12px;
}

th {
  background-color: #887e7e;
  font-weight: bold;
}

/* Responsive styles */
@media (max-width: 600px) {
  th, td {
    padding: 8px;
  }
}

*Explanation of Styles*
.elearning-table-container: Provides margin and center alignment for the table container.

table: Defines the table layout with 100% width and collapses the border between cells.

th, td: Sets border and padding for table header and data cells.

th: Applies background color and bold font weight to the table header.

@media (max-width: 600px): Adds responsive styles for smaller screens by reducing padding on cells.

*Component Structure*
The component renders a table with headers and rows using the provided data.

Table Header
Course
Instructor
Duration
Level
Enrollment
Sample Data Rows
React Basics, John Doe, 4 weeks, Beginner, 500
JavaScript Fundamentals, Jane Smith, 6 weeks, Intermediate, 700
Data Science Essentials, Sam Johnson, 8 weeks, Advanced, 300
UX Design Principles, Emily Brown, 5 weeks, Intermediate, 450
Certainly! Let's write documentation for the `ElearningCards` component.

---

## ElearningCards Component Documentation

### Overview

The `ElearningCards` component is a React component designed to showcase featured courses in a visually appealing way. It displays information about different courses, including the course title, an image, and a brief description.

### Usage

To use the `ElearningCards` component, follow these steps:

1. *Import the Component:*
   jsx
   import ElearningCards from './path/to/ElearningCards';
   

2. *Include the Component in Your JSX:*
   jsx
   // Within your JSX, include the ElearningCards component
   <ElearningCards />
   

### Props

The `ElearningCards` component does not currently accept any props. The course data is internally defined within the component.

### Example

jsx
// Import the ElearningCards component
import ElearningCards from './path/to/ElearningCards';

// Inside your component or container, use the ElearningCards component
const MyComponent = () => {
  return (
    <div>
      <h1>Welcome to My Learning Platform</h1>
      {/* Display the ElearningCards component */}
      <ElearningCards />
    </div>
  );
};

export default MyComponent;


### Structure

The `ElearningCards` component is structured as follows:

- **Featured Courses Header:** Displays a heading indicating that the following cards are featured courses.

- **Cards Container (`elearning-cards`):** A container that holds individual course cards.

- **Individual Course Card (`elearning-card`):** Each card contains the following elements:
  - **Image:** An image representing the course.
  - **Title:** The title of the course.
  - **Content:** A brief description or content about the course.

### Data

The `ElearningCards` component uses an internal array called `cardData` to store information about each course. Each course has an `id`, `title`, `image` (URL), and `content`.

### Customization

If you wish to customize the content or appearance of the cards, you can modify the `cardData` array within the `ElearningCards.js` file.

### Styling

The styling for the `ElearningCards` component is defined in an external CSS file named `Card.css`. Ensure that this stylesheet is imported into your application for the proper styling of the component.


Certainly! Below is the documentation for the `ElearningForm` React component.

### ElearningForm Component

#### Description
The `ElearningForm` component is a React form that allows users to provide information related to eLearning. It includes fields for date, day, course selection, topic preferences, experience level, and feedback.

#### Usage
jsx
import React from 'react';
import ElearningForm from './ElearningForm'; // Import the ElearningForm component
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="app-container">
      <ElearningForm />
    </div>
  );
};

export default App;


#### State
- `formData`: An object that holds the form data, including the following properties:
  - `date` (string): Date selected by the user.
  - `day` (string): Day entered by the user.
  - `courseDropdown` (string): Selected course from the dropdown.
  - `topicsCheckboxes` (object): An object containing boolean values for topic checkboxes (`programming`, `math`, `science`).
  - `experienceRadio` (string): Selected experience level (`beginner` or `intermediate`).
  - `feedbackText` (string): User's feedback entered in the textarea.

#### Methods
- `handleInputChange(e)`: Handles input changes for form fields. Updates the state accordingly based on the input type.
- `handleSubmit(e)`: Handles form submission. Currently, it logs the form data to the console.

#### Structure
The component is structured as follows:
- The form contains various input elements for collecting information.
- State is managed using the `useState` hook.
- Event handlers (`handleInputChange` and `handleSubmit`) manage user input and form submission.
- The component is styled using an external CSS file (`Form.css`).

#### Styling
This component uses a CSS file (`Form.css`) for styling. Ensure that the CSS file is properly imported.

#### Example
For a basic implementation, create an instance of the `ElearningForm` component in your main application file (e.g., `App.js`) and include any necessary styling.

Certainly! Below is the documentation for the `PieChart` React component and the `App` component that uses it.

### PieChart Component

#### Description
The `PieChart` component is a React component that displays a pie chart based on the provided data. It includes slices representing different categories along with corresponding legends.

#### Usage
jsx
import React from 'react';
import PieChart from './PieChart'; // Import the PieChart component
import './App.css'; // Import your CSS file

const App = () => {
  // Sample data for the pie charts
  const pieChartData1 = [
    { label: 'Programming', value: 25, color: '#FF6384' },
    { label: 'Math', value: 20, color: '#36A2EB' },
    { label: 'Science', value: 30, color: '#FFCE56' },
    { label: 'Other', value: 25, color: '#4CAF50' },
  ];

  // Define more datasets (pieChartData2, pieChartData3, pieChartData4) as needed

  return (
    <div className="app-container">
      <PieChart data={pieChartData1} title="Topic Distribution" />
      {/* Add more instances of PieChart with different data */}
      <PieChart data={/* pieChartData2 */} title="Experience Level" />
      <PieChart data={/* pieChartData3 */} title="Another Chart" />
      <PieChart data={/* pieChartData4 */} title="Yet Another Chart" />
    </div>
  );
};

export default App;


#### Props
- `data` (array): An array of objects, each representing a category in the pie chart. Each object should have the following properties:
  - `label` (string): The label or name of the category.
  - `value` (number): The numerical value or percentage of the category.
  - `color` (string): The color code (hex, RGB, etc.) for the category slice.
- `title` (string): The title or heading for the pie chart.

#### Functions
- `getPath(startAngle, percentage)`: Generates an SVG path for a pie slice based on the start angle and percentage of the category.
- `renderSlices()`: Renders pie slices based on the provided data.
- `renderLegends()`: Renders legends for each category.

#### Structure
- The component uses SVG to draw the pie chart.
- The `getPath` function calculates the coordinates for drawing pie slices.
- Legends are displayed below the pie chart, showing color-coded labels for each category.

#### Styling
- The component uses an external CSS file (`PieChart.css`) for styling. Ensure that the CSS file is properly imported.

### App Component

#### Description
The `App` component is the main application component that utilizes the `PieChart` component. It provides sample data for multiple pie charts.

#### Usage
jsx
import React from 'react';
import PieChart from './PieChart'; // Import the PieChart component
import './App.css'; // Import your CSS file

const App = () => {
  // Sample data for the pie charts
  const pieChartData1 = [
    { label: 'Programming', value: 25, color: '#FF6384' },
    { label: 'Math', value: 20, color: '#36A2EB' },
    { label: 'Science', value: 30, color: '#FFCE56' },
    { label: 'Other', value: 25, color: '#4CAF50' },
  ];

  // Define more datasets (pieChartData2, pieChartData3, pieChartData4) as needed

  return (
    <div className="app-container">
      <PieChart data={pieChartData1} title="Topic Distribution" />
      {/* Add more instances of PieChart with different data */}
      <PieChart data={/* pieChartData2 */} title="Experience Level" />
      <PieChart data={/* pieChartData3 */} title="Another Chart" />
      <PieChart data={/* pieChartData4 */} title="Yet Another Chart" />
    </div>
  );
};

export default App;


#### Structure
- The component renders multiple instances of the `PieChart` component with different datasets.
- Each dataset represents a different aspect, such as topic distribution, experience level, etc.

#### Styling
- The component uses an external CSS file (`App.css`) for styling. Ensure that the CSS file is properly imported.
-
- ![42d0087b-c24d-46af-b22d-bc3f39acac02](https://github.com/RCTS-K-Hub/Nov_Team_06/assets/94297919/b7d19c46-9b31-4a6d-89bd-8a0137af49eb)


- ![b538850f-99be-4cb0-8522-76547dcdd75f](https://github.com/RCTS-K-Hub/Nov_Team_06/assets/94297919/b2d8ff7d-5a75-42e7-bea2-8cc628b35e58)

![b233d38b-654f-4bd5-9efa-7f1fa146e1b6](https://github.com/RCTS-K-Hub/Nov_Team_06/assets/94297919/ac826bf6-4222-433c-8ed6-4e86adc3f7c2)

