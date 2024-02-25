import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

const ElearningForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    day: '',
    courseDropdown: '',
    topicsCheckboxes: {
      programming: false,
      math: false,
      science: false,
    },
    experienceRadio: '',
    feedbackText: '',
   
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        topicsCheckboxes: {
          ...formData.topicsCheckboxes,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form className="elearning-form" onSubmit={handleSubmit}>
      <h2>eLearning Form</h2>

      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
      </label>

      <label>
        Day:
        <input type="text" name="day" value={formData.day} onChange={handleInputChange} />
      </label>

      <label>
        Choose a Course:
        <select name="courseDropdown" value={formData.courseDropdown} onChange={handleInputChange}>
          <option value="">Select a course</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
        </select>
      </label>

      <div className="topics-checkboxes">
        <label>
          Programming:
          <input
            type="checkbox"
            name="programming"
            checked={formData.topicsCheckboxes.programming}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Math:
          <input
            type="checkbox"
            name="math"
            checked={formData.topicsCheckboxes.math}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Science:
          <input
            type="checkbox"
            name="science"
            checked={formData.topicsCheckboxes.science}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="experience-radio">
        <label>
          <input
            type="radio"
            name="experienceRadio"
            value="beginner"
            checked={formData.experienceRadio === 'beginner'}
            onChange={handleInputChange}
          />
          Beginner
        </label>
        <label>
          <input
            type="radio"
            name="experienceRadio"
            value="intermediate"
            checked={formData.experienceRadio === 'intermediate'}
            onChange={handleInputChange}
          />
          Intermediate
        </label>
      </div>

      <label>
        Feedback:
        <textarea
          name="feedbackText"
          value={formData.feedbackText}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ElearningForm;
