function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
     alert('Hee hee that tickles!');
    }

    input.addEventListener('click', clickAlert);
}
