const fs = require('fs/promises')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const clsoeInterface = () => {
    rl.close()
}

const listFiles = async (directory) => {
    const files = await fs.readdir(directory)
    console.log('Files in the directory:')
    files.forEach( (file, index) => console.log(`${index + 1}.${file}`))

    const fullPath = files.map( file => path.join(directory, file) )
    return fullPath
}

const askForNewExtension = async () => {
    return new Promise((res) => {
        rl.question('Enter the new file extension (including the dot): ', (ans) => {
            res(ans)
        })
    })
}

const changeFileExtension = async (directory) => {
    await listFiles(directory)
    const newExtension = await askForNewExtension()
    try{
        const files = await fs.readdir(directory)

        for(const file of files){
            const oldFilePath = path.join(directory,file)
            const fileName = path.parse(file).name
    
            const newFileName = `${fileName}${newExtension}`
            const newFilePath = path.join(directory, newFileName)

            await fs.rename(oldFilePath, newFilePath)
            console.log(`Changed extension of ${file} to ${newFileName}`)
        }
    }catch(err){
        console.error('Error: ',err)
    }
}

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
                await changeFileExtension('./testFolder')
                break
            case '2':
                await console.log('testing choice 2')
                break
            case '3':
                await console.log('testing choice 3')
                break
            case '4':
                await console.log('testing choice 4')
                break
            default:
                console.log('Invalid option. Please select a valid option. [Enter number 1-4]')
                break
        }
    }
    clsoeInterface()
}

const askForOption = async () => {
    while (true){
        const answwer = await askQuestion('Enter the option number (1-4): ')
        
        if(['1', '2', '3', '4'].includes(answwer)) return answwer

        console.log('Invalid input. Please enter a valid option number.')
    }
}

const askQuestion = async (qn) => {
    return new Promise((res) => {
        rl.question(qn, (ans) => {
            res(ans.trim())
        })
    }) 
}

main().then( () => {
    clsoeInterface()
})