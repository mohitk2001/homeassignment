const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
const cors = require("cors");
const axios = require("axios");
// this will handle the CORS error
app.use(cors());

//this is for coming data from front end in the json format
app.use(express.json());
const username = "admin";
const password = "admin";

//for getting all the projects from JIRA 
app.get("/getallprojects", (req, res) => {
  // axios will make a call to JIRA REST API and get the all project which has created on JIRA 
  axios
    .get("http://localhost:2990/jira/rest/api/2/project", {
      auth: {
        username,
        password,
      },
    })
    .then((response) => {
      
      res.send(response.data);
    })
    .catch((error) => {
       // This will send the error message in case error
      console.error("Error:", "Something went wrong");
    });
});

// for getting issue count of the project
app.get("/getIssueCount/:id", (req, res) => {
  const url=`http://localhost:2990/jira/rest/api/2/search?jql=project=${req.params.id}`
  // axis will make a call to JIRA REST API and get the count of issues related to project
  axios
    .get(url, {
      auth: {
        username,
        password,
      },
    })
    .then((response) => {
      // console.log(response.data.issues.length);
      // res.json will send the data in json format to front end app
      res.json({issueCount:response.data.issues.length});
    })
    .catch((error) => {
      // This will send the error message in case error
      console.error("Error:", "Something went wrong");
    });
});

//for deleting the project 
app.get("/deleteProject/:id", (req, res) => {

  const url=`http://localhost:2990/jira/rest/api/2/project/${req.params.id}`
  // axios will make call to JIRA Rest API and delete JIRA project 
  axios
    .delete(url, {
      auth: {
        username,
        password,
      },
    })
    .then((response) => {
      console.log(response.data);
      res.json({success:"Project has deleted"});
    })
    .catch((error) => {
      //  // This will send the error message in case error
      console.error("Error:", "Something went wrong");
    });
});


app.listen(port, () => {
  console.log(`server started at ${port}`);
});
