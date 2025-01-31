const projects = [
    {
        name: "Project A",
        cost: 1000,
        uploadTime: "2025-01-10 14:00",
        solveTime: "2025-01-15 10:00",
        codeUploaded: false,
    },
    {
        name: "Project B",
        cost: 2000,
        uploadTime: "2025-01-05 11:30",
        solveTime: "2025-01-20 12:00",
        codeUploaded: true,
    },
    {
        name: "Project C",
        cost: 1500,
        uploadTime: "2025-01-12 13:15",
        solveTime: "2025-01-18 16:00",
        codeUploaded: true,
    }
];

function calculateProfit(cost) {
    return cost * 0.2;
}

function displayProjects() {
    const tableBody = document.getElementById('project-table');
    tableBody.innerHTML = '';
    projects.forEach(project => {
        let solver = project.codeUploaded ? 'سنابل' : 'Admin';
        let profit = project.codeUploaded ? calculateProfit(project.cost) : '-';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${project.name}</td>
            <td>$${project.cost}</td>
            <td>${project.uploadTime}</td>
            <td>${project.solveTime}</td>
            <td>${solver}</td>
            <td>${profit === '-' ? '-' : '$' + profit}</td>
        `;
        tableBody.appendChild(row);
    });
}

function filterTable() {
    const searchTerm = document.getElementById('project-search').value.toLowerCase();
    const selectedSolver = document.getElementById('solver-filter').value;
    const tableBody = document.getElementById('project-table');
    const rows = tableBody.getElementsByTagName('tr');

    for (let row of rows) {
        const projectName = row.cells[0].innerText.toLowerCase();
        const solverCell = row.cells[4].innerText.toLowerCase();
        const solverMatch = selectedSolver ? solverCell.includes(selectedSolver.toLowerCase()) : true;
        const searchMatch = projectName.includes(searchTerm);

        if (solverMatch && searchMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

window.onload = displayProjects;
