import {GitHub} from './GitHub.js';
import {Ui} from './Ui.js';

(() => {
    const github = new GitHub();
    const ui = new Ui();
    const readyState = document.readyState;

    if (readyState === 'interactive' || readyState === 'complete') {
        const searchUser = document.querySelector('.searchUser');

        searchUser.addEventListener('keyup', (event) => {
            const userName = event.target.value;
            if (userName.trim() !== '') {
                github.getUser(userName)
                    .then((data) => {
                        ui.showProfile(data);
                    })
            }
        })
    }
})()
