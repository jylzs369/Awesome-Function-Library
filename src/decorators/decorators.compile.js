"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

// 修饰类方法，只读
function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
} // 修饰类，混入


function mixins() {
  for (var _len = arguments.length, methods = new Array(_len), _key = 0; _key < _len; _key++) {
    methods[_key] = arguments[_key];
  }

  return function (target) {
    Object.assign.apply(Object, [target.prototype].concat(methods));
  };
}

var Role = (_class =
/*#__PURE__*/
function () {
  function Role(config) {
    _classCallCheck(this, Role);

    this._name = config.name;
    this._age = config.age;
    this._gender = config.gender;
  }

  _createClass(Role, [{
    key: "hello",
    value: function hello() {
      console.log("Hello,this is ".concat(this._name, "."));
    }
  }]);

  return Role;
}(), (_applyDecoratedDescriptor(_class.prototype, "hello", [readonly], Object.getOwnPropertyDescriptor(_class.prototype, "hello"), _class.prototype)), _class);
var peter = new Role({
  name: 'Peter'
});
peter.hello();

peter.hello = function () {
  console.log(1);
};
