Camper Rental Application
This is a web application for a company that provides camper rental services in Ukraine. The application consists of three main pages:

Home Page: Provides a general description of the services offered by the company.
Catalog Page: Displays a catalog of campers with different configurations that users can filter by location, equipment, and type.
Favorites Page: Shows advertisements added by the user to their favorites list.
Routes
/: Home page with a description of the company's services.
/catalog: Catalog page displaying campers of different configurations.
/favorites: Page showing advertisements added by the user to their favorites list.
If a user tries to access a non-existing route, they will be redirected to the home page.

Additional Features
Filtering:
Text input: Allows users to filter campers by location.
Checkboxes: Enables filtering by specific equipment.
Radio buttons: Filters campers by type.
Technical Stack
Frontend Framework: React
State Management: Redux
Styling: CSS (styled-components)
Routing: React Router
HTTP Requests: Axios
Backend (MockAPI)
The backend is implemented using MockAPI. It provides endpoints to fetch and manipulate advertisements for campers.

Additional Notes
The UI is responsive and validated.
No console errors.
Redux is used for state management.
Axios is used for making HTTP requests.
Code is formatted and commented appropriately.
Project is deployed on GitHub Pages or Netlify.
Setup Instructions
Clone the repository.
Install dependencies using npm install.
Start the development server with npm start.
Access the application in your browser at http://localhost:3000.

