"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  PlusIcon,
  PencilIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  XMarkIcon,
  EllipsisHorizontalIcon,
  ClockIcon,
  Squares2X2Icon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import WaitConditionModal from "../components/WaitConditionModal";

export default function LeadPage() {
  const [showMenu, setShowMenu] = useState(false);
  const [showWaitModal, setShowWaitModal] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center px-6 py-3 border-b bg-gray-100">
        <button
          onClick={() => router.push("/")}
          className="text-gray-600 hover:bg-gray-200 p-2 rounded"
        >
          <HomeIcon className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 ml-3">
          <span className="text-gray-600 font-medium text-sm sm:text-base">
            Automation_S3 (Draft)
          </span>
          <button className="text-gray-600 hover:bg-gray-200 p-1 rounded">
            <PencilIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        <div className="flex-grow" />

        <div className="flex items-center gap-2 text-gray-600">
          <button className="p-2 rounded hover:bg-gray-200">
            <ArrowUturnLeftIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded hover:bg-gray-200">
            <ArrowUturnRightIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded hover:bg-gray-200">
            <XMarkIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded hover:bg-gray-200">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <button className="text-gray-600 font-medium">Save</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium">
            Publish
          </button>
        </div>
      </div>

      <div className="flex justify-center pt-16 px-4">
        <div className="relative">
          <div className="bg-white rounded-md shadow border p-6 w-72">
            <h2 className="text-gray-800 font-semibold text-lg mb-1">
              Lead Created
            </h2>
            <p className="text-gray-400 text-sm">New lead created</p>
          </div>

          <div className="relative mt-[-3px] flex justify-center items-center">
            <div className="w-72 h-1 bg-green-500 rounded-full" />
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="absolute w-8 h-8 rounded-full bg-white border-2 border-green-500 text-green-500 flex items-center justify-center hover:bg-green-50 hover:border-green-600 transition"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="absolute top-[270px] left-1/2 transform -translate-x-1/2 mt-2 bg-white border rounded shadow w-44 z-10">
          <div
            onClick={() => {
              setShowWaitModal(true);
              setShowMenu(false);
            }}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <ClockIcon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Wait</span>
          </div>
          <div
            onClick={() => setShowMenu(false)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <Squares2X2Icon className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">If/Else</span>
          </div>
        </div>
      )}

      {showWaitModal && (
        <WaitConditionModal onClose={() => setShowWaitModal(false)} />
      )}
    </div>
  );
}
