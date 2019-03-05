# [M-A-Platform](https://m-a-platform.herokuapp.com/)

It's a platform for YDRC (Youth Development Resources Center) in Hebron, Palestine. Which have many activities init, each activity have many students init and related to one program and one objective. So the app is made to handle these relations.

# Problem statemanet:
YDRC manager is using excel sheets to track students, activities, programs, and objectives. So it's very hard to handle them because:
1. The student may be duplicated, so he has to search for the user before add him as a new row to the excel sheet.
2. The manager reuse the excel sheet created to create new one that shows the number of students on each activity, objective, or program.

# Solution:
Web application, that handle all of students, activities, programs, and objectives relations. So students will be added one time and then set it's relation to many activities. Also when create the new activity, will relate it to program and objective. That means when we show activity page, the students in it will be appeard.
