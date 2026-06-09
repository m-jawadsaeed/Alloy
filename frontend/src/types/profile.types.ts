export interface UserProfile {
  id: string;

  name: string;

  email: string;

  avatar?: string;

  bio?: string;

  createdAt: string;
}

export interface UpdateProfilePayload {
  name: string;

  bio?: string;
}
