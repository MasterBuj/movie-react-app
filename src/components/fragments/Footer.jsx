

function Footer() {
    return (
        <footer>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                background: 'var(--inactive)',
                padding: '0 50px'
            }}>
                <img src="/src/assets/localhost.svg" alt="" style={{
                    width: '140px',
                    boxShadow: '2px 5px 20px 6px rgba(0, 0, 0, 0.2)',
                    padding: '5px'
                }} />
                <div>
                    <p>powered by:</p>
                    <img src="/src/assets/TMDB-square.svg" alt="" style={{
                        width: '140px',
                        marginBottom: '10px'
                    }} />
                </div>
            </div>
        </footer>
    )
}

export default Footer