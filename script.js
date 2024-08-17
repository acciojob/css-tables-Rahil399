//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('#myTable tr');

    rows.forEach(function(row, index) {
        row.style.backgroundColor = index % 2 === 0 ? '#ffffff' : '#f2f2f2';
    });
});
