"use server";
import { CollectionState } from "@/app/(routes)/profile/components/admin/add_collection";
import { cookies } from "next/headers";
import { z } from "zod";

const collectionValidation = z.object({
  title: z.string().min(3, "title must be at least 3 characters"),
  content: z.string().email("content email format"),
  description: z.string().min(6, "description must be at least 6 characters"),
});

async function ValidateCollection(rawData: unknown) {
  const result = collectionValidation.safeParse(rawData);

  if (!result.success) {
    const errors = result.error.flatten();
    console.log("validation errors are: ", errors);
    return {
      data: null,
      errors: {
        ...errors.fieldErrors,
      },
    };
  }

  return {
    data: result.data as z.infer<typeof collectionValidation>,
    errors: null,
  };
}

export async function createCollection(
  prevState: CollectionState, // Add previous state parameter
  formData: FormData
): Promise<CollectionState> {
  const rawData = {
    title: formData.get("title"),
    content: formData.get("content"),
    description: formData.get("description"),
  };

  // Validate with Zod (recommended)
  const { data, errors } = await ValidateCollection(rawData);
  if (errors)
    return {
      errors,
      message: "validation failed",
      success: false,
    };

  //   const cookieStore = await cookies();
  //   cookieStore.set("session", session, {
  //     httpOnly: true,
  //     secure: true,
  //     expires: expiresAt,
  //     sameSite: "lax",
  //     path: "/",
  //   });

  console.log("created raw data is: ", rawData);
  return { success: true };
}
