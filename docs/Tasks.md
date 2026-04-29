# CareBridge Tasks

## Authentication & Users
- [X] 1. Login page (email/password)
- [X] 2. Signup page (email/password + role selection: donor/individual/hospital)
- [X] 3. Hospital registration form (long form: name, country, city, address, establishment date, website, email, phone, workers count, Google Maps link, legal docs PDF, logo, manager photo, exterior photo, interior photo, questions, checkboxes) 
- [ ] 4. Admin approval page for pending hospitals
- [ ] 5. Role-based access control (admin/donor/individual/hospital)

## Navigation & UI
- [X] 6. Responsive navbar
- [ ] 7. Replace login button with profile icon if logged in 
- [ ] 8. Footer (all pages)
- [ ] 9. Loading states for requests
- [X] 10. Mobile menu

## Pages
- [ ] 12. Homepage (hero, description, why, how it works, get started)
- [ ] 13. About page (mission, UNSDG3 alignment)

## Request Forms
- [ ] 14. Individual request form (medicine name, cost, country, city, pharmacy Google Maps, pharmacy name, WhatsApp/Telegram, bill upload, urgent checkbox, swear checkbox + legal warning)
- [ ] 15. Hospital request form (anonymous patient ID, medicines, quantities, total cost, bill upload with blur instructions, urgent checkbox)

## Requests & Donations
- [ ] 16. Browse requests page (`/requests`) — list all pending requests
- [ ] 17. Request detail page — full info + pay button
- [ ] 18. Donate functionality (payment integration — Stripe/PayPal dummy or real)
- [ ] 19. Mark request as "funded" after payment
- [ ] 20. Partial payments (request stays open until fully funded)

## Dashboards
- [ ] 21. Homepage dynamic content — check user role (logged in? which role? show corresponding dashboard or default)
- [ ] 22. Donor dashboard — past donations
- [ ] 23. Individual dashboard — their requests (pending/funded/completed)
- [ ] 24. Hospital dashboard — their patient requests + status
- [ ] 27. Admin dashboard — pending hospitals + reported requests

## Database Models
- [ ] 28. User (email, password, name, role, phone, etc.)
- [ ] 29. Hospital (all registration fields + verification status)
- [ ] 30. Request (patient ID, medicines, quantities, total cost, bill photo, status, type, created by, donor, etc.)
- [ ] 31. Donation model (amount, request ID, donor ID, timestamp)

## Privacy & Legal
- [ ] 32. Bill upload instruction: "Blur your name and face. Keep medicine names + stamp visible."
- [ ] 33. Swear checkbox on all request forms (legal warning: fake = police involved)
- [ ] 34. Hospital verification photos stored securely (never public)

## Testing & Data
- [ ] Seed fake data for testing (hospitals, requests, donors)
- [ ] Form validation (frontend + backend)

## Deployment
- [ ] Frontend deploy (Netlify)
- [ ] Environment variables setup

## Additional
- [ ] Fully responsive web design for all pages
- [ ] 404 page

