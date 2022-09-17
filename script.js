
var check = function() {
    if (document.getElementById('password').value ==
    document.getElementById('confirm').value)
    {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').textContent = 'Matching'
        document.getElementById('submit').disabled = false;
    }
    else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Not matching';
        document.getElementById('submit').disabled = true;
    }
}