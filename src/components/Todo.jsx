import React, { useState } from 'react'; // useState'i import et
import { CiSquareRemove } from "react-icons/ci";
import { IoIosCheckbox, IoIosCheckboxOutline } from "react-icons/io";
import '../App.css';

function Todo({ todo, onRemoveTodo }) {
  const { id, content } = todo; // Todo öğesini destructure et

  const [completed, setCompleted] = useState(false); // Tamamlanmış durumu için state tanımlaması

  // Tamamlanmış durumunu değiştirir
  
  const toggleCompleted = () => {
    setCompleted(!completed); 
  };
  
  // Todo'yu silme fonksiyonu

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}> {/* Tamamlanmışsa 'completed' sınıfı eklenir */}

      <div className='content' onClick={toggleCompleted}> {/* İçeriğe tıklanabilirlik ekle */}
        {content}
      </div>

      <div className='icons'>
        <div className='remove'>
          <CiSquareRemove onClick={removeTodo} /> {/* Silme ikonu */}
        </div>

        <div className='checkbox' onClick={toggleCompleted}> {/* Checkbox için tıklanabilir alan */}
          {completed ? <IoIosCheckbox /> : <IoIosCheckboxOutline />} {/* Tamamlanmışsa dolu, değilse boş checkbox */}
        </div>
      </div>
    </div>
  );
}

export default Todo;