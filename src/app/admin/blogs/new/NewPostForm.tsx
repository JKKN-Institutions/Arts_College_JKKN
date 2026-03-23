'use client';

import { useAdminCollege } from '../../AdminCollegeContext';
import BlogPostForm, { type Category, type BlogTag } from '../shared/BlogPostForm';

interface Props {
  userEmail: string;
  userName: string;
  userAvatar: string;
  categories: Category[];
  tags: BlogTag[];
}

export default function NewPostForm({ userEmail, userName, userAvatar, categories, tags }: Props) {
  const collegeId = useAdminCollege();

  return (
    <BlogPostForm
      mode="create"
      collegeId={collegeId}
      userEmail={userEmail}
      userName={userName}
      userAvatar={userAvatar}
      categories={categories}
      tags={tags}
    />
  );
}
