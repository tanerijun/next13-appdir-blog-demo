import { getPostData } from "@/lib/posts";
import FancyTitle from "@/components/FancyTitle";

export default async function PostContent({ slug }: { slug: string }) {
	const { frontmatter, content } = await getPostData(slug);
	return (
		<article>
			<header className="flex flex-col my-8 gap-2">
				<FancyTitle as="h2" extraClass="text-3xl uppercase">
					{frontmatter.title}
				</FancyTitle>
				<small className="text-zinc-400">{frontmatter.date}</small>
				<em>{frontmatter.subtitle}</em>
			</header>
			<main
				className="prose prose-invert prose-img:mx-auto"
				dangerouslySetInnerHTML={{ __html: content }}
			></main>
		</article>
	);
}
