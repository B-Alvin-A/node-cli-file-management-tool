const fs = require('fs/promises')
const path = require('path')

const displayFiles = async (directory) => {
    const files = await fs.readdir(directory)
    console.log('Files in the directory:')
    files.forEach( (file, index) => console.log(`${index + 1}.${file}`))
}

const listFiles = async (directory) => {
    const files = await fs.readdir(directory)
    
    const fullPath = files.map( file => path.join(directory, file) )
    return fullPath
}

const changeFileExtension = async (directory, newExtension) => {
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

const renameSingleFile = async (directory, selectedFileIndex, newBaseName) => {
    const files = await listFiles(directory)
    
    if(files.length===0){
        console.log('No files available for renaming')
        return
    }
    
    const selectedFile = files[selectedFileIndex - 1]
    const fileExtension = path.extname(selectedFile)

    const newFileName = newBaseName + fileExtension
    const newFilePath = path.join(directory, newFileName)
    
    try {
        await fs.rename(selectedFile, newFilePath)
        console.log(`${selectedFile} has been renamed to ${newFileName}`)
    } catch (err) {
        console.error('Error: ',err)
    }
}

const batchRename = async (directory, genericFileName, position) => {
    const files = await listFiles(directory)

    for(let [index, file] of files.entries()){
        const fileBaseName = path.basename(file)
        const fileExtName = path.extname(file)

        const newFileName = position === 'start' ? `${index + 1}_${genericFileName}` : `${genericFileName}_${index + 1}`
        const newFilePath = path.join(directory, newFileName + fileExtName)

        try {
            await fs.rename(file, newFilePath)
            console.log(`${fileBaseName} has been renamed to ${newFileName}${fileExtName}`)
        } catch (err) {
            console.error('Error: ', err)
        }
    }
}

const batchRemoveCharacters = async (directory, charsToRemove) => {
    const files = await listFiles(directory)

    for(const file of files){
        const currentFileName = path.basename(file)
        const fileExtension = path.extname(file)

        const baseName = path.basename(file, fileExtension)
        const newBaseName = baseName.slice(charsToRemove)

        const newFileName = newBaseName + fileExtension
        const oldFilePath = path.join(directory, currentFileName)
        const newFilePath = path.join(directory, newFileName)
        
        try {
            await fs.rename(oldFilePath, newFilePath)
            console.log(`removed ${charsToRemove} ${charsToRemove === 1 ? 'character' : 'characters'} from ${currentFileName}`)
        } catch (err) {
            console.error('Error: ', err) 
        }
    }
}

module.exports = {
    displayFiles,
    listFiles,
    changeFileExtension,
    renameSingleFile,
    batchRename,
    batchRemoveCharacters
}