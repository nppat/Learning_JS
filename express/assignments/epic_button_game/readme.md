# Epic Button Assigment #

**Any time the epic button is pushed, the count should update on every user
who is connected via sockets.  This should happen in real time.**

* When epic button is pushed, socket.emit('epic_button_clicked')
 * server side, socket.on('epic_button_clicked' funciton(data))...

* Reset button pushed, socket.emit('reset_button_clicked')
	* Server side, socket.on('reset_button_clicked', function())...

* Counter variable on server to keep track of epic button clicks

* When user clicks reset button, counter resets to 0