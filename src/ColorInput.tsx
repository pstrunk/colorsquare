interface Params {
    color: string
    handleChange: (color: string) => void
}

const ColorInput = ({ color, handleChange }: Params) => {
    return (
        <input type="text" value={color} onChange={(e) => handleChange(e.target.value)} />
    );
}

export default ColorInput