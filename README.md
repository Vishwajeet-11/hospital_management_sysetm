Hospital Management System

This project is a Hospital Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides functionalities for admins, doctors, and patients to manage hospital operations efficiently.
Features

    User Roles:
        Admin: Access to admin dashboard for managing doctors, appointments, and system settings.
        Doctor: View appointments, manage patient information.
        Patient: Register, login, book appointments with preferred doctors.

    Authentication:
        Implemented using JWT tokens and cookies.
        Only logged-in users (admin, doctor, patient) can access certain functionalities.

    Appointment Booking:
        Patients can book appointments with specific doctors based on their specialization.
        Appointment scheduling restricted to logged-in patients.

Technologies Used

    Frontend: React.js, Redux (optional for state management)
    Backend: Node.js, Express.js
    Database: MongoDB (Mongoose for ORM)

Installation

    Clone the repository:

    bash

git clone <repository-url>
cd hospital-management-system

Install dependencies:

bash

cd frontend && npm install
cd ../backend && npm install

Set up environment variables:

    Create a .env file in the backend directory.
    Define variables like MONGODB_URI, JWT_SECRET, etc.

Start the application:

bash

    cd backend && npm start
    cd ../frontend && npm start

    Access the application at http://localhost:3000 in your browser.

Usage

    Admin Dashboard: Accessible at /admin after logging in as an admin.
    Doctor Interface: Doctors can view their appointments and manage patient details.
    Patient Interface: Patients can register, login, book appointments with doctors.

Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
License

This project is licensed under the MIT License.
