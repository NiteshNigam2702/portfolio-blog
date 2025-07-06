import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  return fs.readdirSync(postsDir).map((filename) => {
    const slug = filename.replace('.mdx', '');
    const fileContent = fs.readFileSync(path.join(postsDir, filename), 'utf8');
    const { data } = matter(fileContent);
    return { slug, ...data };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, slug + '.mdx');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  return { frontMatter: data, content };
}

export function getAllSlugs() {
  return fs.readdirSync(postsDir).map((filename) => ({
    params: { slug: filename.replace('.mdx', '') }
  }));
}
