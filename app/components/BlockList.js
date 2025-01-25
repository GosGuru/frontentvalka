import React from "react";
import "../styles/blockList.css";

const BlockList = ({ blocks, onSelectBlock }) => {
  console.log("Datos de las rutinas:", blocks);
  return (
    <div className="block-list">
      {blocks.map((block) => (
        <div
          key={block.id}
          className="block-item"
          onClick={() => onSelectBlock(block.id)}
        >
          
          <h4 className="block-title">{block.titulo || "Bloque Sin Nombre"}</h4>
          <p className="block-notes">{block.notes || "Sin notas"}</p>
        </div>
      ))}
    </div>
  );
};

export default BlockList;
