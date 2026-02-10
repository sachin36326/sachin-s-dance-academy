import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sachinsdanceacademy.com'; // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/about',
        '/courses',
        '/contact',
        '/login',
        '/signup',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic routes (Example for courses - in a real app, fetch these from DB)
    const courseIds = ['1', '2', '3', '4', '5', '6'];
    const courseRoutes = courseIds.map((id) => ({
        url: `${baseUrl}/courses/${id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...courseRoutes];
}
