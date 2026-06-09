export interface Point {
  x: number;
  y: number;
}

export interface DrawingLine {
  id: string;

  points: number[];

  color: string;

  strokeWidth: number;
}

export interface CanvasDrawPayload {
  line: DrawingLine;
}

export interface CanvasState {
  lines: DrawingLine[];

  history: DrawingLine[][];

  redoStack: DrawingLine[][];
}
