import React, {useState} from 'react';
import Button from './Button';
import Checkbox from './Checkbox';

interface TodoRowProps {
    label: string;
    onDelete: () => void;
}

const TodoRow: React.FC<TodoRowProps> = ({label, onDelete}) => {

    {/*on hover and check condition */}

    const [hovered, setHovered] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    {/* setting hover condition */}

  return (
    <div className='todo-row flex items-center justify-between py-2 last:border-b-0 '
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)} >

        <Checkbox label={label} checked={isChecked} onChange={handleCheckboxChange}/>

        {/* delete "X" button */}

        {hovered && <Button variant="small" onClick={onDelete}> X </Button>}

    </div>
  );
};

export default TodoRow;
