interface Color {
    color: string;
}

const ColorSquare = ({ color }: Color) => {
    return (
        <div style={{ backgroundColor: color, width: '480px', height: '480px', border: '1px solid black' }}></div>
    )
}

export default ColorSquare