    /*Students Portfolio Repo
     You are in charge of creating a Student Portfolio Repo for both Backend and Frontend (Frontend is extra).
     In this second "step" the application should enable the creation, editing, deletion, listing of projects.
     Every project will have this information:
     - Name
     - Description
     - Creation Date
     - ID
     - RepoURL -> Code Repo URL (es.: GitHub / BitBucket project URL)
     - LiveURL -> URL of the "live" project
     - StudentID
     //BACKEND
     You are in charge of building the Backend using NodeJS + Express. The backend should include the following routes:
     GET /projects => returns the list of projects
     GET /projects/id => returns a single project
     POST /projects => create a new project (Add an extra property NumberOfProjects on student and update it every time a new project is created)
     PUT /projects/id => edit the project with the given id
     DELETE /projects/id => delete the project with the given id
     The persistence must be granted via file system (es.: Json file with a list of students inside)
     
     Bodies, params and queries must be validated with express-validator middleware
     
     [EXTRA] GET /students/:studentsId/projects/ => get all the projects for a student with a given ID
     [EXTRA] GET /projects?name=searchQuery => filter the projects and extracts the only that match the condition (es.: Name contains searchQuery)
     [EXTRA] //FRONTEND
     You are in charge of building the Frontend too. Use ReactJS to create an application for managing the students.
     Add new pages to handle:
     - New Project creation / deletion / update / list
     - Show all projects for a selected student using the /students/:studentsId/projects/ API
     - Add a search bar to search for projects
     P.S.: remember to enable CORS on the backend to make the server accessible from the frontend
 */