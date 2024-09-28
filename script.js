function tab(position) {
    if (position === 0 || position === undefined || position === null) {
        document.getElementById('t1').style.backgroundColor = '#4CAF50';  // Green for active
        document.getElementById('t1').style.color = 'white'; // White text for active
        document.getElementById('t2').style.backgroundColor = '#f4f4f4';
        document.getElementById('t2').style.color = '#333';
        document.getElementById('t3').style.backgroundColor = '#f4f4f4';
        document.getElementById('t3').style.color = '#333';
        document.getElementById('t4').style.backgroundColor = '#f4f4f4';
        document.getElementById('t4').style.color = '#333';

        document.getElementById('c1').style.display = 'block';
        document.getElementById('c2').style.display = 'none';
        document.getElementById('c3').style.display = 'none';
        document.getElementById('c4').style.display = 'none';
    } else if (position === 1) {
        document.getElementById('t2').style.backgroundColor = '#4CAF50';
        document.getElementById('t2').style.color = 'white';
        document.getElementById('t1').style.backgroundColor = '#f4f4f4';
        document.getElementById('t1').style.color = '#333';
        document.getElementById('t3').style.backgroundColor = '#f4f4f4';
        document.getElementById('t3').style.color = '#333';
        document.getElementById('t4').style.backgroundColor = '#f4f4f4';
        document.getElementById('t4').style.color = '#333';

        document.getElementById('c1').style.display = 'none';
        document.getElementById('c2').style.display = 'block';
        document.getElementById('c2').style.backgroundColor = '#f9f9f9';  // Light background for content
        document.getElementById('c3').style.display = 'none';
        document.getElementById('c4').style.display = 'none';
    } else if (position === 2) {
        document.getElementById('t3').style.backgroundColor = '#4CAF50';
        document.getElementById('t3').style.color = 'white';
        document.getElementById('t2').style.backgroundColor = '#f4f4f4';
        document.getElementById('t2').style.color = '#333';
        document.getElementById('t1').style.backgroundColor = '#f4f4f4';
        document.getElementById('t1').style.color = '#333';
        document.getElementById('t4').style.backgroundColor = '#f4f4f4';
        document.getElementById('t4').style.color = '#333';

        document.getElementById('c1').style.display = 'none';
        document.getElementById('c2').style.display = 'none';
        document.getElementById('c3').style.display = 'block';
        document.getElementById('c3').style.backgroundColor = '#f9f9f9';
        document.getElementById('c4').style.display = 'none';  
    } else if (position === 3) {
        document.getElementById('t4').style.backgroundColor = '#4CAF50';
        document.getElementById('t4').style.color = 'white';
        document.getElementById('t2').style.backgroundColor = '#f4f4f4';
        document.getElementById('t2').style.color = '#333';
        document.getElementById('t3').style.backgroundColor = '#f4f4f4';
        document.getElementById('t3').style.color = '#333';
        document.getElementById('t1').style.backgroundColor = '#f4f4f4';
        document.getElementById('t1').style.color = '#333';

        document.getElementById('c1').style.display = 'none';
        document.getElementById('c2').style.display = 'none';
        document.getElementById('c3').style.display = 'none';
        document.getElementById('c4').style.display = 'block';
        document.getElementById('c4').style.backgroundColor = '#f9f9f9';
    }
}

// Set the default tab on page load
window.onload = function() {
    tab(0);
};
