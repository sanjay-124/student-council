import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

class Feedback extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const grade = formData.get('grade');
    const message = formData.get('message');

    try {
      await db.collection('feedback').add({
        name,
        email,
        grade,
        message,
      });

      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback. Please try again.');
    }
  };

  render() {
    return (
      <div>
        {/* ... existing JSX code ... */}
        <form
          onSubmit={this.handleSubmit}
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          {/* ... existing form fields ... */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit
            </button>
            <p className="text-[#a7a7a7] text-sm pt-3">
              We will get back to you soon!
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default Feedback;