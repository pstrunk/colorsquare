interface Params {
    colorList: string[];
    handleDelete: (index: number) => void;
    handleColorBoxCheck: (index: number) => void;
}

const ColorList = ({ colorList, handleDelete, handleColorBoxCheck}: Params) => {
    return (
        <ul>
            {colorList.map((color, index) => (
                <div key={index} onDoubleClick={() => handleDelete(index)} onClick={() => handleColorBoxCheck(index)} style={{ border: '1px solid black', backgroundColor: color, width: '100px', height: '20px'  }}/>
            ))}
        </ul>
    )
}

export default ColorList