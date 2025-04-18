"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function ImagePage({ params }) {
  const router = useRouter();
  const { id } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === id);

  if (!newsItem) {
    return notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
