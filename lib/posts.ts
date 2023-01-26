// Utility for working with markdown posts
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import slugify from "slugify";

const MARKDOWN_PATH = "content/posts";

type Frontmatter = {
	title: string;
	subtitle: string;
	date: string;
};

export function getAllPostMetadata() {
	const files = fs.readdirSync(MARKDOWN_PATH);
	const markdownFiles = files.filter((file) => file.endsWith(".md"));
	const markdownContents = markdownFiles.map((file) =>
		fs.readFileSync(`${MARKDOWN_PATH}/${file}`, { encoding: "utf-8" })
	);

	// parse with gray-matter
	const matterResults = markdownContents.map((file) => matter(file));
	const frontmatters = matterResults.map((result) => ({
		...(result.data as Frontmatter),
		// generate slug using post title
		slug: slugify(result.data.title, {
			lower: true,
			strict: true,
		}),
	}));

	return frontmatters;
}

export async function getPostData(slug: string) {
	const file = `${MARKDOWN_PATH}/${slug}.md`;
	const content = fs.readFileSync(file, { encoding: "utf-8" });

	// parse with gray-matter
	const matterResult = matter(content);
	const frontmatter = matterResult.data as Frontmatter;

	// convert markdown to html with remark
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();

	return {
		frontmatter,
		content: contentHtml,
	};
}
