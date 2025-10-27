import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSearch, FaArrowRight, FaClock } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
// Local Article type to avoid missing module '@shared/schema'.
// If you have a canonical shared type, replace this with the correct import path.
type Article = {
  id: string | number;
  featured?: number;
  category: string;
  title: string;
  excerpt?: string;
  author: string;
  authorAvatar?: string;
  date?: string;
  readTime?: string;
};

const categories = ['All', 'Tutorials', 'Events', 'Research', 'Projects', 'Insights'];

export default function Editorials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const params = new URLSearchParams();
  if (activeCategory !== 'All') params.append('category', activeCategory);
  if (searchQuery) params.append('search', searchQuery);
  
  const queryUrl = params.toString() 
    ? `/api/articles?${params.toString()}` 
    : '/api/articles';
  
  const { data: allArticles = [], isLoading } = useQuery<Article[]>({
    queryKey: [queryUrl],
  });

  const articlesPerPage = 6;

  const featuredArticle = allArticles.find(a => a.featured === 1);
  const regularArticles = allArticles.filter(a => a.featured !== 1);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = regularArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(regularArticles.length / articlesPerPage);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  if (isLoading) {
    return (
      <section id="editorials" className="py-20 md:py-32 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#0891b2]" data-testid="loading-editorials" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="editorials"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]"
      data-testid="section-editorials"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#0891b2] to-[#059669] bg-clip-text text-transparent tracking-tight">
           MAGZINE
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto mb-8">
            Insights, tutorials, and stories from our AI community
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#94a3b8] w-5 h-5" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white rounded-xl shadow-md border-2 border-transparent focus:border-gradient-to-r focus:from-[#0891b2] focus:to-[#059669] focus:outline-none text-[#0f172a] placeholder-[#94a3b8] transition-all duration-300"
                data-testid="input-search-articles"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[#0891b2] to-[#059669] text-white shadow-md'
                    : 'bg-white text-[#475569] hover:bg-[#f1f5f9]'
                }`}
                data-testid={`button-filter-category-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 hover:shadow-2xl transition-shadow duration-300"
            data-testid="card-featured-article"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="h-64 lg:h-auto bg-gradient-to-br from-[#0891b2] to-[#059669] flex items-center justify-center relative">
                <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white rounded-full text-xs font-bold">
                  FEATURED
                </span>
                <div className="text-white text-6xl font-bold opacity-20">AI</div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-[#ecfeff] text-[#0891b2] rounded-full text-xs font-semibold mb-4" data-testid="badge-featured-category">
                  {featuredArticle.category}
                </span>
                <h3 className="text-3xl font-bold text-[#0f172a] mb-4" data-testid="text-featured-title">
                  {featuredArticle.title}
                </h3>
                <p className="text-[#475569] mb-6 leading-relaxed" data-testid="text-featured-excerpt">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: featuredArticle.authorAvatar }}
                  >
                    {getInitials(featuredArticle.author)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0f172a]" data-testid="text-featured-author">{featuredArticle.author}</p>
                    <p className="text-sm text-[#94a3b8]" data-testid="text-featured-meta">
                      {featuredArticle.date} · {featuredArticle.readTime}
                    </p>
                  </div>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-[#0891b2] to-[#059669] text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300" data-testid="button-read-featured">
                  Read Article
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              data-testid={`card-article-${article.id}`}
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-[#ecfeff] to-[#d1fae5] flex items-center justify-center relative">
                <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 text-[#0891b2] rounded text-xs font-semibold" data-testid={`badge-category-${article.id}`}>
                  {article.category}
                </span>
                <div className="text-[#0891b2] text-4xl font-bold opacity-30">
                  {article.category.substring(0, 2)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2 line-clamp-2" data-testid={`text-article-title-${article.id}`}>
                  {article.title}
                </h3>
                <p className="text-[#475569] text-sm mb-4 line-clamp-2" data-testid={`text-article-excerpt-${article.id}`}>
                  {article.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: article.authorAvatar }}
                  >
                    {getInitials(article.author)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0f172a] truncate" data-testid={`text-article-author-${article.id}`}>{article.author}</p>
                    <p className="text-xs text-[#94a3b8] flex items-center gap-1" data-testid={`text-article-meta-${article.id}`}>
                      {article.date} · <FaClock className="w-3 h-3" /> {article.readTime}
                    </p>
                  </div>
                </div>

                {/* Read More */}
                <a
                  href="#"
                  className="flex items-center gap-1 text-[#0891b2] hover:text-[#059669] font-semibold text-sm transition-colors"
                  data-testid={`link-read-more-${article.id}`}
                >
                  Read More
                  <FaArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-semibold text-sm transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-gradient-to-r from-[#0891b2] to-[#059669] text-white shadow-lg'
                    : 'bg-white text-[#475569] border border-[#e2e8f0] hover:bg-[#f1f5f9]'
                }`}
                data-testid={`button-page-${page}`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
