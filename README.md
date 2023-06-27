# Spotify Clone

This project is a Spotify clone that replicates some of the functionalities of the original Spotify music streaming service. The app utilizes both the Spotify API for fetching music data and a mocked authentication system for user authentication. Please note that this app does not support actual music streaming, and the playlist logic is only mocked. The primary purpose of this project is to showcase the integration of the Spotify API, demonstrate the usage of custom hooks such as `useInfiniteScroll`, `useClickOutside`, `useDebounceValue`, and others, and provide a realistic user experience.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contact](#contact)

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

Before running the project, make sure you have the following dependencies installed:

- Node.js
- NPM (Node Package Manager)

### Installation

1. Clone the repository to your local machine using the following command:

   ```shell
   git clone https://github.com/MiGIGiM/spotify-mocked-clone.git
   ```
2. Navigate to the parent directory
   ```shell
   cd spotify-mocked-clone
   ```
3. Install dependecies
   ```shell
   npm install
   ```
## Usage
To use the Spotify clone, follow these steps:

1. Obtain Spotify API credentials by creating a Spotify developer account and creating a new application. This will give you a client ID and client secret.

2. Create a `.env` file with the given secret and id
3. Start the development server:
   ```shell
   npm run dev
   ```
4. Open your browser and visit `http://localhost:5173` to view the application

> Please note that the app does not support actual music streaming, and the playlist logic is only mocked. However, you can explore the available features such as searching for songs, creating playlists, and managing your library.


## Features
- Song Search: Users can search for songs by entering keywords, and the app will display relevant search results from the Spotify API.

- Playlist Creation: Users can create custom playlists by adding songs from the search results. They can manage and modify their playlists by adding or removing songs.

- Library Management: The app allows users to manage their library of favorite songs. Users can add songs to their library, view and organize their saved songs, and remove songs from their library.

- Mocked Authentication: The authentication system in this clone is mocked, allowing users to log in and use the app without requiring actual Spotify credentials. This enables users to explore the features and interact with the app seamlessly.

- Custom Hooks: The project utilizes custom hooks such as useInfiniteScroll, useClickOutside, useDebounceValue, and others. These hooks enhance the app's functionality, providing smooth interactions and improved user experience.

## Contact

For any questions or suggestions regarding this project, please feel free to reach out to me through the following channels:

- Email: frodriguezdev@gmail.com
- GitHub: [MiGIGiM](https://github.com/MiGIGiM)
   
