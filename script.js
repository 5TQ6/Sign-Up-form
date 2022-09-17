

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
        document.getElementById('message').innerHTML = '*Not matching';
        document.getElementById('submit').disabled = true;
    }
}

function show(open,closed) {
    

    if (document.getElementById('password').getAttribute("type") == 'password') {
        document.getElementById('password').setAttribute("type","text");
        open.classList.toggle('hide')
    } else {
        document.getElementById('password').setAttribute("type","password")
        closed.classList.toggle('hide')
    }
}