<!-- PROJECT LOGO -->
<div align="center">

<img src="docs/logo.png">

---

<div align="center">
  A single page responsive web app that streams simulated security camera footage, and generates simulated motion/sound detection and camera outages.
  <div>
    <a href="https://github.com/TeaBizzy/watcher/issues">Report Bug</a>
    ·
    <a href="https://github.com/TeaBizzy/watcher/issues">Request Feature</a>
  </div>
</div>
<br />

<!-- ABOUT THE PROJECT -->
## About The Project

<br />

### Built With

<a href="https://www.javascript.com/">
  <img src=https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-original.svg width=32/>
</a>
<a href="https://nodejs.org/en">
  <img src=https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-original.svg width=32/>
</a>
<a href="https://expressjs.com/">
  <img src=https://camo.githubusercontent.com/2406788a5bdbf3d900427eecd883b5aa64c45435d14239f5eba9a2a08ac8dcd3/68747470733a2f2f6a737572742e6769746875622e696f2f6a61636b732d706f7274666f6c696f2f696d616765732f636f6c6f722d657870726573732d69636f6e2532302831292e706e67 width=32/>
</a>
<a href="https://reactjs.org/">
  <img src=https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg width=32/>
</a>
</a>
<a href="https://tailwindcss.com/">
  <img src=https://github.com/devicons/devicon/raw/master/icons/tailwindcss/tailwindcss-plain.svg width=32/>
</a>
<a href="https://www.postgresql.org/">
  <img src=https://github.com/devicons/devicon/raw/master/icons/postgresql/postgresql-original.svg width=32/>
</a>
<a href="https://jestjs.io/">
  <img src=https://github.com/devicons/devicon/raw/master/icons/jest/jest-plain.svg width=32/>
</a>
<a href="https://www.cypress.io/">
  <img src=https://raw.githubusercontent.com/jakinyang/jakinyang/main/resources/cypress.svg width=32/>
</a>
<a href="https://www.gitkraken.com/">
  <img src=https://camo.githubusercontent.com/cd29597872f8355d0aded90375f7b50712dac58e9ca102a958df9e478c334abf/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6769746b72616b656e2e737667 width=32/>
</a>
<a href="https://insomnia.rest/">
  <img src=https://camo.githubusercontent.com/49173798507f976bb55ad37f4ca77403429bbb0ec54a146a391e53d694a738bd/68747470733a2f2f7365656b6c6f676f2e636f6d2f696d616765732f492f696e736f6d6e69612d6c6f676f2d413335453039454231392d7365656b6c6f676f2e636f6d2e706e67 width=32/>
</a>


<div align="left">

---

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
* node v19+
* git lfs

### Installation

1. Clone the repo

    <b>NOTE:</b> This repo requires git lfs, before cloning. See the <a href="https://git-lfs.com/">intallation guide!</a>
   ```sh
   # NOTE: DO NOT USE REGULAR GIT CLONE
   git lfs clone https://github.com/TeaBizzy/watcher.git
   ```
2. Install NPM packages on the back and front end directories
   ```sh
   # Navigate to backend/
   cd backend/
   npm install

   # Navigate to frontend/
   cd ../frontend
   npm install
   ```

3. Create the .env file in the backend directory
   
   <b>NOTE:</b> This repo uses <a href="https://www.elephantsql.com/">ElephantSQL</a> to host the database. You can create your own database and use that url, or the public one provided below.
   ```sh
   # in the backend directory
   touch .env

   # inside .env
   # Replace this with your own ElephantSQL url if you wish
   PG_URL="postgres://ffhqvjsi:zYInDzy39kWMTRm8GGT-kijsnDiR_yUO@lallah.db.elephantsql.com/ffhqvjsi"
   ```

---

### Launching the App
1. Reset the database
   ```sh
   # Navigate to backend/
   npm run db:reset
   ```

2. Launch the server
   ```sh
   # Navigate to backend/
   npm start
   ```

3. Launch the client
    
    <b>NOTE:</b> The website should launch with `npm start`. In case it doesn't you can enter the following url:<a href="http://localhost:3000"> http://localhost:3000</a>

    ```sh
    # Navigate to frontend/
    npm start
    ```

4. Login

    <b>NOTE:</b> The database comes seeded with 2 user logins
    ```js
    // Credentials
    username: stefan@email.com
    password: password
    
    username: yana@email.com
    password: password
    ```
---

### Running Tests

1. Launch the server & client
   ```sh
    # Navigate to backend/
    npm start

    # Navigate to frontend/
    npm start
   ```

2. Run Jest Tests
    ```sh
    # Navigate to backend/
    npm test

    # Navigate to frontend/
    npm test
    ```

3. Run Cypress Tests
    ```sh
    # Navigate to frontend/
    npx cypress open
    ```
    3a. Select E2E
      <img src="./docs/cypress.png">

---
<!-- USAGE EXAMPLES -->
## Usage

### Camera Selection

* Click the camera you wish to view

  <img src="docs/cameralist.png">

* In desktop view you can select a camera at any time to switch views
* To switch cameras in mobile view, hit the back arrow

  <img src="docs/mobileview.png">

### Offline Cameras

* Camera outages will be simulated periodically
* You will be notified if a camera is offline by its selection button:

  <img src="docs/cameraofflinebutton.png">

* Attempting to view the camera will display a black screen

  <img src="docs/cameraoffline.png">


### Logging Out
* Click the logout button on the header

  <img src="docs/header.png">
---

<!-- CONTACT -->
## Contact

Stefan Talbot - https://github.com/TeaBizzy

Project Link: [https://github.com/TeaBizzy/watcher](https://github.com/TeaBizzy/watcher)
