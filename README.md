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
```

2. Install the required dependencies.
```bash
npm install
```

3. Run the application.
```bash
node index.js
```


## Example Usage

### Change File Extensions

1. Change the extension of files in a given directory
Enter the option number (1-4): 1

Files in the directory:
1. file1.png
2. file2.png

Enter the number of the file to select (1-2): 1
Enter the new file extension (including the dot): .jpg

file1.png has been renamed to file1.jpg


### Rename a Single File

2. Rename a single file
Enter the option number (1-4): 2

Files in the directory:
1. file1.txt
2. file2.txt

Enter the number of the file to select (1-2): 2
Enter the new file name for file2.txt (press Enter to keep the current name): newFile.txt

file2.txt has been renamed to newFile.txt


### Batch Rename Files

3. Batch rename files in a given directory
Enter the option number (1-4): 3

Files in the directory:
1. file1.txt
2. file2.txt

Enter the generic file name for batch renaming: newFile
Enter the position for the incremental counter (start/end): start

file1.txt has been renamed to newFile_1
file2.txt has been renamed to newFile_2


### Batch Remove Characters

4. Batch remove a said number of characters in a given folder
Enter the option number (1-4): 4

Files in the directory:
1. file1.txt
2. file2.txt

Enter the number of characters to remove from the beginning of each file: 3

Removed 3 characters from file1.txt
Removed 3 characters from file2.txt


*** 
>_Feel free to customize the directory paths in the script to match your use case. Enjoy using the Node CLI File Management Tool!_