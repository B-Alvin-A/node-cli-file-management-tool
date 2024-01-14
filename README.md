# Node CLI File Management Tool

This is a Node.js command-line interface (CLI) application that provides several file management functionalities. The user can choose from a menu of options to perform tasks like changing file extensions, renaming files, batch renaming, and batch removing characters from file names.

## Features

1. **Change the extension of files in a given directory:**
   - The user can select a directory and specify the new file extension for all files in that directory.

2. **Rename a single file:**
   - List all files in a directory and allow the user to select a file for renaming.
   - The user can input a new file name or press Enter to keep the current name.

3. **Batch rename files in a given directory:**
   - Allow the user to input a generic file name and choose the position (start/end) for an incremental counter.
   - Rename all files in the directory with the generic name and an incremental counter.

4. **Batch remove a said number of characters in a given folder:**
   - Prompt the user for the number of characters to remove from the beginning of each file name.
   - Remove the specified number of characters from all files in the directory.

## How to Use

1. Clone this repository to your local machine.

```bash
git clone https://github.com/B-Alvin-A/node-cli-file-management-tool.git
cd your-repository
