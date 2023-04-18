import yargs from 'yargs'
import notes from './notes.js'

//customize yargs version
yargs.version('1.1.0')

//add a note
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'title of the note',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of the note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) => notes.addNote(argv.title,argv.body)
    
})

//remove a note
yargs.command({
    command:'remove',
    describe:'To remove a note',
    builder:{
        title:{
            describe:'Title of the note to be removed',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) =>  notes.removeNote(argv.title)
})

//Reading a note
yargs.command({
    command:'read',
    describe:'To read a note',
    buider:{
        title:{
            describe:'Title of the node to be read',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv) => notes.readNote(argv.title)
})

//Listing all the notes
yargs.command({
    command:'list',
    describe:'Listing all the notes',
    handler:() => notes.listNotes()
})

yargs.parse()