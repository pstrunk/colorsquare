import ColorInput from "./ColorInput";

interface Props {
    color: string,
    handleChange: (color: string) => void,
    handleAdd: (color: string) => void
}

const ColorForm = ({ color, handleChange, handleAdd }: Props) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <ColorInput color={color} handleChange={handleChange} />
            <button type="button" onClick={() => handleAdd(color)}>Add to list</button>
        </form>
    )
}

export default ColorForm;