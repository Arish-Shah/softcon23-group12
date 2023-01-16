export type AuthResponse = {
  ok: boolean;
  message: string;
};

export type MeResponse = AuthResponse & {
  username?: string;
};
