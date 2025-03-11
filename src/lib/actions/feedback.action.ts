"use server";
export async function handlefeedback(formData: FormData) {
  console.log(formData.get("linkdin_id"));
  console.log(formData.get("feedback"));
}
