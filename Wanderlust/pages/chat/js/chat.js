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
    const correoMensaje=localStorage.getItem('correoSesionIniciada');
    //console.log(txtMensaje.value)
    stompCliente.publish({
        destination: '/app/send',
        body: JSON.stringify({
            email: correoMensaje,
            content: txtMensaje.value
        })
    });
    
};

const mostrarMensaje = (message) => {
    const body = JSON.parse(message);
    const contenedorMensajes = document.getElementById('insertMessages');
    const correoSesion=localStorage.getItem("correoSesionIniciada");
    console.log(correoSesion);
    
    if(body.email==correoSesion)
    {
        contenedorMensajes.insertAdjacentHTML('beforeend', `
        <div class="row">
          <div class="col-md-3 offset-md-9">
            <div class="chat-bubble chat-bubble--right">
              <p>${body.content}</p> 
            </div>
          </div>
        </div>
      `);
    }
    else
    {
        contenedorMensajes.insertAdjacentHTML('beforeend', `
            <div class="row">
              <div class="col-md-3">
                <div class="chat-bubble chat-bubble--left">
                  <p>${body.content} </p> 
                </div>
              </div>
            </div>
          `);
    }
    
    desplazarAlFinal();
   // console.log(body.email);//Para validacion de tipo de bubble
};



function desplazarAlFinal() {const chatPanel = document.querySelector('.chat-panel');
  chatPanel.scrollTop = chatPanel.scrollHeight;
}
document.addEventListener('DOMContentLoaded', () => {
  desplazarAlFinal();
    
    const btnEnviar = document.getElementById('btnEnviar');
    btnEnviar.addEventListener('click', (e) => {
        e.preventDefault();
        enviarMensaje();
        
       
    });
    
    conectarWS();
    desplazarAlFinal();
    

});

