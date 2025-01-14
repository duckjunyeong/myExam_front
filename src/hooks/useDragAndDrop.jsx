// hooks/useDragAndDrop.js
import { useState, useEffect } from "react";
import { arrayMove } from "@dnd-kit/sortable";

const useDragAndDrop = (items, onUpdate) => {
  const [orderedData, setOrderedData] = useState(items);

  useEffect(() => {
    setOrderedData(items);
  }, [items]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = orderedData.findIndex((item) => item.id === active.id);
      const newIndex = orderedData.findIndex((item) => item.id === over.id);
      const newOrder = arrayMove(orderedData, oldIndex, newIndex);

      setOrderedData(newOrder);

      // onUpdate 콜백 함수 호출
      if (onUpdate) {
        onUpdate(newOrder);
      }
    }
  };

  return { orderedData, handleDragEnd };
};

export default useDragAndDrop;
