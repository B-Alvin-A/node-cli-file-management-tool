const {
    displayFiles,
    listFiles,
    changeFileExtension,
    renameSingleFile,
    batchRename,
    batchRemoveCharacters
} = require('./fileOperations')

const {
    askForNewExtension,
    askForFileSelection,
    askForFileName,
    askForGenericFileName,
    askForIncrementalPosition,
    askNumberOfCharactersToRemove,
    askForOption
} = require('./userPrompts')

const main = async () => {
    while (true){
        console.log('Choose functionality from  the list below:')
        console.log('1. Change the extension of files in a given directory');
        console.log('2. Rename a single file')
        console.log('3. Batch rename files in a given directory')
        console.log('4. Batch remove a said number of characters in a given folder')
    
        const chosenOption = await askForOption()
    
        switch (chosenOption){
            case '1':
                await displayFiles('./testFolder')
                const newExtension = await askForNewExtension()
                await changeFileExtension('./testFolder',newExtension)
                break
            case '2':
                await displayFiles('./testFolder')
                const files = await listFiles('./testFolder')
                const selectedFileIndex = await askForFileSelection(files)
                const newFileName = await askForFileName(files[selectedFileIndex - 1])
                await renameSingleFile('./testFolder', selectedFileIndex, newFileName)
                break
            case '3':
                await displayFiles('./testFolder')
                const genericFileName = await askForGenericFileName()
                const position = await askForIncrementalPosition()
                await batchRename('./testFolder', genericFileName, position)
                break
            case '4':
                await displayFiles('./testFolder')
                const charsToRemove = await askNumberOfCharactersToRemove()
                await batchRemoveCharacters('./testFolder', charsToRemove)
                break
        }
    }
}

main().then( () => {
    closeInterface()
})