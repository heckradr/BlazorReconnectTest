function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function TryToReconnect() {
    try {
        let response = await fetch('');

        if (response.ok) { // HTTP-status 200-299
            location.reload(true);
        }
    } catch (error) {
        console.log('Error attempting to reconnect:', error);
    }
}

async function OnConnectionError(observer) {
    console.log('Blazor failed to reconnect! Retrying in 5 seconds...');

    await Sleep(5000);

    observer.disconnect();

    TryToReconnect();
    setInterval(TryToReconnect, 10000);
}

new MutationObserver((mutations, observer) => {
    var reconnectRejected = document.querySelector('.components-reconnect-rejected');
    var reconnectFailed = document.querySelector('.components-reconnect-failed');

    if (reconnectRejected || reconnectFailed) {
        OnConnectionError(observer);
    }

}).observe(document.body, { childList: true, subtree: true, attributes: true });