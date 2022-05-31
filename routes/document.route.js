const express = require('express');
const docController = require('../controllers/document.controller')
const router = express.Router();

router.get('/docs', docController.getDocuments);
router.post('/addDoc', docController.addDocument);
router.get('/docs/:id', docController.getDocument);
router.delete('/docs/:id', docController.deleteDocument);
router.put('docs/edit/:id', docController.editDocument);

module.exports = router;