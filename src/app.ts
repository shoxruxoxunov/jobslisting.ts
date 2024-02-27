import { getDate } from "./requset.js";
import { updateUI } from "./updateUI.js";
getDate("http://localhost:3000/jobs")
  .then((data) => {
    updateUI(data);
  })
  .catch((error) => {
    console.log(error);
  });

