import net from "node:net"

const OPTIONS = {
    port: 1234,
    host: "127.0.0.1"
}

const clientTCP = net.connect(OPTIONS);

clientTCP.on("connect", () => {
    console.log("Connection successful");
    const args = process.argv.splice(2);
    const request = JSON.stringify(args);

    clientTCP.write(request)

    setTimeout(() => {
        clientTCP.end();
    }, 5000)
    
})
