const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'A comprehensive guide to building modern web applications with Next.js 14 and React.',
      date: 'May 31, 2024',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Tailwind CSS Tips and Tricks',
      excerpt: 'Learn advanced techniques to make your Tailwind CSS workflow more efficient and productive.',
      date: 'May 20, 2024',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'TypeScript Best Practices',
      excerpt: 'Master TypeScript with these essential best practices and patterns for scalable applications.',
      date: 'May 10, 2024',
      readTime: '6 min read',
    },
  ]

  return (
    <section id="blog" className="bg-gray-50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-accent hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-xl font-bold text-primary mb-3 hover:text-accent transition">
                {post.title}
              </h3>
              <p className="text-secondary mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-secondary">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
