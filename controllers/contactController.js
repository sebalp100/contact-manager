const asyncHandler = require("express-async-handler");

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contact" });
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields must be completed")
  }
  res.status(201).json({ message: "Create a contact" });
});

const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact wit id ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
