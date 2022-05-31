const Document = require('../models/document.model')

exports.getDocuments = (req, res) => {
    Document
        .find()
        .then((docs) => res.status(200).json(docs))
        .catch((err) => res.send(err));
}

exports.addDocument = (req, res) => {
    const { name, innerData } = req.body;
    const doc = new Document({ name, innerData });
    doc
        .save()
        .then((doc) => res.status(200).json(doc))
        .catch((err) => res.send(err));
}

exports.getDocument = (req, res) => {
    Document
        .findById(req.params.id)
        .then((doc) => res.status(200).json(doc))
        .catch((err) => res.send(err));
}

exports.deleteDocument = (req, res) => {
    const { id } = req.params;
    Document
        .findByIdAndDelete(id)
        .then(() => { res.json(id); })
        .catch((err) => res.send(err));
}

exports.editDocument = (req, res) => {
    const { name, innerData } = req.body;
    const { id } = req.params;
    Document
        .findByIdAndUpdate(id, { name, innerData }, { new: true })
        .then((doc) => res.json(doc))
        .catch((err) => res.send(err));
}