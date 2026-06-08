import { Stage, Layer, Line } from "react-konva";
import { useState } from "react";
import { socket } from "../../sockets/socket";

export const Canvas = () => {
  const [lines, setLines] = useState<any[]>([]);

  const handleMouseMove = (e: any) => {
    const point = e.target.getStage().getPointerPosition();

    socket.emit("canvas:draw", point);

    setLines((prev) => [
      ...prev,
      point
    ]);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={handleMouseMove}
    >
      <Layer>
        {lines.map((l, i) => (
          <Line
            key={i}
            points={[l.x, l.y]}
            stroke="black"
          />
        ))}
      </Layer>
    </Stage>
  );
};