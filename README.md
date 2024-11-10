# Designdex

Designdex is a curated platform that provides design resources for UI/UX professionals and developers. It aims to streamline the discovery of high-quality design assets, from fonts and gradients to color schemes and components, categorized for easy browsing. The project is built using Next.js, React, and Tailwind CSS, with local storage caching to improve performance and user experience.

## Project Demo
- **Live Site**: [Designdex](https://designdex.vercel.app/)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- **Curated Design Resources**: Access to categorized design resources, including fonts, gradients, icons, and illustrations.
- **Category-wise Filtering**: Easily browse resources by category tags such as Portfolio, Fonts, Inspiration, Colors, and more.
- **Local Storage Caching**: Caches categories and resources locally, enhancing performance and reducing redundant API calls.
- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Dynamic Counting**: Each category displays the number of resources available; the "All" category shows the total count.

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **State Management**: React Context API
- **Data Fetching**: REST API
- **Local Storage**: For caching categories and resources

## Installation

To set up Designdex locally:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/designdex.git
    cd designdex
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create environment variables**:  
   Create a `.env.local` file in the root directory and add any necessary environment variables (e.g., API endpoint for fetching resources).

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Open**:
   Go to [http://localhost:3000](http://localhost:3000) to view the app locally.

## Usage

Once the app is running:

- **Browsing Categories**: Click on any category to filter resources based on the selected tag.
- **Resource Count**: View the total count of resources available under each category.
- **Caching**: The app stores categories and resources in local storage to improve load times. Cached data will be refreshed upon detecting updates.
