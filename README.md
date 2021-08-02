## Web Scrapper Project

### Getting Started

- These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

#### Installation

1.  Clone the repository
    ```
     git clone https://github.com/AbegaM/web-scrapper.git
    ```
2.  Install NPM packages
    ```
      npm install
    ```

#### Setup Environment

1.  Create .env file
2.  Add your environment variables in the file you created
    ```
     PAGE_URL=https://example.com/test 
     GRID_PAGE_URL=https://example.com/test/table
     USER_NAME=example@gmail.com 
     PASSWORD=12345678
    ```

### Run the code

1. Run the code in production environment

   ```
     npm run start
   ```

2. Run the code in a development environment
   ```
     npm run start:dev
   ```

### Built With

- [NodeJS](https://nodejs.org/en/)
- [Puppeteer](https://developers.google.com/web/tools)
