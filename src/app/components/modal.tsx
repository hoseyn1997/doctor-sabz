"use client";
import { useModal } from "../common/modalContext";

export default function Modal() {
  const { isOpen, closeModal, modalContent } = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {modalContent}
      </div>
    </div>
  );
}
