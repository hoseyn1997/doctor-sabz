// app/dashboard/loading.tsx
export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-600 dark:border-gray-50 border-t-transparent dark:border-t-black"></div>
    </div>
  );
}
