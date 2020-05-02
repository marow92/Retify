import { register } from "../../api";

export default {
    data: function() {
        return {
            form: {
                email: null,
                username: null,
                password: null,
                dateOfBirth: null,
            },
        };
    },
    methods: {
        onRegister() {
            console.log(this.form);
            register(this.form.email, this.form.password);
        },
    },
};
