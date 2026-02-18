# Simon Kagwe - Personal Portfolio Website

This is the personal portfolio website for Simon Kagwe, a Full-Stack Web Developer. It showcases his skills, projects, and services, and provides a way for potential clients to get in touch.

## Features

-   **Responsive Design**: Fully adaptable layout that looks great on mobile, tablet, and desktop devices.
-   **Light/Dark Mode**: A toggleable theme switch for comfortable viewing in any lighting condition.
-   **Interactive UI**:
    -   **Typed Text Animation**: Dynamic text in the hero section using Typed.js.
    -   **Scroll Animations**: Elements fade in and slide as you scroll using ScrollReveal.
    -   **Floating "Back to Top" Button**: Appears when scrolling down for easy navigation.
-   **Portfolio Filtering**: Filter projects by category (Web Development, UI/UX Design, Marketing).
-   **Functional Contact Form**: Integrated with Formspree for reliable email submissions without a backend server.

## Technologies Used

-   **HTML5 & CSS3**: Semantic structure and modern styling (Flexbox, Grid, CSS Variables).
-   **JavaScript (ES6+)**: Logic for interactivity, theme toggling, and form handling.
-   **External Libraries**:
    -   [ScrollReveal](https://scrollrevealjs.org/): For scroll animations.
    -   [Typed.js](https://github.com/mattboldt/typed.js/): For typing animations.
    -   [Boxicons](https://boxicons.com/) & [FontAwesome](https://fontawesome.com/): For vector icons.

## Setup & Usage

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Cute-Sky/My-Website.git
    ```
2.  **Open `index.html`**:
    -   You can simply double-click `index.html` to view it in your browser.
    -   For the best experience (and to avoid CORS issues with some resources), use a live server (e.g., VS Code "Live Server" extension).

## Customization

-   **Images**: Replace images in the `images/` folder. Ensure filenames match those in `index.html` or update the `src` attributes.
-   **Colors**: Modify the CSS variables in the `:root` section of `styles.css` to change the color scheme.
-   **Contact Form**: Update the `action` URL in the `<form>` tag in `index.html` with your own [Formspree](https://formspree.io/) ID.

## structure
- `index.html`: Main HTML file
- `styles.css`: Main CSS file
- `script.js`: Main JavaScript file
- `images/`: Folder containing all images
- `resume/`: Folder containing the CV/Resume file

## License

This project is open-source and available for personal use and modification.
