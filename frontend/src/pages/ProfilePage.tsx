import { useState } from "react";

import { useProfile } from "@/hooks/useProfile";

import { uploadService } from "@/services/upload.service";

export default function ProfilePage() {
  const { data } = useProfile();

  const [loading, setLoading] = useState(false);

  const uploadAvatar = async (file: File) => {
    try {
      setLoading(true);

      await uploadService.uploadAvatar(file);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>

      <div className="rounded-xl border p-6">
        <p>{data?.name}</p>

        <p>{data?.email}</p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (file) {
              void uploadAvatar(file);
            }
          }}
        />

        {loading && "Uploading..."}
      </div>
    </div>
  );
}
