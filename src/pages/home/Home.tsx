function Home() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw"
    }}>
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80vw"
            }}>
                <h2>Seja Bem Vinde!</h2>
                <p>Espresse aqui seus pensamentos e opiniões</p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80vw"
            }}>
                <img 
                    src="https://i.imgur.com/VpwApCU.png" 
                    alt="imagem da Página Home"
                    width="400px" 
                />
            </div>
        </div>
    </div>
  )
}

export default Home