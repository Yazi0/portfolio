"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Search, X, ZoomIn, ChevronLeft, ChevronRight, 
  Filter, Grid, List, Heart, Download, Share2,
  ExternalLink, Image as ImageIcon, Video, Music,
  Palette, Camera, Sparkles, Star
} from "lucide-react";

// Gallery Item Type
type GalleryItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  alt: string;
  type: 'image' | 'video' | 'design' | 'art';
  likes: number;
  views: number;
  date: string;
  featured: boolean;
};

// Gallery Section Component
export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Gallery Data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Neon Dreams",
      description: "Digital art exploration with neon colors and futuristic themes",
      category: "art",
      tags: ["digital", "neon", "futuristic", "abstract"],
      imageUrl: "/gallery/neon-dreams.jpg",
      alt: "Neon Dreams Digital Art",
      type: "art",
      likes: 234,
      views: 1567,
      date: "2024-01-15",
      featured: true,
    },
    {
      id: 2,
      title: "Urban Photography",
      description: "Street photography capturing city life and architecture",
      category: "photo",
      tags: ["urban", "street", "architecture", "black-white"],
      imageUrl: "/gallery/urban-photo.jpg",
      alt: "Urban Street Photography",
      type: "image",
      likes: 189,
      views: 1245,
      date: "2024-01-10",
      featured: true,
    },
    {
      id: 3,
      title: "UI Design System",
      description: "Complete design system for modern web applications",
      category: "design",
      tags: ["ui", "design-system", "figma", "components"],
      imageUrl: "/gallery/ui-design.jpg",
      alt: "UI Design System",
      type: "design",
      likes: 312,
      views: 2189,
      date: "2024-01-05",
      featured: false,
    },
    {
      id: 4,
      title: "Motion Graphics Reel",
      description: "Collection of animated graphics and visual effects",
      category: "video",
      tags: ["animation", "motion", "after-effects", "video"],
      imageUrl: "/gallery/motion-graphics.jpg",
      alt: "Motion Graphics Showcase",
      type: "video",
      likes: 421,
      views: 3124,
      date: "2023-12-20",
      featured: true,
    },
    {
      id: 5,
      title: "Minimalist Web Design",
      description: "Clean and minimal website design concepts",
      category: "design",
      tags: ["web", "minimal", "clean", "modern"],
      imageUrl: "/gallery/web-design.jpg",
      alt: "Minimalist Web Design",
      type: "design",
      likes: 278,
      views: 1896,
      date: "2023-12-15",
      featured: false,
    },
    {
      id: 6,
      title: "Nature Photography",
      description: "Landscape and wildlife photography collection",
      category: "photo",
      tags: ["nature", "landscape", "wildlife", "outdoor"],
      imageUrl: "/gallery/nature-photo.jpg",
      alt: "Nature Photography",
      type: "image",
      likes: 356,
      views: 2678,
      date: "2023-12-10",
      featured: true,
    },
    {
      id: 7,
      title: "Brand Identity",
      description: "Complete branding package for tech startup",
      category: "design",
      tags: ["branding", "logo", "identity", "typography"],
      imageUrl: "/gallery/branding.jpg",
      alt: "Brand Identity Design",
      type: "design",
      likes: 198,
      views: 1456,
      date: "2023-12-05",
      featured: false,
    },
    {
      id: 8,
      title: "Abstract Digital",
      description: "Experimental digital art with abstract forms",
      category: "art",
      tags: ["abstract", "experimental", "digital", "colorful"],
      imageUrl: "/gallery/abstract-art.jpg",
      alt: "Abstract Digital Art",
      type: "art",
      likes: 267,
      views: 1789,
      date: "2023-11-30",
      featured: false,
    },
  ];

  // Categories
  const categories = [
    { id: 'all', label: 'All Works', icon: <Grid size={16} />, count: galleryItems.length },
    { id: 'design', label: 'Design', icon: <Palette size={16} />, count: galleryItems.filter(item => item.category === 'design').length },
    { id: 'photo', label: 'Photography', icon: <Camera size={16} />, count: galleryItems.filter(item => item.category === 'photo').length },
    { id: 'art', label: 'Digital Art', icon: <Sparkles size={16} />, count: galleryItems.filter(item => item.category === 'art').length },
    { id: 'video', label: 'Motion', icon: <Video size={16} />, count: galleryItems.filter(item => item.category === 'video').length },
  ];

  // Filter gallery items
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle favorite toggle
  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  // Lightbox Navigation
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredItems.length;
    } else {
      newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    }
    
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 -z-10" />
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      
      {/* Animated Particles Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Creative Gallery</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Visual Portfolio
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of my creative work — from digital designs to photography
          </p>
        </motion.div>

        {/* Gallery Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between p-6 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/40">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search artworks, designs, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <X className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </button>
              )}
            </div>

            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white border-primary'
                      : 'bg-background border-border hover:border-primary/50'
                  }`}
                >
                  {category.icon}
                  <span className="font-medium">{category.label}</span>
                  <span className="text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg border transition-all ${
                  viewMode === 'grid'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-background border-border hover:border-primary/50'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-3 rounded-lg border transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-primary text-white border-primary'
                    : 'bg-background border-border hover:border-primary/50'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence>
          <motion.div
            layout
            className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
            }`}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Gallery Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  )}

                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border text-xs font-medium">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </div>

                  {/* Image Container */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-br from-muted/20 to-background">
                    {/* Image */}
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 bg-primary/5"
                        />
                        <ZoomIn className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(item.id);
                        }}
                        className="text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''
                          }`}
                        />
                      </button>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 rounded-lg bg-muted text-muted-foreground text-xs">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/40 pt-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          {item.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <EyeIcon className="h-4 w-4" />
                          {item.views}
                        </span>
                      </div>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-muted/50 mb-6">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">No results found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Featured Works</h3>
              <p className="text-muted-foreground">Highlighted projects that represent my best work</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-3 rounded-full border border-border hover:border-primary transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-3 rounded-full border border-border hover:border-primary transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {galleryItems.filter(item => item.featured).slice(0, 2).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-3xl border border-border/40 bg-gradient-to-br from-background to-muted/20 backdrop-blur-sm"
              >
                <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold">
                  Featured
                </div>
                
                <div className="h-96 relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/80 mb-4">{item.description}</p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-foreground font-medium hover:bg-white/90 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Works', value: galleryItems.length, icon: <ImageIcon /> },
              { label: 'Total Likes', value: galleryItems.reduce((acc, item) => acc + item.likes, 0), icon: <Heart /> },
              { label: 'Categories', value: categories.length - 1, icon: <Filter /> },
              { label: 'Featured', value: galleryItems.filter(item => item.featured).length, icon: <Star /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-border/40 bg-background/80 backdrop-blur-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value.toLocaleString()}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-background"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-background transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Content */}
              <div className="grid lg:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-96 lg:h-full min-h-[400px]">
                  <Image
                    src={selectedItem.imageUrl}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain p-8"
                    sizes="100vw"
                  />
                </div>

                {/* Details */}
                <div className="p-8 lg:p-12 overflow-y-auto">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                          {selectedItem.category.toUpperCase()}
                        </span>
                        <span className="text-sm text-muted-foreground">{selectedItem.date}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{selectedItem.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleFavorite(selectedItem.id)}
                      className="text-muted-foreground hover:text-red-500 transition-colors"
                    >
                      <Heart
                        className={`h-6 w-6 ${
                          favorites.includes(selectedItem.id) ? 'fill-red-500 text-red-500' : ''
                        }`}
                      />
                    </button>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-muted text-foreground text-sm font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="p-4 rounded-xl bg-muted/50">
                      <div className="text-2xl font-bold">{selectedItem.likes.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Likes</div>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <div className="text-2xl font-bold">{selectedItem.views.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Views</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium hover:border-primary transition-colors">
                      <Download className="h-4 w-4" />
                      Download
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-border font-medium hover:border-primary transition-colors">
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Custom Eye Icon Component
function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}