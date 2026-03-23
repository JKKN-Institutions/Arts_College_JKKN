'use client';

import BlogPostForm, { type BlogData, type Category, type BlogTag } from '../shared/BlogPostForm';

interface Props {
  blog: BlogData;
  userEmail: string;
  userName: string;
  userAvatar: string;
  categories: Category[];
  tags: BlogTag[];
}

export default function EditPostForm({ blog, userEmail, userName, userAvatar, categories, tags }: Props) {
  return (
    <BlogPostForm
      mode="edit"
      initialData={blog}
      userEmail={userEmail}
      userName={userName}
      userAvatar={userAvatar}
      categories={categories}
      tags={tags}
    />
  );
}
