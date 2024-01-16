function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}

function populateMilkHistoryTable() {
    const milkTable = document.getElementById('milkTable');
    const tbody = milkTable.getElementsByTagName('tbody')[0];

    tbody.innerHTML = '';

    const milkHistoryData = JSON.parse(localStorage.getItem('milkHistoryData')) || [];

    const groupedData = milkHistoryData.reduce((acc, entry) => {
        if (!acc[entry.date]) {
            acc[entry.date] = { morning: '', evening: '' };
        }
        acc[entry.date][entry.time.toLowerCase()] = entry.litres;
        return acc;
    }, {});

    // Convert the object to an array and sort by date
    const sortedData = Object.entries(groupedData).sort((a, b) => new Date(a[0]) - new Date(b[0]));

    sortedData.forEach(([date, entry]) => {
        const row = tbody.insertRow();
        const dateCell = row.insertCell(0);
        const morningCell = row.insertCell(1);
        const eveningCell = row.insertCell(2);

        dateCell.textContent = date;
        morningCell.textContent = entry.morning;
        eveningCell.textContent = entry.evening;
    });
}

document.addEventListener('DOMContentLoaded', populateMilkHistoryTable);