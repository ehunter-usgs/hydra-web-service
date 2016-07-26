'use strict';


/**
 * Base class to define Handler API.
 *
 * A new handler is created for each request it handles.
 */
var AbstractHandler = function () {
  var _this;


  _this = {
    get: null,
    destroy: null
  };


  /**
   * Free references.
   */
  _this.destroy = function () {
    _this = null;
  };

  /**
   * Handle a get request.
   *
   * NOTE: this method should generally not throw Exceptions, and instead
   * should return a rejected promise.
   *
   * @param params {Object}
   *     query parameters for request.
   * @return {Promise}
   *     promise representing handling for this request.
   */
  _this.get = function (/*params*/) {
    return new Promise(function (resolve, reject) {
      reject(new Error('get not implemented'));
    });
  };


  return _this;
};


module.exports = AbstractHandler;
