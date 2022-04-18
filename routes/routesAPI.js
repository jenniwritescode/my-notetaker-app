// API routes go here

const router = require('express').Router();

const StoreNotes = require('../db/storeNotes');

// request the existing notes
router.get('/notes', (req, res) => {
    StoreNotes
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// post note
router.post('/notes', (req, res) => {
    console.log(req.body)
    StoreNotes
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


// delete note
router.delete('/api/notes/:id', (req, res) => {
    StoreNotes
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;