import { create } from "zustand";

import type { DrawingLine } from "@/types/canvas.types";

interface CanvasStore {
  lines: DrawingLine[];

  history: DrawingLine[][];

  redoStack: DrawingLine[][];

  addLine: (line: DrawingLine) => void;

  updateLastLine: (x: number, y: number) => void;

  setLines: (lines: DrawingLine[]) => void;

  clearCanvas: () => void;

  undo: () => void;

  redo: () => void;
}

export const useCanvasStore = create<CanvasStore>((set, get) => ({
  lines: [],

  history: [],

  redoStack: [],

  addLine: (line) =>
    set((state) => ({
      history: [...state.history, state.lines],

      redoStack: [],

      lines: [...state.lines, line],
    })),

  updateLastLine: (x, y) =>
    set((state) => {
      if (state.lines.length === 0) {
        return state;
      }

      const updatedLines = [...state.lines];

      const lastLine = updatedLines[updatedLines.length - 1];

      updatedLines[updatedLines.length - 1] = {
        ...lastLine,
        points: [...lastLine.points, x, y],
      };

      return {
        lines: updatedLines,
      };
    }),

  setLines: (lines) =>
    set({
      lines,
    }),

  clearCanvas: () =>
    set((state) => ({
      history: [...state.history, state.lines],

      redoStack: [],

      lines: [],
    })),

  undo: () => {
    const { history, lines, redoStack } = get();

    if (history.length === 0) {
      return;
    }

    const previous = history[history.length - 1];

    set({
      lines: previous,

      history: history.slice(0, -1),

      redoStack: [...redoStack, lines],
    });
  },

  redo: () => {
    const { redoStack, lines, history } = get();

    if (redoStack.length === 0) {
      return;
    }

    const next = redoStack[redoStack.length - 1];

    set({
      lines: next,

      redoStack: redoStack.slice(0, -1),

      history: [...history, lines],
    });
  },
}));