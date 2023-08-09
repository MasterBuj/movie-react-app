

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
                    <img src="/src/assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" style={{
                        width: '140px',
                        marginBottom: '10px'
                    }} />
                </div>
            </div>
        </footer>
    )
}

export default Footer