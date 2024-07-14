<h1>Hospital Management System</h1>


<img width="960" alt="Screenshot 2024-07-15 034202" src="https://github.com/user-attachments/assets/f83736a9-44fa-4804-9b39-2dbb705c43cd">

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

<img width="960" alt="Screenshot 2024-07-15 034221" src="https://github.com/user-attachments/assets/6c57f253-6ead-403a-ba29-5fcc682a0214">

<img width="960" alt="Screenshot 2024-07-15 034233" src="https://github.com/user-attachments/assets/16dd09cf-02c8-4227-a4b2-435abad04248">


Technologies Used

    Frontend: React.js, Redux (optional for state management)
    Backend: Node.js, Express.js
    Database: MongoDB (Mongoose for ORM)

Installation

    Clone the repository: https://github.com/Vishwajeet-11/hospital_management_sysetm.git

    bash

git clone https://github.com/Vishwajeet-11/hospital_management_sysetm.git
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
<img width="960" alt="Screenshot 2024-07-15 034248" src="https://github.com/user-attachments/assets/caff9992-f6e3-41c3-abd8-77b35a04224c">

<img width="960" alt="Screenshot 2024-07-15 034312" src="https://github.com/user-attachments/assets/8246e793-5909-4f2b-930d-4cf86845ae96">

<img width="960" alt="Screenshot 2024-07-15 034324" src="https://github.com/user-attachments/assets/02d1b055-13f9-41db-99d1-ea2c9cfafadd">


Usage

    Admin Dashboard: Accessible at /admin after logging in as an admin.
    Doctor Interface: Doctors can view their appointments and manage patient details.
    Patient Interface: Patients can register, login, book appointments with doctors.

Contributing

Contributions are welcome! Feel free to submit issues and pull requests.
License

This project is licensed under the MIT License.
