import axios from "axios";
export default axios.create ({
    baseURL: "https://localhost:5157",
    headers: {
        "Content-type": "application/json"
    }
});