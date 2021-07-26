'use strict';

const { response } = require('express');

const getUsers = ( req, res = response ) => {
    res.json({msg: "get API - controlador"});
};

const putUsers = ( req, res ) => {
    res.json({msg: "put API - controller"});
};

const postUsers = ( req, res ) => {
    const { nombre, edad } = req.body;
    res.json(
        {
            msg: "post API - controller",
            nombre,
            edad
        }
    );
};

const deleteUsers = ( req, res ) => {
    res.json({msg: "delete API - controller"});
};

const patchUsers = ( req, res ) => {
    res.json({msg: "patch API - controller"});
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers
}