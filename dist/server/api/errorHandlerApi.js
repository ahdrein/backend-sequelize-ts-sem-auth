"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(err, req, res, next) {
    console.error('API error handler for executada: ${err}');
    res.status(500).json({
        errorCode: 'ERR-001',
        message: "Erro Interno do Servidor " + err
    });
}
exports.errorHandlerApi = errorHandlerApi;
