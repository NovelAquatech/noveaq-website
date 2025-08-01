"use client"
import { useState } from "react";
import { VideosItem } from "@/types/get-started";

export default function TutorialTabs({videos}:{videos: VideosItem[]}) {
  const [activeTab, setActiveTab] = useState(0);
  

  return (
    <div>
      {/* Tabs Title */}
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-medium font-medium text-center" role="tablist">
          {videos.map((video:any, index:any) => {
            const slug = video.title.toLowerCase().replace(/\s+/g, "-");
            return (
              <li className="me-2" role="presentation" key={slug}>
                <button
                  onClick={() => setActiveTab(index)}
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
                    activeTab === index
                      ? "border-blue-600 text-blue-600"
                      : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }`}
                  id={`${slug}-tab`}
                  role="tab"
                  aria-controls={slug}
                  aria-selected={activeTab === index}
                >
                  {video.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Link */}
      <div id="tutorial-content">
        {videos.map((video:any, index:any) => {
          const slug = video.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <div
              key={slug}
              className={`${activeTab === index ? "" : "hidden"} p-4 bg-gray-50 dark:bg-gray-800 rounded-lg`}
              id={slug}
              role="tabpanel"
              aria-labelledby={`${slug}-tab`}
            >
              <video controls className="w-full rounded-lg" muted autoPlay>
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          );
        })}
      </div>
    </div>
  );
}
