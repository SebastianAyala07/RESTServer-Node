'use strict';

const { response } = require('express');

const getUsers = ( req, res = response ) => {
    const {q, nombre, apiKey} = req.query;
    res.json(
        {
            msg: "get API - controlador",
            q,
            nombre,
            apiKey
        }
    );
};

const putUsers = ( req, res ) => {
    const id = req.params.id;
    res.json(
        {
            msg: "put API - controller",
            id
        }
    );
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