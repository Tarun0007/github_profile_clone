import React, { Component } from 'react';


class userList extends Component {


    state = {
        loading: true,
        userData: []
    };

    async componentDidMount() {
        let currentComponent = this;
        const url = "https://api.github.com/users/supreetsingh247";
        const response = await fetch(url);
        const data = response.json();
        data.then(function (result) {
            console.log(result);
            currentComponent.setState({
                userData: result
            })

        })
    };


    render() {
        return (
            <div className='userSection'>
                <div>
                    <img width="260" height="260" src={this.state.userData.avatar_url} alt="UserProfile" />
                    <h1 className='userNameSection'>
                        <span className='userName'>{this.state.userData.name}</span>
                        <span className='userId'>{this.state.userData.login}</span>
                    </h1>
                </div>
                <div className="userProfileDetails">
                    <button className='followButton'>Follow</button>
                    <p className='userExp'>{this.state.userData.bio}</p>

                    <ul className='contactDetails'>
                        <li>
                            <svg className="userDetails-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z"></path></svg>
                            <span className="userDetails-text">{this.state.userData.company}</span>
                        </li>
                        <li>
                            <svg className="userDetails-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                            <span className="userDetails-text">{this.state.userData.location}</span>
                        </li>
                        <li>
                            <svg className="userDetails-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
                            <span className="userDetails-text"><a href="mailto:supreetsingh.247@gmail.com">supreetsingh.247@gmail.com</a></span>
                        </li>
                    </ul>

                    <p className="user-report">Block or report user</p>
                </div>
            </div>
        );
    }

}

export default userList;



