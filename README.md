# Firebase: Gaming Console

Gaming Console is a web application designed to monitor the number of consoles. This README file provides detailed instructions on how to run the application.

## Demo
Refer to this link for live demonstartion of the web application: https://itd108-iotproject.web.app/

## Prerequisites

Before running the Noisensor application, ensure that you have the following prerequisites installed on your system:

* Node.js (version 12 or higher)
* npm (Node Package Manager)
* Java (version 8 or higher)

## Installation
1. _Clone the repository to your local machine:_ **`git clone https://github.com/your-username/ITD108-CS1-GamingConsole.git`**
2. _Navigate to the project directory:_ **`cd ITD108-CS1-GamingConsole`**
3. _Install the dependencies using npm:_ **`npm install`**

## Configuration
1. _Rename the .env.example file to .env:_ **`mv .env.example .env`**
2. _Open the .env file in a text editor and configure the following variables:_
* **`PORT`**: The port on which the application will run (default is 3000).
* **`DB_URI`**: The URI of the MongoDB database.
* **`NOISE_THRESHOLD`**: The threshold value (in decibels) above which a warning will be triggered.
* **`API_KEY`**: An API key for external services (optional).

## Running the Application
1. _Start the application using the following command:_ **`npm start`**
2. Once the application has started, you can access it by opening a web browser and navigating to **`http://localhost:3000`** (replace **`3000`** with the **PORT** configured in the **`.env`** file). 

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License
This project is licensed under the MIT License.
