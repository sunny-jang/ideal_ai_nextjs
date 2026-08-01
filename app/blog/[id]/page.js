import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/lib/posts'

export async function generateStaticParams() {
  return posts.map(p => ({ id: String(p.id) }))
}

export async function generateMetadata({ params }) {
  const post = getPost(params.id)
  if (!post) return {}
  return {
    title: `${post.title} — Ideal AI Blog`,
    description: post.summary,
  }
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.id)
  if (!post) notFound()

  const others = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2)

  return (
    <main>
      {/* ARTICLE HERO */}
      <section className="blog-post-hero">
        <div className="blog-post-hero-inner">
          <Link href="/blog" className="blog-back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            블로그로 돌아가기
          </Link>
          <div className="blog-post-meta">
            <span className="blog-cat-v2">{post.category}</span>
            <span className="blog-date-v2">{post.date} · {post.readTime} 읽기</span>
          </div>
          <h1>{post.title}</h1>
          <p className="blog-post-summary">{post.summary}</p>
          <div className="blog-post-author">
            <div className="author-avatar">
              {post.author[0]}
            </div>
            <div>
              <p className="author-name">{post.author}</p>
              <p className="author-role">AI Engineer · Ideal AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="blog-article">
        <div className="blog-article-inner">
          {post.content.map((block, i) => {
            if (block.type === 'lead') {
              return <p key={i} className="blog-lead">{block.text}</p>
            }
            if (block.type === 'h2') {
              return <h2 key={i} className="blog-h2">{block.text}</h2>
            }
            if (block.type === 'p') {
              return <p key={i} className="blog-p">{block.text}</p>
            }
            if (block.type === 'result') {
              return (
                <div key={i} className="blog-result-box">
                  <p className="blog-result-label">{block.label}</p>
                  <div className="blog-result-grid">
                    {block.items.map((item, j) => (
                      <div key={j} className="blog-result-item">
                        <span className="blog-result-value">{item.value}</span>
                        <span className="blog-result-metric">{item.metric}</span>
                        {item.note && <span className="blog-result-note">{item.note}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          })}

          {/* TAGS */}
          <div className="blog-tags">
            <span className="blog-tag">{post.category}</span>
            <span className="blog-tag">AI</span>
            <span className="blog-tag">실무 가이드</span>
          </div>
        </div>
      </article>

      {/* RELATED POSTS */}
      {others.length > 0 && (
        <section className="blog-related">
          <div className="blog-related-inner">
            <p className="eyebrow">RELATED POSTS</p>
            <h3>관련 아티클</h3>
            <div className="blog-related-grid">
              {others.map(p => (
                <a href={`/blog/${p.id}`} key={p.id} className="blog-related-card">
                  <span className="blog-cat-v2">{p.category}</span>
                  <h4>{p.title}</h4>
                  <span className="blog-read-more">
                    {p.readTime} 읽기
                    <svg width="13" height="13" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta" id="contact">
        <div>
          <p className="eyebrow">STAY UPDATED</p>
          <h3>AI 실무 인사이트를<br />가장 먼저 받아보세요.</h3>
        </div>
        <a href="mailto:hello@ideal-ai.co.kr">뉴스레터 구독 <span>→</span></a>
      </section>
    </main>
  )
}
