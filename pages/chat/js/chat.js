let stompCliente = null;

const onConnectSocket = () => {
    stompCliente.subscribe('/topic/messages', (message) => {
        mostrarMensaje(message.body);
        
    });
};

const onWebSocketClose = () => {
    if (stompCliente !== null) {
        stompCliente.deactivate();
    }
};

const conectarWS = () => {
    onWebSocketClose();
    stompCliente = new StompJs.Client({
        webSocketFactory: () => new WebSocket('ws://localhost:8080/websocket')
    });
    stompCliente.onConnect = onConnectSocket;
    stompCliente.onWebSocketClose = onWebSocketClose;
    stompCliente.activate();
    
};

const enviarMensaje = () => {
    
    let txtMensaje = document.getElementById('txtMensaje');
    //console.log(txtMensaje.value)
    stompCliente.publish({
        destination: '/app/send',
        body: JSON.stringify({
            content: txtMensaje.value
        })
    });
    
};

const mostrarMensaje = (message) => {
    const body = JSON.parse(message);
    const ULMensajes = document.getElementById('insertMessages');

    const mensajeLI = document.createElement('li');
    mensajeLI.classList.add('list-group-item');
    mensajeLI.innerHTML = `${body.content}`;
    
    
    ULMensajes.appendChild(mensajeLI);
    
};

document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault();
        enviarMensaje();
        //console.log("click")
    });
    conectarWS();
});