const db = require("../models");
const Practice = db.practices.models.practice;

exports.getAllPractices = async (req, res) => {
  try {
    const practices = await Practice.findAll();

    return res.send(practices);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.getPractice = async (req, res) => {
  try {
    const { id } = req.params;

    const practice = await Practice.findOne({
      where: {
        id,
      },
    });

    return res.send(practice);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.createPractice = async (req, res) => {
  const {
    practice_logo,
    practice_name,
    client_name,
    email,
    phone,
    address,
    postal_code,
    state,
  } = req.body;

  try {
    let newPractice = await Practice.create({
      practice_logo,
      practice_name,
      client_name,
      email,
      phone,
      address,
      postal_code,
      state,
    });
    return res.send(newPractice);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.deletePractice = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send({
      message: "Please provide a id for the practice you are trying to delete!",
    });
  }

  const practice = await Practice.findOne({
    where: {
      id,
    },
  });

  if (!practice) {
    return res.status(400).send({
      message: `No practice found with the id ${id}`,
    });
  }

  try {
    await practice.destroy();
    return res.send({
      message: `Practice ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.updatePractice = async (req, res) => {
  const {
    practice_logo,
    practice_name,
    client_name,
    email,
    phone,
    address,
    postal_code,
    state,
  } = req.body;
  const { id } = req.params;

  const practice = await Practice.findOne({
    where: {
      id,
    },
  });

  if (!practice) {
    return res.status(400).send({
      message: `No practice found with the id ${id}`,
    });
  }

  try {
    if (practice_logo) {
      practice.practice_logo = practice_logo;
    }
    if (practice_name) {
      practice.practice_name = practice_name;
    }
    if (client_name) {
      practice.client_name = client_name;
    }
    if (email) {
      practice.email = email;
    }
    if (phone) {
      practice.phone = phone;
    }
    if (address) {
      practice.address = address;
    }
    if (postal_code) {
      practice.postal_code = postal_code;
    }
    if (state) {
      practice.state = state;
    }

    practice.save();
    return res.send({
      message: `Practice ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};
