import axios from "axios";

const URL = "https://randomuser.me/api/?results=50&nat=us"

// eslint-disable-next-line
export default {
    getEmployees: function() {
        return axios.get(URL);
    }
}