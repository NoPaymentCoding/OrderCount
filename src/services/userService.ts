import axios from "axios";
import { SERVER_URL } from "../data/serverData";

class userService {
  async signUp(email: string, password: string) {
    let data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/members/join`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": `application/json`,
            origin: `http://localhost:3003`,
          },
        }
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}

export { userService };
