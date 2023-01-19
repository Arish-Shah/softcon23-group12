import { urls } from "@/lib/constants";
import { post } from "@/lib/fetcher";
import { AuthResponse } from "@/types";
import useSWRMutation from "swr/mutation";

export const useLoginMutation = () =>
  useSWRMutation<AuthResponse>(urls.LOGIN, post);

export const useRegisterMutation = () =>
  useSWRMutation<AuthResponse>(urls.REGISTER, post);

export const useLogoutMutation = () =>
  useSWRMutation<AuthResponse>(urls.LOGOUT, post);
