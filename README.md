![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![NPM Version](https://img.shields.io/npm/v/limetree-engine?color=green)
[View Wiki](https://github.com/canuxs/limetree/wiki)

Why Use LimeTree?
Simplicity Meets Creativity LimeTree Player is designed for creators who want to focus on storytelling rather than complex coding. By using a simple, text-based file structure, you can build intricate adventure games in minutes using nothing more than a basic text editor.

Key Advantages:

Zero Compile Time: No complex build pipelines or IDEs required. Simply organize your files, zip them up, and play your game instantly in any browser.

Portability: Since your game logic is stored in plain text files within a standard ZIP archive, you can easily share, move, or modify your project on any device.

Modular Architecture: Each game "portal" (level) acts as an independent module. This makes expanding your game as easy as creating a new folder—perfect for non-linear storytelling.

Lightweight & Fast: The engine is built on a high-performance, minimalist architecture that ensures your game loads instantly, regardless of its size.

Who is it for?

Aspiring Game Designers: A perfect sandbox to learn the fundamentals of interactive narratives and decision-tree logic.

Educators: An excellent tool for teaching students the basics of logic flow, data structures, and conditional navigation.

Interactive Fiction Writers: The ultimate platform to bring your text-based stories to life with a native "choose-your-own-adventure" feel.

Start your journey today—create, compress, and play.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

LimeTree Project Documentation
Project Overview: LimeTree is a dynamic, file-based adventure game engine that uses ZIP archives to store game logic. The engine automatically detects and processes game scripts based on specific naming conventions.

1. File Structure (The Anatomy of a Level): Each level or portal is stored in a separate folder within your ZIP archive.

Folder Names: Use names like @start for the entry point or portal.name for connected levels.

Script Files: Inside each folder, create a file starting with ! (e.g., !a.txt). The engine automatically scans all files starting with !.

2. Script Syntax: Inside your !script.txt files, use the following format:

Label: Define the screen title. self.label === "Level Title"

Buttons: Define buttons and their corresponding actions. self.button1.text === "Button Label" self.button1.portal === portals.destinationName

Game Over/Win: Use the exit command to end the game. self.button1.portal === exitFromTheTree()

3. Engine Logic:

Automatic Scanning: The engine iterates through the ZIP file, identifies any file beginning with !, and maps it to a unique key derived from its parent folder name (e.g., portal.no becomes no).

Dynamic Parsing: It reads the text and portal lines from the script files and dynamically generates buttons on the UI.

Portal Navigation: When a button is clicked, the engine strips the portals. prefix and navigates to the corresponding script stored in memory.

4. How to Create a New Level:

Create a new folder (e.g., portal.secret).

Create a file inside named !script.txt.

Add your self.label, self.buttonX.text, and self.buttonX.portal definitions.

Ensure the portal name matches the target folder name exactly.

5. Troubleshooting Tips:

Ensure every button text has a corresponding portal line in the script file.

Check that your button IDs (e.g., button1, button2) are unique within the same script file.

Make sure all your script files start with the ! character.
