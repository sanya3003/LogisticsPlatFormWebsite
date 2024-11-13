Smart Logistics Platform

![image](https://github.com/user-attachments/assets/34a4d382-d3f2-4371-81ab-6bd248dccee4)

Welcome to the Smart Logistics Platform! This platform allows users to book logistics services for transporting goods across various locations in India. It offers features like real-time price estimation, transportation mode selection, booking management, and real-time tracking for drivers. Below is the detailed breakdown of the project:
![Untitled diagram-2024-10-23-175516](https://github.com/user-attachments/assets/724f05ab-08cf-49c9-97a0-afe38e560b51)


![image](https://github.com/user-attachments/assets/13893b9b-b204-45f1-b27c-c82e63026a73)


![image](https://github.com/user-attachments/assets/70794fe7-89a2-4229-9196-0e0ace9b99f2)

![image](https://github.com/user-attachments/assets/7afcc5b9-be3c-4345-b561-898d38934440)






Project Overview
The platform allows users to:

Book vehicles for transporting goods.
Estimate transportation costs based on the selected vehicle and distance.
Track drivers in real-time once a booking is made.
Fetch previous bookings and see booking history.
Drivers can:

Accept transportation requests.
Update the job status in real-time (e.g., en route, goods collected, goods delivered).
Admins can:

Monitor the fleet, track driver performance, and view analytics of trips completed.
The system is built to handle high scalability and real-time data for millions of users and drivers.



ER Diagram


![Untitled diagram-2024-10-23-185927](https://github.com/user-attachments/assets/011c3310-239f-4b37-b5ed-f89f4797162f)


Features
1. User Features:
Book a Vehicle: Users can select a vehicle type, source city, destination city, and calculate the transportation cost based on the selected mode.
Price Estimation: Dynamic pricing based on the selected vehicle and source-distance (calculated using Google Maps API).
Real-Time Tracking: After booking, users can track the vehicle in real-time.
Booking History: Fetch and display past bookings.
2. Driver Features:
Job Acceptance: Drivers can accept or reject bookings.
Job Status Updates: Drivers update the status of the trip in real-time.
3. Admin Features:
Fleet Management: Admins manage the fleet and track driver performance.
Data Analytics: View statistics like trips completed, average trip time, and fleet performance.
Screenshots
1. Welcome Page

2. Booking Page
Select Vehicle and Source/Destination Cities
3. Price Estimation
Cost Calculation Based on Mode of Transportation
4. Real-Time Tracking
Tracking Vehicle Location in Real-Time


How It Works
Booking Flow:
Users select the source and destination locations, type of vehicle, and calculate the cost using Google Maps API.
The cost is calculated based on the selected vehicle (Truck, Van, Car) and distance between the source and destination.
Upon confirmation, the booking is created, and the user is provided with a tracking ID for live vehicle tracking.
Price Calculation:
Truck: ₹40 per km
Van: ₹50 per km
Car: ₹100 per km
The distance between the source and destination is computed using Google Maps.
Real-Time Tracking:
Uses Socket.io to handle real-time vehicle location updates without overloading the system.
Video Walkthrough
Watch the full project walkthrough here: Video Walkthrough

Challenges and Solutions
Scaling for High Traffic:
Implemented load balancers and horizontal scaling to handle 10,000 requests per second.
Real-Time GPS Data:
Optimized real-time tracking with Socket.io and Redis caching to ensure efficiency.
Future Enhancements
Add global region pricing and support for surge pricing based on demand.
Implement scheduled bookings for future transportation needs.
Extend the platform to support international users with multi-language support.
