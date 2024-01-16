function submitItemForm() {
    // Get form values
    const itemName = document.getElementById('itemName').value;
    const rate = document.getElementById('rate').value;
    const itemDate = document.getElementById('itemDate').value;
    const qty = document.getElementById('qty').value;

    // Store the item data in localStorage
    const itemHistoryData = JSON.parse(localStorage.getItem('itemHistoryData')) || [];
    itemHistoryData.push({ itemName, rate, itemDate, qty });
    localStorage.setItem('itemHistoryData', JSON.stringify(itemHistoryData));
}
function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}
