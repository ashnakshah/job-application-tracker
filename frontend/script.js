const jobStatus = ["Applied", "Interview", "Offer", "Rejected"];
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
                `;
                const dropdown = document.createElement("select");
                dropdown.className = "perJobStatus";
                jobStatus.forEach(element => {
                    const option = document.createElement("option");
                    option.textContent = element;
                    dropdown.appendChild(option);
                });
                dropdown.value = job.status;
                dropdown.addEventListener("change", function(e){
                    console.log(e.target.value);
                    fetch(`http://127.0.0.1:5000/jobs/${job.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({status:e.target.value, notes:""})
                    }).then(()=>loadJobs());
                });
                li.appendChild(dropdown);
                const deleteButton = document.createElement("button");
                deleteButton.textContent = "delete";
                deleteButton.onclick = () => deleteJob(job.id);
                li.appendChild(deleteButton);
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
    }).then(() => loadJobs());
});