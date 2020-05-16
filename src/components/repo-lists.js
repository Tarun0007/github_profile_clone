import React, { Component } from 'react';

class repoLists extends Component {


    state = {
        loading: true,
        reposList: [],
        filter: 'name',
        open: false
    };

    async componentDidMount() {
        let currentComponent = this;
        const url = "https://api.github.com/users/supreetsingh247/repos";
        const response = await fetch(url);
        const data = response.json();
        data.then(function (result) {
            console.log(result);
            currentComponent.setState({
                reposList: result.sort((a,b) => a.updated_at > b.updated_at)
            })
        })
    }

    onButtonClick(name){
        this.setState({
            filter: name
        })
        const details = document.querySelectorAll("details");
        details[0].removeAttribute("open");
    }


    render() {
        const listItems = this.state.reposList.map( (item) => {
            const update_Date = item.updated_at;
            return (
                <li className="repo-card" key={item.name} style={{ display: item[this.state.filter] ? 'flex' : 'none' }}> 
                    <div className="projectSection">
                        <h3 className="repos-heading">
                            <a href={item.html_url} target="_blank">{item.name}</a>
                        </h3>
                        <div className="projectDetails">
                            {item.description && <p>{item.description}</p>}
                            {item.language && <span> <i className={item.language}></i> {item.language}</span>}
                            {item.stargazers_count > 0 &&
                                <span>
                                    <a href={item.stargazers_url}>
                                        <svg aria-label="star" className="stargazer-count" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                                        {item.stargazers_count}
                                    </a>
                                </span>
                            }
                            {item.forks_count > 0 &&
                                <span>
                                    <a href={item.forks_url}>
                                        <svg aria-label="fork" className="stargazer-count" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                                        {item.forks_count}
                                    </a>
                                </span>
                            }
                            {
                                item.license &&
                                <span>
                                <a href={item.license.url}>
                                    <svg className="stargazer-count" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"></path></svg>
                                    {item.license.name}
                                </a>
                            </span>
                            }
                            <span> Updated on {update_Date}</span>
                        </div>
                    </div>
                    <div className="projectRating">
                        <button className="rating-btn">
                            <svg className="octicon octicon-star mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                            Star
                        </button>

                        <div className="rating-btn-border"></div>
                    </div>
                </li>
            );
        });

        return (
            <div className="userRepo-section">
                <div className="tabsSection">
                    <ul className="viewTabs">
                        <li>Overview</li>
                        <li className="active">Repositories <span className="viewTab-badges">{this.state.reposList.length}</span></li>
                        <li>Projects <span className="viewTab-badges">0</span></li>
                        <li>Stars <span className="viewTab-badges">7</span></li>
                        <li>Followers <span className="viewTab-badges">6</span></li>
                        <li>Following <span className="viewTab-badges">2</span></li>
                    </ul>
                </div>
                <div className="viewFilter">
                    <input className="searchRepo" type='text' placeholder='Find a repository…' />
                    <details className="filterView">
                        <summary className="btn" aria-haspopup="menu" role="button">
                            <i>Type:</i>
                            <span data-menu-button=""> {this.state.filter === 'name' && <span>All</span> } {this.state.filter != 'name' && <span>{this.state.filter}</span>} </span>
                            <span className="dropdown-caret"></span>
                        </summary>
                        <div className="details-dropdown">
                            <ul>
                                <li>Select type</li>
                                <li onClick={this.onButtonClick.bind(this, 'name')}>
                                    {this.state.filter ==='name' && 
                                        <svg className="selectMenu-icon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    }All
                                </li>
                                <li onClick={this.onButtonClick.bind(this, 'sources')}>
                                    {this.state.filter ==='sources' && 
                                        <svg className="selectMenu-icon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    }Sources
                                </li>
                                <li onClick={this.onButtonClick.bind(this, 'fork')}>
                                    {this.state.filter ==='fork' && 
                                        <svg className="selectMenu-icon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    }Forks
                                </li>
                                <li onClick={this.onButtonClick.bind(this, 'archived')}>
                                    {this.state.filter ==='archived' && 
                                        <svg className="selectMenu-icon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    }Archived
                                </li>
                                <li onClick={this.onButtonClick.bind(this, 'mirrors')}>
                                    {this.state.filter ==='mirrors' && 
                                        <svg className="selectMenu-icon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
                                    }Mirrors
                                </li>
                            </ul>
                        </div>
                    </details>

                    <details className="filterLanguage">
                        <summary className="btn" aria-haspopup="menu" role="button">
                            <i>Language:</i>
                            <span data-menu-button=""> All </span>
                            <span className="dropdown-caret"></span>
                        </summary>
                        <div className="details-dropdown">
                            <ul>
                                <li>Select Language</li>
                                <li><svg className="selectMenu-icon-check" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>All</li>
                            </ul>
                        </div>
                    </details>
                </div>
                {this.state.filter != 'name' && <p className="searched-repos"> <b>{this.state.filter}</b> repositories</p>}
                <ul className="listofRepos-section">
                    {listItems}
                </ul>
            </div>

        );
    }
}

export default repoLists;