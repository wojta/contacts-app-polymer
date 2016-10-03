var validator = require('validator');

var user_validator = {
    /**
     * Validates user
     * @param id user MongoDB id
     * @param user user object
     * @param onOk function called when user is valid to be saved
     * @param onInvalid function called when user is invalid, first parameter of function is error message
     */
    validate: function (id, user, onOk, onInvalid) {
        var phoneNumRegex=/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/

        if (id && !validator.isMongoId(id)) {
            onInvalid("Invalid user id!");
        } else if (!user.name) {
            onInvalid("User name field is misssing!");
        } else if (!user.name.first || validator.isEmpty(user.name.first)) {
            onInvalid("First name must be filled.")
        } else if (!user.name.last || validator.isEmpty(user.name.last)) {
            onInvalid("Last name must be filled.")
        } else if (!validator.isEmpty(user.email) && !validator.isEmail(user.email)) {
            onInvalid("Invalid e-mail address.")
        } else if (!validator.isEmpty(user.cell) && !phoneNumRegex.test(user.cell)) {
            onInvalid("Invalid cell phone number.")
        } else if (!validator.isEmpty(user.phone) && !phoneNumRegex.test(user.phone)) {
            onInvalid("Invalid phone number.")
        } else onOk();
    }
};


module.exports = user_validator;