"use server";
import { teacherState } from "@/app/(routes)/profile/components/admin/add_teacher";
import { z } from "zod";
import {
  createTeacher,
  getTeacher,
  updateTeacherPhoto,
} from "../db/queries/teacher.query";
import { addPhotoState } from "@/app/(routes)/profile/components/admin/add_item_photo";
import { PhotoUploadService } from "../services/photo-upload.service";
import { validateImageFile } from "../types/photo";



const teacherValidationSchema = z.object({
  FName: z.string().nonempty("همه فیلد های اجباری را پر کنید"),
  LName: z.string().nonempty("همه فیلد های اجباری را پر کنید"),
  Bio: z
    .string()
    .min(10, "حداقل 10 حرف وارد کنید")
    .nonempty("همه فیلد های اجباری را پر کنید"),
  ContactPhone: z
    .string()
    .length(11, "طول شماره تلفن باید 11 عدد باشد")
    .nonempty("همه فیلد های اجباری را پر کنید"),
  ContactEmail: z.string().email().nonempty("همه فیلد های اجباری را پر کنید"),
  IsActive: z.boolean().default(true),
  file: validateImageFile,
});

async function validateTeacherItems(rawData: unknown) {
  const result = teacherValidationSchema.safeParse(rawData);

  if (!result.success) {
    const errors = result.error.flatten();
    return {
      data: null,
      errors: {
        ...errors.fieldErrors,
      },
    };
  }

  return {
    data: result.data as z.infer<typeof teacherValidationSchema>,
    errors: null,
  };
}

export async function add_teacher(
  prevState: teacherState,
  formData: FormData
): Promise<teacherState> {
  const rawData = {
    FName: formData.get("fName") as string,
    LName: formData.get("lName") as string,
    FullName: "",
    Bio: formData.get("bio") as string,
    ContactPhone: formData.get("phone") as string,
    ContactEmail: formData.get("email") as string,
    IsActive: true,
    file: formData.get("file") as File,
  };
  rawData.FullName = rawData.FName + " " + rawData.LName;

  // Validate with Zod (recommended)
  const { data, errors } = await validateTeacherItems(rawData);
  if (errors) {
    return {
      errors,
      message: "خطا در انجام علمیات",
      success: false,
    };
  }

  const uploadService = new PhotoUploadService();
  const uploadResult = await uploadService.uploadFile("teacher", data.file);
  if (uploadResult.success) {
    const create_result = await createTeacher(
      rawData,
      uploadResult.data?.filePath
    );
    return { success: true };
  } else {
    return {
      errors: {},
      message: "مشکلی در آپلود تصویر رخ داد",
      success: false,
    };
  }
}

const photo_validation_schema = z.object({
  entity: z.enum(["user", "teacher", "collection", "video"]),
  file: validateImageFile,
});

async function validateImageItems(rawData: unknown) {
  const result = photo_validation_schema.safeParse(rawData);
  if (!result.success) {
    const errors = result.error.flatten();
    return {
      data: null,
      errors: {
        ...errors.fieldErrors,
      },
    };
  } else {
    return {
      data: result.data as z.infer<typeof photo_validation_schema>,
      errors: null,
    };
  }
}

export async function add_teacher_photo(
  state: addPhotoState,
  formData: FormData
): Promise<addPhotoState> {
  const rawData = {
    entity: formData.get("entity") as string,
    file: formData.get("file") as File,
  };

  // Validate with Zod
  const { data, errors } = await validateImageItems(rawData);
  if (errors)
    return {
      errors,
      message: "خطا در انجام علمیات",
      success: false,
    };

  const teacher = await getTeacher(formData.get("teacherId") as string);
  if (!teacher) {
    return {
      errors: undefined,
      message: "مشکلی رخ داد",
      success: false,
    };
  }

  const uploadService = new PhotoUploadService();
  const result = await uploadService.uploadFile(data.entity, data.file);
  if (result.success) {
    console.log("upload result is", result);
    const update_result = await updateTeacherPhoto(teacher.Id, result);
    console.log("udate teacher photo result is: ", update_result);
  }

  console.log(data);
  return { success: true };
}
