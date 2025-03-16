"use server";
import { CollectionState } from "@/app/(routes)/profile/components/admin/add_collection";
import { date, z } from "zod";
import { validateImageFile } from "../types/photo";
import { PhotoUploadService } from "../services/photo-upload.service";
import { addNewCollection } from "../db/queries/collection.query";
import { prisma } from "../db/db";
import { add_video_state } from "@/app/(routes)/profile/components/admin/upload_video";
import { VideoUploadService } from "../services/video-upload.service";
import { addVideo } from "../db/queries/video.query";

const collectionValidation = z.object({
  Title: z.string().min(3, "title must be at least 3 characters"),
  Cost: z.string().nonempty("فیلد ضروری است"),
  DisCount: z.string().nonempty("فیلد ضروری است"),
  Description: z.string().min(6, "description must be at least 6 characters"),
  TeacherId: z.string().nonempty("فیلد ضروری است"),
  TeacherPhone: z.string().nonempty("فیلد ضروری است"),
  file: validateImageFile,
  ShortId: z.string().nonempty("فیلد ضروری است"),
  IsActive: z.boolean().default(true),
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
    ShortId: "dfadfa",
    Title: formData.get("Title") as string,
    Cost: formData.get("Cost") as string,
    DisCount: formData.get("DisCount") as string,
    Description: formData.get("Description") as string,
    IsActive: true,
    TeacherId: "teacherId",
    TeacherPhone: formData.get("TeacherPhone") as string,
    file: formData.get("file") as File,
  };

  console.log("info to create a new collection is: ", rawData);

  // Validate with Zod (recommended)
  const { data, errors } = await ValidateCollection(rawData);
  if (errors)
    return {
      errors,
      message: "validation failed",
      success: false,
    };

  const uploadService = new PhotoUploadService();
  const uploadResult = await uploadService.uploadFile("collection", data.file);
  if (!uploadResult.success) {
    return {
      errors: {},
      message: "مشکل در آپلود",
      success: false,
    };
  }
  const teacher = await prisma.teacher.findUnique({
    where: { ContactPhone: data.TeacherPhone },
  });
  if (!teacher) {
    return {
      errors: {},
      message: "مشکل در آپلود",
      success: false,
    };
  }

  data.TeacherId = teacher.Id;
  data.ShortId = uploadResult.data!.fileName.split("_")[1].split(".")[0];

  console.log("created raw data is: ", data);
  const result = addNewCollection(data, uploadResult.data?.filePath);
  return { success: true };
}

export async function addVideoToCollection(
  addState: add_video_state,
  formData: FormData
): Promise<add_video_state> {
  const rawData = {
    IsFree: true,
    Title: formData.get("Title") as string,
    Description: formData.get("Description") as string,
    Order: Number(formData.get("Order")),
    CollectionId: formData.get("CollectionId") as string,
    File: formData.get("file") as File,
    ImageFile: formData.get("photo_file") as File,
  };
  console.log("recieved information is: ", rawData);

  const uploadService = new VideoUploadService();
  const result = await uploadService.uploadVideo(rawData.File);

  const uploadPhotoService = new PhotoUploadService();
  const uploadPhotoResult = await uploadPhotoService.uploadFile(
    "teacher",
    rawData.ImageFile
  );

  if (result.success) {
    const createVideoResult = await addVideo(
      {
        Title: rawData.Title,
        Order: rawData.Order,
        IsFree: rawData.IsFree,
        Description: rawData.Description,
        ShortId: result.data!.filePath.split(".")[0],
        CollectionId: rawData.CollectionId,
      },
      result.data!.filePath,
      uploadPhotoResult.data?.filePath || ""
    );

    console.log("video is created and it is: ", createVideoResult);
  }
  return {
    data: "every thing is here...",
  };
}
