const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const params = req.query;

    res.json({
    msg: 'get API - controlador',
  });
};

const usuarioGet = (req, res = response) => {
  res.json({
    msg: 'get one API - controlador',
  });
};

const usuariosPost = (req, res = response) => {
  const body = req.body;
  res.json({
    msg: 'post API',
    usuarios: body,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: 'put API',
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API',
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API',
  });
};

module.exports = {
  usuariosGet,
  usuarioGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
};
