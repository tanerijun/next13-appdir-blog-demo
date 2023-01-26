import { getAllPostMetadata } from "@/lib/posts";
import Link from "next/link";
import FancyTitle from "../FancyTitle";

export default function PostsPreview() {
	const data = getAllPostMetadata();

	return (
		<section id="blog-posts">
			<ul className="flex flex-col gap-4">
				{data.map((d) => (
					<li key={d.slug} className="p-4 rounded-md">
						<Link href={`posts/${d.slug}`}>
							<FancyTitle as="h2" extraClass="text-2xl">
								{d.title}
							</FancyTitle>
						</Link>
						<small className="text-zinc-400">{d.date}</small>
						<br />
						<span>{d.subtitle}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
