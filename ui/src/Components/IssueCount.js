import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/axiosInstance";
const IssueCount = ({ projectId }) => {
  // This state will store the count of issues related to projects
  const [issues, setIssues] = useState(0);
  useEffect(() => {
    // This will make a call to backend api and get the count of issues related to specific project
    axiosInstance
      .get(`/getIssueCount/${projectId}`)
      .then((res) => {
        console.log(res);
        setIssues(res.data.issueCount);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div>{issues}</div>;
};

export default IssueCount;
