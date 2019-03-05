# [M-A-Platform](https://m-a-platform.herokuapp.com/)

It's a platform for YDRC (Youth Development Resources Center) in Hebron, Palestine. Which have many activities init, each activity have many students init and related to one program and one objective. So the app is made to handle these relations.

# Problem statemanet:
YDRC manager is using excel sheets to track students, activities, programs, and objectives. So it's very hard to handle them because:
1. The student may be duplicated, so he has to search for the user before add him as a new row to the excel sheet.
2. The manager reuse the excel sheet created to create new one that shows the number of students on each activity, objective, or program.

# Solution:
Web application, that handle all of students, activities, programs, and objectives relations. So students will be added one time and then set it's relation to many activities. Also when create the new activity, will relate it to program and objective. That means when we show activity page, the students in it will be appeard.


# Function requirements:
The application is made for manager of the YDRC on this sprint, so he can:
1. Add new students.
2. Create new activity and relate it's objective and program.
3. Create new program.
4. Objectives will be added by database manager.
6. View all of activities, programs and students lists.
7. View one activity page which shows the students of it.
8. View one program page, which shows activities init with number of stuents in each activity.
9. On activity page, he/she is able to add/relate new students to the activity.

# Key technologies:
- Back end: [React.js](https://reactjs.org/docs/getting-started.html)
- Fornt end: [Express.js](https://expressjs.com/en/api.html)
- Forntend routing: [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- Forms: [Formik](https://jaredpalmer.com/formik/docs/overview)
- Tables: [React Table](https://github.com/tannerlinsley/react-table/tree/v6)
- Date Plicker: [React DatePicker](https://reactdatepicker.com/)

# Files structure:

## For React App:
```
  |__ public
  |     |__ index.html
  |    
  |__ src
  |     |__ app.js
  |     |__ index.js
  |     |__ components
  |             |__ Header
  |             |      |__ index.js
  |             |      |__ index.css
  |             |
  |             |__ Form
  |             |      |__ index.js
  |             |      |__ index.css
  |             |
  |             |__ Button
  |             |      |__ index.js
  |             |      |__ index.css
  |             |
  |             |__ Table
  |             |      |__ index.js
  |             |      |__ index.css
  |             |
  |             |__ AddButton
  |             |      |__ index.js
  |             |      |__ index.css
  |             |
  |             |__  AddAutoButton
  |             |      |__ index.js
  |             |      |__ index.css
  |             |
  |             |__ Pages
  |                    |__ CreateActivity 
  |                    |           |__ index.js
  |                    |           |__ index.css
  |                    |
  |                    |__  ViewActivities
  |                    |           |__ index.js
  |                    |           |__ index.css
  |                    |
  |                    |__  ActivityInformation
  |                    |           |__ index.js
  |                    |           |__ index.css
  |                    |
  |                    |__  CreateStudent
  |                    |           |__ index.js
  |                    |           |__ index.css
  |                    |
  |                    |__   ViewStudents
  |                    |           |__ index.js
  |                    |           |__ index.css
  |                    |
  |                    |__   CreateProgram
  |                    |           |__ index.js
  |                    |           |__ index.css
  |                    |
  |                    |__   View Programs
  |                    |           |__ index.js
  |                    |           |__ index.css
  |                    |
  |                    |__  Login page
  |                                |__ index.js
  |                                |__ index.css
  |         
  |__ .eslintrc
  |__ .babelrc
  |__ .gitignore
  |__ package.json
  |__ package-lock.json
```
## For Express Server
```
  |__ src
  |     |__ mongoose.config.js
  |     |__ router.js
  |     |__ server.js
  |     |__ app.js
  |     |__ controllers
  |     |       |__ user.controller.js
  |     |       |__ program.controllers.js
  |     |       |__ objective.controllers.js
  |     |       |__ auth.controllers.js
  |     |       |__ activity.controllers.js
  |     |
  |     |__ middlewares
  |     |       |__ checkAuth.middleware.js
  |     |
  |     |__ validations
  |     |       |__ checkUser.validation.js
  |     |       |__ checkProgram.validation.js
  |     |       |__ checkActivity.validation.js
  |     |       |__ checkObjective.validation.js
  |     |
  |     |__ models 
  |             |__ User.model.js
  |             |__ Program.model.js
  |             |__ Activity.model.js
  |             |__ Objective.model.js
  |             |__ ActivitiesUser.model.js
  |             
  |__ .eslintrc
  |__ .gitignore
  |__ package.json
  |__ package-lock.json
```
