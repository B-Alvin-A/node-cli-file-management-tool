const readline = require('readline')
const path = require('path')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askQuestion = async (qn) => {
    return new Promise((res) => {
        rl.question(qn, (ans) => {
            res(ans.trim())
        })
    }) 
}

async function askForNewExtension() {
    return new Promise((res) => {
        rl.question('Enter the new file extension (including the dot): ', (ans) => {
            res(ans)
        })
    })
}

async function askForFileSelection(files){
    return new Promise((res) => {
        rl.question(`Enter the number of the file to select (1-${files.length})`, (answer) => {
            const selectedFileIndex = parseInt(answer)
            if(Number.isInteger(selectedFileIndex) && selectedFileIndex >= 1 && selectedFileIndex <= files.length){
                res(selectedFileIndex)
            } else {
                console.log('Invalid input!!!...Please enter a valid file number.')
                res(askForFileSelection(files))
            }
        })
    })
}

async function askForFileName(currentFileName){
    const fileBaseName = path.basename(currentFileName, path.extname(currentFileName))
    
    return new Promise((res) => {
        rl.question(`Enter the new file name for ${fileBaseName} (press "enter" to keep current name): `, (answer) => {
            const newFileName = answer.trim() || fileBaseName
            res(newFileName)
        })
    })
}

async function askForGenericFileName(){
    return new Promise((res) => {
        rl.question('Enter the generic name for the files: ', (answer) => {
            res(answer)
        })
    })
}

async function askForIncrementalPosition(){
    return new Promise((res) => {
        rl.question('Enter the position for the incremental counter (satrt/end): ', (answer) => {
            const position = answer.toLowerCase()
            if(position === 'start' || position === 'end'){
                res(position)
            } else {
                console.log('Invalid input!!!...Please enter "start" or "end"')
                res(askForIncrementalPosition())
            }
        })
    })
}

async function askNumberOfCharactersToRemove(){
    return new Promise((res) => {
        rl.question('Enter then number of charcters to remove from the beginning of each file: ', (answer) =>{
            const charsToRemove = parseInt(answer)
            if(Number.isInteger(charsToRemove) && charsToRemove >= 0){
                res(charsToRemove)
            } else {
                console.log('Invalid input!!!...Please enter non-negative number.')
                res(askNumberOfCharactersToRemove())
            }
        })
    })
}

const askForOption = async () => {
    while (true){
        const answer = await askQuestion('Enter the option number (1-4): ')
        
        if(['1', '2', '3', '4'].includes(answer)) return answer

        console.log('Invalid input. Please enter a valid option number.')
    }
}

module.exports = {
    askForNewExtension,
    askForFileSelection,
    askForFileName,
    askForGenericFileName,
    askForIncrementalPosition,
    askNumberOfCharactersToRemove,
    askForOption,
    askQuestion
}