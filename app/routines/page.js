"use client";

import React, { useState, useEffect } from "react";
import { getExerciseBlocks } from "../api/getExerciseBlocks";
import BlockList from "../components/BlockList";
import BlockDetail from "../components/BlockDetail";

const RoutinePage = () => {
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);

  useEffect(() => {
    const fetchBlocks = async () => {
      const data = await getExerciseBlocks();
      setBlocks(data);
    };
    fetchBlocks();
  }, []);

  const handleSelectBlock = (blockId) => {
    const selected = blocks.find((block) => block.id === blockId);
    setSelectedBlock(selected);
  };

  return (
    <div>
      {selectedBlock ? (
        <BlockDetail
          block={selectedBlock}
          onBack={() => setSelectedBlock(null)}
        />
      ) : (
        <BlockList blocks={blocks} onSelectBlock={handleSelectBlock} />
      )}
    </div>
  );
};

export default RoutinePage;
