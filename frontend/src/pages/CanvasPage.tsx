import { useRef, useState } from "react";

import { Stage, Layer, Line } from "react-konva";

import type { KonvaEventObject } from "konva/lib/Node";

import Toolbar from "@/components/canvas/Toolbar";

import CanvasErrorBoundary from "@/components/errors/CanvasErrosBoundary";

import { useCanvasStore } from "@/store/canvas.store";

import { useCanvasSocket } from "@/hooks/useCanvasSocket";

import type { DrawingLine } from "@/types/canvas.types";

export default function CanvasPage() {
  const { emitDraw } = useCanvasSocket();

  const lines = useCanvasStore((state) => state.lines);

  const addLine = useCanvasStore((state) => state.addLine);

  const updateLastLine = useCanvasStore(
    (state) => state.updateLastLine
  );

  const undo = useCanvasStore((state) => state.undo);

  const redo = useCanvasStore((state) => state.redo);

  const clearCanvas = useCanvasStore(
    (state) => state.clearCanvas
  );

  const [color, setColor] = useState("#000000");

  const [strokeWidth, setStrokeWidth] = useState(3);

  const isDrawing = useRef(false);

  const handleMouseDown = (
    event: KonvaEventObject<MouseEvent>
  ) => {
    isDrawing.current = true;

    const stage = event.target.getStage();

    if (!stage) return;

    const pos = stage.getPointerPosition();

    if (!pos) return;

    const line: DrawingLine = {
      id: crypto.randomUUID(),
      color,
      strokeWidth,
      points: [pos.x, pos.y],
    };

    addLine(line);

    emitDraw(line);
  };

  const handleMouseMove = (
    event: KonvaEventObject<MouseEvent>
  ) => {
    if (!isDrawing.current) {
      return;
    }

    const stage = event.target.getStage();

    if (!stage) return;

    const point = stage.getPointerPosition();

    if (!point) return;

    updateLastLine(point.x, point.y);
  };

  return (
    <CanvasErrorBoundary>
      <div className="space-y-4">
        <Toolbar
          color={color}
          strokeWidth={strokeWidth}
          onColorChange={setColor}
          onStrokeChange={setStrokeWidth}
          onUndo={undo}
          onRedo={redo}
          onClear={clearCanvas}
        />

        <Stage
          width={window.innerWidth}
          height={700}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => {
            isDrawing.current = false;
          }}
        >
          <Layer>
            {lines.map((line) => (
              <Line
                key={line.id}
                points={line.points}
                stroke={line.color}
                strokeWidth={line.strokeWidth}
                tension={0.5}
                lineCap="round"
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </CanvasErrorBoundary>
  );
}