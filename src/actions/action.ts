// 'use server';

// import { prisma } from "@/lib/db";

// export async function createPost(formData: FormData) {
//   await prisma.post.create({
//     data: {
//       title: formData.get("title") as string,
//       content: formData.get('content') as string,
//       slug: (formData.get('title') as string)
//         .replace(/\s+/g, '-')
//         .toLowerCase(),
      
//     }
//   }),
//   // revalidatePath("/posts")
// }
// export async function editPost(formData: FormData, id: string) {
//   await prisma.post.update({
//     where: { id: id },
//     data: {
//       title: formData.get("title") as string,
//       content: formData.get('content') as string,
//       slug: (formData.get('title') as string)
//         .replace(/\s+/g, '-')
//         .toLowerCase(),
//     }
//   })
// }

// export async function deletePost(id: string) {
//   await prisma.post.delete({ where: { id: id } })
// }