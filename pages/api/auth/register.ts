import { prisma } from "@/lib/db";
import { auth } from "@/lib/constants";
import { validateAuthInput } from "@/lib/validate";
import type { AuthInput } from "@/types/input";
import type { AuthResponse } from "@/types/response";
import { hash } from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) => {
  if (req.method === "POST") {
    const input = req.body as AuthInput;

    const message = validateAuthInput(input);
    if (message) return res.status(400).json({ ok: false, message });

    let user = await prisma.user.findUnique({
      where: { username: input.username },
    });
    if (user)
      return res.status(400).json({ ok: false, message: auth.USERNAME_EXISTS });

    const password = await hash(input.password, 10);
    user = await prisma.user.create({
      data: { username: input.username, password },
    });
    return res.status(201).json({ ok: true, message: auth.REGISTER_SUCCESS });
  } else {
    res.status(405).end();
  }
};

export default handler;
