import { ArrowLink } from "@/components/arrow-link";
import { ArticleCard } from "@/components/article-card";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
  return (
    <section className="min-h-screen flex flex-col gap-8 px-4 lg:px-0">
      <div className="flex flex-col gap-4 mt-16">
        <h1 className="font-semibold text-3xl">Blog</h1>
        {/* TODO: 全文検索機能 */}
        <p className="leading-7">
          I will be writing about various topics, including programming, team
          management, book reviews, and diary entries. Additionally, there is a
          full-text search feature available.
        </p>
        <Input type="text" placeholder="Search articles" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* TODO: データを取得する実装 */}
        {Array.from({ length: 4 }).map((_, index) => {
          return <ArticleCard key={index} />;
        })}
      </div>
      <div>
        {/* TODO: blog/listみたいなのを作る？ */}
        <ArrowLink text="All Post" href="/" />
      </div>
    </section>
  );
}
