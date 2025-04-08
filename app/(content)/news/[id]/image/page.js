import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  const { id } = params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === id);

  if (!newsItem) {
    return notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
