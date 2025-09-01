import axios from 'axios';

const API_BASE_URL = 'https://checkout.capitalchain.co/wp-json/wp/v2';

export interface WordPressBlogPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt?: {
    rendered: string;
    protected: boolean;
  };
  author?: string;
  featured_media?: number;
  comment_status?: string;
  ping_status?: string;
  sticky?: boolean;
  template?: string;
  format?: string;
  meta?: Record<string, unknown>;
  categories?: number[];
  tags?: number[];
  yoast_head?: string;
  yoast_head_json?: {
    og_image?: Array<{
      width: number;
      height: number;
      url: string;
      type: string;
    }>;
    author?: string;
    [key: string]: unknown;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  time: string;
  views: number;
  slug: string;
  link: string;
  author?: string;
}

// API client instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Transform WordPress post to our BlogPost format
export const transformWordPressPost = (wpPost: WordPressBlogPost): BlogPost => {
  const postDate = new Date(wpPost.date);
  const formattedDate = postDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
  const formattedTime = postDate.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  // Extract image from yoast_head_json or use default
  const ogImage = wpPost.yoast_head_json?.og_image?.[0]?.url || '/images/blog_1.png';
  
  // Extract excerpt from content or use title
  const contentText = wpPost.content.rendered.replace(/<[^>]*>/g, '').substring(0, 200);
  const description = wpPost.excerpt?.rendered 
    ? wpPost.excerpt.rendered.replace(/<[^>]*>/g, '') 
    : contentText + '...';

  return {
    id: wpPost.id,
    title: wpPost.title.rendered,
    description: description,
    content: wpPost.content.rendered,
    image: ogImage,
    date: formattedDate,
    time: formattedTime,
    views: Math.floor(Math.random() * 3000) + 500, // Random views since not provided by API
    slug: wpPost.slug,
    link: wpPost.link,
    author: wpPost.yoast_head_json?.author || wpPost.author || 'Capital Chain Team'
  };
};

// API functions
export const blogApi = {
  // Get all blog posts
  async getAllPosts(page: number = 1, perPage: number = 20): Promise<{ posts: BlogPost[], totalPages: number }> {
    try {
      const response = await apiClient.get<WordPressBlogPost[]>('/posts', {
        params: {
          page,
          per_page: perPage,
          status: 'publish',
          _embed: true
        }
      });

      const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1');
      const posts = response.data.map(transformWordPressPost);
      
      return { posts, totalPages };
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw new Error('Failed to fetch blog posts');
    }
  },

  // Get a single blog post by ID
  async getPostById(id: number): Promise<BlogPost | null> {
    try {
      const response = await apiClient.get<WordPressBlogPost>(`/posts/${id}`);
      return transformWordPressPost(response.data);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return null;
      }
      console.error('Error fetching blog post:', error);
      throw new Error('Failed to fetch blog post');
    }
  },

  // Get a single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const response = await apiClient.get<WordPressBlogPost[]>('/posts', {
        params: {
          slug,
          status: 'publish'
        }
      });

      if (response.data.length === 0) {
        return null;
      }

      return transformWordPressPost(response.data[0]);
    } catch (error) {
      console.error('Error fetching blog post by slug:', error);
      throw new Error('Failed to fetch blog post');
    }
  },

  // Search posts
  async searchPosts(query: string, page: number = 1, perPage: number = 10): Promise<{ posts: BlogPost[], totalPages: number }> {
    try {
      const response = await apiClient.get<WordPressBlogPost[]>('/posts', {
        params: {
          search: query,
          page,
          per_page: perPage,
          status: 'publish'
        }
      });

      const totalPages = parseInt(response.headers['x-wp-totalpages'] || '1');
      const posts = response.data.map(transformWordPressPost);
      
      return { posts, totalPages };
    } catch (error) {
      console.error('Error searching blog posts:', error);
      throw new Error('Failed to search blog posts');
    }
  }
};

export default blogApi;