import PostContent from "@/components/Home/PostContent";
import { getAllPostMetadata } from "@/lib/posts";

export default async function Post({ params }: { params: { slug: string } }) {
	/* @ts-expect-error Server Component */
	return <PostContent slug={params.slug} />;
}

export async function generateStaticParams() {
	const data = await getAllPostMetadata();

	return data.map((d) => ({
		slug: d.slug,
	}));
}
