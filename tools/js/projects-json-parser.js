var projects_container = document.getElementById("projects-section");

function getLanguages(languages) {
    let parsed_languages = "";
    for (let n = 0; n < languages.length; n++) {
        parsed_languages += `<code>&emsp;&emsp;&emsp;&emsp;<span class="content">"${languages[n]}"</span>${languages.length - 1 != n ? ',' : ''}</code>`;
    }
    return parsed_languages;
}

fetch('../ressources/json/projects_content.json')
    .then(res => res.json())
    .then(data => {
        let projects = data['projects'];
        for (let i = 0; i < projects.length; i++) {
            projects_container.innerHTML += `<div class="project-slide">
                <span class="title-wrapper">
                    <h1 class="title">${projects[i]['title']}</h1>
                </span>
                <div class="project-grid-content-wrapper">
                    <div class="project-content-wrapper">
                        <div class="project-info-wrapper">
                            <h2 class="summary-title">Project summary</h2>
                            <a target="_blank" href="${projects[i]['link']}" class="github-link">
                                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github">
                                    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                                </svg>
                            </a>
                        </div>
                        </span>
                        <p class="project-content">
                        ${projects[i]['desc_1']}
                            <br />
                            <br />
                            ${projects[i]['desc_2']}
                        </p>
                    </div>
                    <div class="project-code-wrapper">
                        <div>
                            <code><span class="curly-bracket">{</span></code>
                            <code>&emsp;&emsp;<span class="selector">"subject"</span>: <span class="content">"${projects[i]['name']}"</span>,</code>
                            <code>&emsp;&emsp;<span class="selector">"estimated_time_hour"</span>: <span class="content-number">${projects[i]['estimated_time']}</span>,</code>
                            <code>&emsp;&emsp;<span class="selector">"languages"</span>: <span class="square-bracket">[</span></code>
                            ${getLanguages(projects[i]['languages'])}
                            <code>&emsp;&emsp;<span class="square-bracket">]</span></code>
                            <code><span class="curly-bracket">}</span></code>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });