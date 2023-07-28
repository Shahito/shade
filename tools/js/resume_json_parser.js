var resume_desc = document.querySelector("#resume-intro p");
var job_container = document.getElementById("xp-carousel");

fetch('../ressources/json/resume_content.json')
    .then(res => res.json())
    .then(data => {
        resume_desc.innerHTML = data['desc'];
        let jobs = data['jobs'];
        for (let i = 0; i < jobs.length; i++) {
            job_container.innerHTML += `
        <div class="xp-card-wrapper">
            <div class="xp-card" ${jobs[i]['current'] ? 'current-role-text="Current role"' : ''}>
                <div class="xp-card-intro">
                    <h2 class="subtitle job-year">${jobs[i]['year']}</h2>
                    <div class="job-info">
                        <h1 class="title card-title">${jobs[i]['title']}</h1>
                        <span class="company">${jobs[i]['company']}</span>
                    </div>
                </div>
                <p class="xp-card-desc">${jobs[i]['desc']}</p>
            </div>
        </div>`;
        }
    });