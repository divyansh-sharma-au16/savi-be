const db = require("../models");
const BusinessRules = db.practices.models.businessRules;

exports.getAllBusinessRules = async (req, res) => {
  try {
    const allbusinessRules = await BusinessRules.findAll();

    return res.send(allbusinessRules);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.getBusinessRules = async (req, res) => {
  try {
    const { id } = req.params;
    const businessRules = await BusinessRules.findOne({
      where: {
        id,
      },
    });
    if (!businessRules) {
      return res.status(400).send({
        message: `No buisnessRules found with the id ${id}`,
      });
    }
    res.send(businessRules);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.CreateBusinessRules = async (req, res) => {
  try {
    const {
      filename_title,
      description,
      version,
      filename,
      filepath,
    } = req.body;

    const newBusinessRules = await BusinessRules.create({
      filename_title,
      description,
      version,
      filename,
      filepath,
    });
    res.send(newBusinessRules);
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.updateBusinessRules = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      filename_title,
      description,
      version,
      filename,
      filepath,
    } = req.body;

    const businessRules = await BusinessRules.findOne({
      where: {
        id,
      },
    });
    if (!businessRules) {
      return res.status(400).send({
        message: `No buisnessRules found with the id ${id}`,
      });
    }

    if (filename_title) {
      businessRules.filename_title = filename_title;
    }
    if (description) {
      businessRules.description = description;
    }
    if (version) {
      businessRules.version = version;
    }
    if (filename) {
      businessRules.filename = filename;
    }
    if (filepath) {
      businessRules.filepath = filepath;
    }

    businessRules.save();
    return res.send({
      message: `BusinessRules ${id} has been updated!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};

exports.deleteBusinessRules = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message:
        "Please provide a id for the business rules you are trying to delete!",
    });
  }

  try {
    const businessRules = await BusinessRules.findOne({
      where: {
        id,
      },
    });

    if (!businessRules) {
      return res.status(400).send({
        message: `No business rules found with the id ${id}`,
      });
    }
    await businessRules.destroy();
    return res.send({
      message: `Business rules ${id} has been deleted!`,
    });
  } catch (err) {
    return res.status(500).send({
      message: `Error: ${err.message}`,
    });
  }
};
