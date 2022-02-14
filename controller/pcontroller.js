const res = require("express/lib/response");
const db = require("../models");
const product = require("../models/product");

const goods = db.product;

const add = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published,
  };
  const duct = await goods
    .create(info)
    .then(() => {
      res.status(200).send(info);
    })
    .catch((err) => {
      res.send(err);
    });
};

const allpro = async (req, res) => {
    let pdd = await goods.findAll();
    res.send(pdd);
}

const onepro = async (req, res) => {
    let id = req.params.id;
    let one = await goods.findOne({where:{id:id}});
    res.status(200).send(one);
}

const update = async (req, res) => {
    let id = req.params.id;
    let update = await goods.update(req.body,{where:{id:id}})
    res.status(200).send(update);
}

const del = async (req, res) => {
    let id = req.params.id;
    let del = await goods.destroy({where:{id:id}})
    res.status(200).send("rec deleted");
}

module.exports = {
  add,
  allpro,
  onepro,
  update,
  del
};
