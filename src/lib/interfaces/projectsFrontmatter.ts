export interface ProjectFrontmatter {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  liveSite?: string;
  codeBase?: string;
}
