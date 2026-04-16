document.addEventListener("DOMContentLoaded", loadJobs);

function deleteJob(id) {
    fetch(`http://127.0.0.1:5000/jobs/${id}`, {
        method: "DELETE"
    }).then(() => loadJobs());
}

function loadJobs() {
    fetch("http://127.0.0.1:5000/jobs")
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("jobList");
            list.innerHTML = "";

            data.forEach(job => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${job.company}</strong> - ${job.role}
                    (${job.status})
                    <button onclick="deleteJob(${job.id})">delete</button>
                `;
                list.appendChild(li);
            });
        });
}

document.getElementById("jobForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const job = {
        company: document.getElementById("company").value,
        role: document.getElementById("role").value,
        status: document.getElementById("status").value,
        notes: ""
    };
    fetch("http://127.0.0.1:5000/jobs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
    })
    .then(() => loadJobs());
});