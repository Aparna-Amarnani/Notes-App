import fs from 'fs'
import chalk from 'chalk'

const addNote = (title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note) => note.title === title)

    if( duplicateNotes.length===0){
        notes.push(
            {
                title:title,
                body:body
            }
        )
        saveNotes(notes)
        console.log('New Note added!')
    }else{
        console.log('Notes title taken already!')
    }
    
}

const saveNotes=(notes)=>{
    const saveData=JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}

const loadNotes=()=>{
    try{
    const databuffer=fs.readFileSync('notes.json')
    const dataJSON=databuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const newNotes=notes.filter((note) => !(note.title===title))
    saveNotes(newNotes)
    if(notes.length>newNotes.length)
    {
        console.log(chalk.green.inverse('Note Removed'))
    }
    else{
        console.log(chalk.red.inverse('No Note found'))
    }
}

const listNotes= () =>{
    debugger
    console.log(chalk.green.inverse('Your Notes!'))
    const notes=loadNotes()
    /* for(let i of notes)
    {
        console.log(i)
    } */
    // a more professional way to do so
    notes.forEach((note) => console.log(note.title))
}

const readNote=(title)=>{
    const notes=loadNotes()
    const read=notes.find((note)=> note.title===title)
    if(read===undefined)
    {
        console.log(chalk.red.inverse('Note not found!'))
    }else{
        console.log(chalk.green.inverse('Note found'))
        console.log(read.body)
    }
}

export default {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}