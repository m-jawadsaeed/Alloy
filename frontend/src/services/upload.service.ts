import { api } from "@/api/axios";

class UploadService {
  async uploadAvatar(file: File): Promise<string> {
    const formData = new FormData();

    formData.append("avatar", file);

    const { data } = await api.post<{
      url: string;
    }>("/api/upload/avatar", formData);

    return data.url;
  }
}

export const uploadService = new UploadService();
