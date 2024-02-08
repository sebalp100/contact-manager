const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contact" });
};

const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields must be completed")
  }
  res.status(201).json({ message: "Create a contact" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
};

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
