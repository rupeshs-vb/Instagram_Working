import axios from "axios";
import { userAction } from "./user-slice";

const baseUrl = `http://127.0.0.1:8000`;

export const LoginUsers = (userDetail) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.post(`${baseUrl}/api/login/`, userDetail);
      if (response.status === 200) {
        const data = response.data.data;
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = data.token;
        return data;
      } else if (response.data.code === 422) {
        response.data.message = "Invalid email or password";
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchData();
      dispatch(userAction.loginUser(data));
      dispatch(userAction.getSelectedUser(data));

      return true;
    } catch (error) {
      console.log("hello");
      console.log(error.message);
      return false;
    }
  };
};

export const getUserPost = (user_id) => {
  return async (dispatch) => {
    const fetchPost = async () => {
      const response = await axios.get(`${baseUrl}/api/post?id=${user_id}`);
      console.log(response);
      if (response.status === 200) {
        const data = response.data;
        return data;
      } else if (response.data.code === 422) {
        response.data.message = "Invalid email or password";
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchPost();
      dispatch(userAction.getUserPost(data));
      return true;
    } catch (error) {
      console.log("hello");
      console.log(error.message);
      return false;
    }
  };
};

export const deletePost = (post_id) => {
  return async (dispatch) => {
    const fetchPost = async () => {
      const response = await axios.delete(`${baseUrl}/api/post/${post_id}/`);
      console.log(response);
      if (response.status === 200) {
        return "Post Deleted Successfully";
      } else if (response.data.code === 422) {
        response.data.message = "Invalid email or password";
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchPost();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const updateUserPost = (post_id, newData) => {
  return async (dispatch) => {
    const fetchPost = async () => {
      const response = await axios.put(
        `${baseUrl}/api/post/${post_id}/`,
        newData
      );
      if (response.status === 200) {
        return "Post Updated Successfully";
      } else if (response.data.code === 422) {
        response.data.message = "Invalid email or password";
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchPost();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addNewPost = (postDetails) => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log(postDetails, "-=============");
      const response = await axios.post(`${baseUrl}/api/post/`, postDetails, {
        headers: {
          "Content-type":
            "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW;",
        },
      });

      if (response.status === 200) {
        console.log(response, "-=============");
        return "Post created Successfully";
      } else if (response.data.code === 422) {
        response.data.message = "Invalid email or password";
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchData();
      return data;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
};

export const registerUser = (userDetails) => {
  return async (dispatch) => {
    const fetchPost = async () => {
      const response = await axios.post(`${baseUrl}/api/user/`, userDetails, {
        headers: {
          "Content-type":
            "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW;",
        },
      });
      if (response.status === 200) {
        return "Account created successfully";
      } else if (response.data.code === 422) {
        response.data.message = "Invalid email or password";
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchPost();
      return data;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
};

export const SearchUser = (querry) => {
  return async (dispatch) => {
    const fetchPost = async () => {
      const response = await axios.get(`${baseUrl}/api/user?name=${querry}`);
      if (response.status === 200) {
        const data = response.data;
        return data;
      } else if (response.data.code === 422) {
        response.data.message = "Invalid email or password";
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchPost();
      dispatch(userAction.getAllUsers(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const SelectedUser = (user_id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/api/user/${user_id}`);
      if (response.status === 200) {
        console.log(response);
        const data = response.data;
        return data;
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchData();
      dispatch(userAction.getSelectedUser(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const AddFollower = (user_id, follo_data) => {
  return async (dispatch) => {
    const fetchPost = async () => {
      const tempObj = { follow: follo_data };
      const response = await axios.put(
        `${baseUrl}/api/user/${user_id}/`,
        tempObj
      );
      console.log(response, "response=========================");
      if (response.status === 200) {
        return "follower Added";
      } else if (response.data.code === 422) {
        response.data.message = "Invalid email or password";
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchPost();
      return data;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  };
};
export const validateToken = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");
      const response = await axios.get(`${baseUrl}/api/check/`);
      if (response.status === 200) {
        const data = response.data.data;
        return data;
      }
      throw new Error(
        response.data.message || "Something went wrong! Please try again..."
      );
    };

    try {
      const data = await fetchData();
      dispatch(userAction.loginUser(data));
      dispatch(userAction.getSelectedUser(data));
      return true;
    } catch (error) {
      console.log("hello");
      console.log(error.message);
      return false;
    }
  };
};
