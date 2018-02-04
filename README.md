# Real Time Chat Application
A real time web based chat application.

------------------------------------------
#Steps to run:
1. Install Node.js '8.9.4' and above.
2. Go to the root directory of this project.
3. On command line type '''npm install''' and hit enter key.
4. On command line type '''npm start''' and hit enter key.
------------------------------------------
#About Application
1. Great now our server is running on default port '''3000'''.
2. Open any browser with which you are familiar and enter '''http://localhost:3000'''  and hit enter key.
3. You will see one form on web page.
4. Enter the display name and chat room name.
5. Display name is the name with that you will get introduced to all other member of that chat room.
6. Chat room name is anything but cannot be empty.
7. Lets consider I have entered 'Display Name' as 'Nikhil' and 'Room Name' as 'Classmates'.
8. Once you click on 'Join Chat' button you redirect to another page and where you can see 'Room Name' and welcome message from system.
9. Now open another new window and enter same url '''http://localhost:3000'''  and hit enter key.
10. Once again enter 'Display Name' which is must be different than one which is already entered and 'Room Name' which is must be same as one which is already entered.
11. Now click on the 'Join Chat' button.
12. This time also you will see the same chat room name and welcome message from system for newly entered display name.
13. Now check the 1st window you can see the system message saying that the new person has joined the chat room with his/her name.
14. This is nothing but 2 different people with same chat room have joined the chat room.
15. Now they can chat with each other.
16. Many more peoples can also join that same chat room and chat between that created groups.
17. If any one  wants to leave that chat room just click on 'Logout' button. You will redirect to home page and the all other group members will get message saying the 'XYZ' left the chat room.
18. As we are not using any database so it will not store the chat anywhere.
19. Also we don't have any restriction on number of people joining the same chat room.
20. This total project is developed using Node.js.
21. The main objective is to learn the Socket.IO enables real-time bidirectional event-based communication.  
