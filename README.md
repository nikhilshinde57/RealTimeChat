# Real Time Chat Application
A real time web based chat application.

------------------------------------------
#Steps to run:
1. Install Node.js '8.9.4' and above
2. Go to the root directory of this project.
3. On command line type '''npm install''' and hit enter key.
4. On command line type '''npm start''' and hit enter key.

-Great now our server is running on default port '''3000'''
-Open any browser with which you are familiar and enter '''http://localhost:3000'''  and hit enter key.
-You will see one form on web page.
-Enter the display name and chat room name.
-Display name is the name with that you will get introduced to all other member of that chat room.
-Chat room name is anything but cannot be empty.
-Lets consider I have entered 'Display Name' as 'Nikhil' and 'Room Name' as 'Classmates'.
-Once you click on 'Join Chat' button you redirect to another page and where you can see 'Room Name' and welcome message from system.
-Now open another new window and enter same url '''http://localhost:3000'''  and hit enter key.
-Once again enter 'Display Name' which is must be different than one which is already entered and 'Room Name' which is must be same as one which is already entered.
-Now click on the 'Join Chat' button.
-This time also you will see the same chat room name and welcome message from system for newly entered display name.
-Now check the 1st window you can see the system message saying that the new person has joined the chat room with his/her name.
-This is nothing but 2 different people with same chat room have joined the chat room.
-Now they can chat with each other.
-Many more peoples can also join that same chat room and chat between that created groups.
-If any one  wants to leave that chat room just click on 'Logout' button. You will redirect to home page and the all other group members will get message saying the 'XYZ' left the chat room.
-As we are not using any database so it will not store the chat anywhere.
-Also we don't have any restriction on number of people joining the same chat room.
-This total project is developed using Node.js.
-The main objective is to learn the Socket.IO enables real-time bidirectional event-based communication.  
