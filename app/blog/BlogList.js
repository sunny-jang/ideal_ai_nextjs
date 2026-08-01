'use client'

import { useState } from 'react'
import { posts } from '@/lib/posts'

const CATEGORIES = ['전체', 'RAG', 'LLM', 'Automation', 'Case Study']

const THUMB_CONFIG = {
  RAG:          { bg: 'rag',        icon: 'rag',  d: 'M11 11m-8 0a8 8 0 1 0 16 0a8 8 0 1 0-16 0 M21 21l-4.35-4.35' },
  LLM:          { bg: 'llm',        icon: 'llm',  d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  Automation:   { bg: 'automation', icon: 'auto', d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
  'Case Study': { bg: 'case-study', icon: 'case', d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8' },
}

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState('전체')

  const featured = posts.find(p => p.featured)
  const filtered = posts
    .filter(p => !p.featured)
    .filter(p => activeCategory === '전체' || p.category === activeCategory)

  return (
    <>
      {/* FEATURED POST */}
      {featured && (
        <section className="inner-section pt-0">
          <div className="blog-featured">
            <div className="blog-featured-thumb p-0 overflow-hidden">
              <img src="/assets/blog.png" alt="Hybrid RAG 비교 실험" className="w-full h-full object-cover block" />
            </div>
            <div className="blog-featured-body">
              <span className="featured-label">★ FEATURED</span>
              <h3>{featured.title}</h3>
              <p>{featured.summary}</p>
              <div className="flex items-center gap-4">
                <span className="blog-cat-v2">{featured.category}</span>
                <span className="blog-date-v2">{featured.date} · {featured.readTime} 읽기</span>
              </div>
              <a className="blog-read-more mt-5" href={`/blog/${featured.id}`}>
                읽기
                <svg width="16" height="16" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* FILTER + POSTS */}
      <section className="inner-section pt-0 pb-20">
        <div className="blog-filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`blog-filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center" style={{color: 'var(--muted)', padding: '60px 0'}}>
            해당 카테고리의 글이 아직 없습니다.
          </p>
        ) : (
          <div className="blog-grid-v2">
            {filtered.map(post => {
              const thumb = THUMB_CONFIG[post.category] || THUMB_CONFIG['RAG']
              return (
                <article className="blog-card-v2 cursor-pointer" key={post.id} onClick={() => window.location.href=`/blog/${post.id}`}>
                  <div className={`blog-thumb-v2${post.thumb ? ' overflow-hidden' : ''}`}>
                    {post.thumb ? (
                      <img src={post.thumb} alt={post.title} className="w-full h-full object-cover block" />
                    ) : (
                      <>
                        <div className={`thumb-bg ${thumb.bg}`}></div>
                        <div className={`thumb-icon ${thumb.icon}`}>
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d={thumb.d} />
                          </svg>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="blog-body-v2">
                    <div className="blog-meta-v2">
                      <span className="blog-cat-v2">{post.category}</span>
                      <span className="blog-date-v2">{post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.summary}</p>
                    <a className="blog-read-more" href={`/blog/${post.id}`}>
                      {post.readTime} 읽기
                      <svg width="14" height="14" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}
