import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the configuration file in the same directory
const filePath = path.join(__dirname, 'configuration.json');

export const updateConfig = (message) => {
    console.log("Updating configuration with message:", message);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
    
        try {
            const config = JSON.parse(data);
            config.welcomeMessage = message; // Modify the welcome message
    
            fs.writeFile(filePath, JSON.stringify(config, null, 2), (err) => {
                if (err) {
                    console.error('Error writing to the file:', err);
                } else {
                    console.log('Configuration updated successfully.');
                    fs.readFile(filePath, 'utf8', (readErr, updatedData) => {
                        if (readErr) {
                            console.error('Error reading updated file:', readErr);
                        } else {
                            console.log('Updated File Content:', updatedData);
                        }
                    });
                }
            });
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
        }
    });
}

