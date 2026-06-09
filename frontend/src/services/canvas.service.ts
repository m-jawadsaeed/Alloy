import { api } from "@/api/axios";

export class CanvasService {
  async saveCanvas(lines: unknown[]) {
    const { data } = await api.post("/api/canvas", {
      lines,
    });

    return data;
  }
}

export const canvasService = new CanvasService();
