var ErrorClass = require('../../class/error-class');

/**
 * @name Audio.LoaderError
 * @class Класс ошибок загрузчика.
 * <p>Расширяет <xref scope="external" href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</xref>.</p>
 * @param {String} message Текст ошибки.
 *
 * @constructor
 */
var LoaderError = function(message) {
    ErrorClass.call(this, message);
};
LoaderError.prototype = ErrorClass.create("LoaderError");

/**
 * Таймаут загрузки.
 * @type String
 * @const
 * @name Audio.LoaderError.TIMEOUT
 */
LoaderError.TIMEOUT = "request timeout";
/**
 * Ошибка запроса на загрузку.
 * @type String
 * @const
 * @name Audio.LoaderError.FAILED
 */
LoaderError.FAILED = "request failed";

module.exports = LoaderError;
