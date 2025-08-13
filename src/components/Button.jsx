export function Button({ children, onClick, style }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '5px',
                cursor: 'pointer',
                margin: '10px 0',
                ...style,
            }}
        >
            {children}
        </button>
    );
}
