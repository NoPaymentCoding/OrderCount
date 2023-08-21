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
          },
        }
      );
      return response;
    } catch (e) {
      return e;
    }
  }

  async signIn(email: string, password: string) {
    let data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/members/login`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      );
      console.log(response);
      return response;
    } catch (e) {
      return e;
    }
  }
}

export { userService };
