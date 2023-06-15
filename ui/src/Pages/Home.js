import React, { useState, useEffect } from "react";
import Spinner from "@atlaskit/spinner";
// Home.css file containing CSS styling for elements of Home component
import "./Home.css";
import TableTree, {
  Cell,
  Header,
  Headers,
  Row,
  Rows,
} from "@atlaskit/table-tree";
import { css } from "@emotion/react";
import { axiosInstance } from "../api/axiosInstance";
import IssueCount from "../Components/IssueCount";
import PopupAlert from "../Components/PopupAlert";
const Home = () => {
  // this state to store status of prrojects data, whether it has loaded after api call
  const [isDataLoaded, setisDataLoaded] = useState(false);

  // CSS property for headers of the table
  const headerStyle = css({
    fontSize: "1.5rem",
    fontWeight: "bold",
  });

  // projects state is containing all the projects detail
  const [projects, setProjects] = useState([]);

  // When the component mounts, this useEffect fetches all the data from the backend API and stores the data in the projects state using the setState function.
  useEffect(() => {
    axiosInstance
      .get("/getallprojects")
      .then((res) => {
        setProjects(res.data);
        setisDataLoaded(true);
        // here status is updating after apu call
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Home">
      {/* Spinner/loading visual will be shown on the UI based on the condition and if status of isdataLoaded state change then table will be shown with prioject details */}
      {isDataLoaded !== true ? (
        <Spinner interactionName="load" />
      ) : (
        <TableTree>
          <Headers>
            <Header css={headerStyle} width={250}>
              Id
            </Header>
            <Header css={headerStyle} width={250}>
              Project Name
            </Header>
            <Header css={headerStyle} width={250}>
              Issue Count
            </Header>
            <Header css={headerStyle} width={250}>
              Action
            </Header>
          </Headers>
          <Rows
            items={projects}
            render={({ id, key, name }) => (
              <Row itemId={id}>
                <Cell singleLine>{id}</Cell>
                <Cell>{name}</Cell>
                <Cell>
                  {/* Added IssueCount compoent to count all the issue related to specific project */}
                  <IssueCount projectId={id} />
                </Cell>
                <Cell>
                  {/* I have included the PopupAlert component in this code to present an alert message when the user intends to remove a specific project from the table. */}
                  {/* I have passed the state values and setProjects method to use in child component as a props */}
                  <PopupAlert
                    projectName={name}
                    projectId={id}
                    setProjects={setProjects}
                  />
                </Cell>
              </Row>
            )}
          />
        </TableTree>
      )}
    </div>
  );
};

export default Home;
