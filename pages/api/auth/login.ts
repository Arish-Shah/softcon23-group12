import { prisma } from "@/lib/db";
import { auth } from "@/lib/messages";
import type { AuthInput } from "@/types/input";
import type { AuthResponse } from "@/types/response";
import { compare } from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<AuthResponse>
) => {
  if (req.method === "POST") {
    const input = req.body as AuthInput;

    try {
      const user = await prisma.user.findUnique({
        where: { username: input.username },
      });
      if (!user)
        return res.status(400).json({ ok: false, message: auth.LOGIN_ERROR });
      const valid = compare(input.username, user.password);
      if (!valid)
        return res.status(400).json({ ok: false, message: auth.LOGIN_ERROR });

      return res.status(200).json({ ok: false, message: auth.LOGIN_SUCCESS });
    } catch (e) {
      return res.status(400).json({ ok: false, message: auth.LOGIN_ERROR });
    }
  } else {
    res.status(405).end();
  }
};

export default handler;
