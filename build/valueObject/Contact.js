"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ValueObject_1 = require("../base/ValueObject");
var Contact = /** @class */ (function (_super) {
    tslib_1.__extends(Contact, _super);
    function Contact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Contact.create = function (props) {
        return new Contact(props);
    };
    Object.defineProperty(Contact.prototype, "name", {
        /**
         * Get the name.
         */
        get: function () {
            return this.props.name;
        },
        /**
         * Set the name.
         */
        set: function (value) {
            this.props.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "email", {
        /**
         * Get the email.
         */
        get: function () {
            return this.props.email;
        },
        /**
         * Set the email.
         */
        set: function (value) {
            this.props.email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phone", {
        /**
         * Get the phone.
         */
        get: function () {
            return this.props.phone;
        },
        /**
         * Set the phone.
         */
        set: function (value) {
            this.props.phone = value;
        },
        enumerable: false,
        configurable: true
    });
    return Contact;
}(ValueObject_1.ValueObject));
exports.default = Contact;
//# sourceMappingURL=Contact.js.map