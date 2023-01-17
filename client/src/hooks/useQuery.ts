import useSWR from "swr";
import { urls } from "../lib/constants";
import { get } from "../lib/fetcher";
import { AuthResponse } from "../types/response";

export const useMeQuery = () => useSWR<AuthResponse>(urls.ME, get);
