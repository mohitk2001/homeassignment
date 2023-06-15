# Jira is a widely used issue tracking and project management software developed by Atlassian. It is designed to help teams plan, track, and manage their work effectively. 
  Some Key features:
1. Issue Tracking
 2.Agile Project Management
3. Customization and Workflow
	4. Integration and Extensibility
	5. Reporting and Analytics

# Step 1:
I have created Plugin with the help of Atlassian SDK and it will start the JIRA on the local host (localhost:2990/jira)
	1. For more details: 
		a. You can refer this link to install Atlassian SDK:
			i. https://developer.atlassian.com/server/framework/atlassian-sdk/set-up-the-atlassian-plugin-sdk-and-build-a-project/
		b. Create a plugin and start JIRA server on localhost:
			i. https://developer.atlassian.com/server/framework/atlassian-sdk/create-a-helloworld-plugin-project/

# Step 2:
I have created a API using NodeJS/Express JS for making a call to JIRA REST API 
JIRA REST API: The Jira REST API (Application Programming Interface) is a set of endpoints and methods provided by Atlassian Jira that allows developers to interact with Jira programmatically
The Jira REST API supports CRUD (Create, Read, Update, Delete) operations, allowing developers to:
	1. Create new issues, comments, or attachments.
	2. Retrieve issue details, project information, user data, and more.
	3. Update or edit existing issues, workflows, or project configurations.
	4. Delete issues or other Jira entities.

# Step 3:
I have created front end webpage using React JS with Atlaskit and Material UI
In the React App, I have created UI where all the JIRA projects with count of issues will be displayed in table format

# Summary:
React JS App request to Node JS server for JIRA project related details, then Node JS server will make a call to JIRA REST API and retrieve a details of JIRA projects. After that NODE JS server send back a response to React JS App. 

