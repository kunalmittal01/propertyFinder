# Property Finder  

Welcome to the **Property Finder** web application! This project is designed to help users find their desired property based on location, property type, and price range. The platform allows users to add properties to their favorites list for quick reference and provides an intuitive interface to search and filter properties effectively.

---

## 🚀 Live Demo  
Check out the live version of the project here: [https://kunals-realestate.netlify.app/](#) 

---

## 💡 Features  
- **Search Properties**: Users can filter properties by location, type, and price range.
- **Favorite Properties**: Save your favorite properties locally for quick access.
- **Pagination**: Easily browse through multiple pages of search results.
- **Responsive Design**: Fully responsive design, providing an optimized experience across devices.
- **Dynamic Property Rendering**: Real-time rendering of property cards based on user input.
- **LocalStorage Integration**: Favorites are stored in the browser's local storage for persistent data management.
- **Toast Notifications**: User-friendly notifications for actions like adding or removing properties from favorites.

---

## 🛠️ Technologies Used  
- **React.js**: For building the user interface.  
- **Material-UI**: For implementing components like pagination.  
- **React-Toastify**: For beautiful and responsive toast notifications.  
- **LocalStorage API**: To persist user data locally.  
- **Tailwind CSS**: For designing a responsive and modern UI.

---

## 📂 Project Structure  

src/ ├── assets/ │ └── payload.js # Sample property data ├── components/ │ ├── Navbar.jsx # Navigation bar component │ ├── Property.jsx # Property card component │ ├── Pagination.jsx # Pagination component ├── pages/ │ └── Home.jsx # Home page with search functionality └── App.jsx # Main application


---

## 🔧 Installation and Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/property-finder.git
   cd property-finder

2.   ```bash 
   npm install

3.  ```bash 
   npm start
 
4.  Open your browser and navigate to http://localhost:5173 to use the application.

## 📖 How to Use

1. Search for Properties:

* Enter a location, select a price range, and choose a property type to filter the properties.
Click the "Search" button to view the filtered properties.
Pagination:

* Use the pagination bar at the bottom to navigate through multiple pages of results.

2. Add to Favorites:

* Click on the "Add to Favorites" button to save a property.
Navigate back anytime to view your saved properties.

3. Remove from Favorites:

* Click the "Remove from Favorites" button on any saved property to delete it from your list.

## 🌟 Acknowledgements

1. React for the framework.
2. Material-UI for the pagination component.
3. React-Toastify for notifications.
4. Tailwind CSS for styling the application.

## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

