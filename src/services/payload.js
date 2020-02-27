const handler = function messageHandle(e) {            
    window.setTimeout(function() {
                //informações estão no "e.data"
                console.log(e.data)
                alert(e.data)
                window.removeEventListener('message', messageHandle);
    }, 10);
}

export default handler;