import React from 'react';
import ColorSquare from "./ColorSquare";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";
import { useEffect } from "react";

function App() {

    const [color, setColor] = React.useState<string>('');
    const [colorList, setColorList] = React.useState<string[]>([]);

    const handleChange = (color: string) => {
        localStorage.setItem('savedColor', color);
        setColor(color);
    }

    const handleAdd = (color: string) => {
        const newList: string[] = [...colorList, color];
        localStorage.setItem('savedColorList', JSON.stringify(newList));
        setColorList(newList);
    }

    const handleDelete = (colorIndex: number) => {
        const newList: string[] = colorList.filter((color: string, index: number) => colorIndex !== index);
        setColorList(newList);
    }

    const handleColorBoxClick = (colorIndex: number) => {
        const color = colorList[colorIndex];
        localStorage.setItem('savedColor', color);
        setColor(color);
    }

    useEffect(() =>{
        const savedColor: string | null = localStorage.getItem('savedColor')
        if (savedColor !== null) {
            setColor(savedColor);
        }
        const savedColorList: string | null = localStorage.getItem('savedColorList');
        if (savedColorList != null) {
            setColorList(JSON.parse(savedColorList));
        }
    }, []);


    return (
        <div className="App">
            <h1>Color Picker Application</h1>
            <ColorForm
                color={color}
                handleChange={handleChange}
                handleAdd={handleAdd}
            />
            <ColorSquare color={color} />
            <ColorList colorList={colorList} handleDelete={handleDelete} handleColorBoxCheck={handleColorBoxClick} />
        </div>
  );
}

export default App;
