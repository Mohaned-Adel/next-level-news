import React from "react";
import { getNewsForYear } from "@/lib/news";
import NewsList from "@/components/NewsList/news-list";

export default function FilterNewsPage({ params }) {
  const { year } = params;
  const news = getNewsForYear(year);
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
