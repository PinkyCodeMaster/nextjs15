export type Article = {
    id: string;
    title: string;
    summary: string;
    content: {
        en: string;
        es: string;
        fr: string;
    };
};

export const articles: Article[] = [
    {
        id: "1",
        title: "Next.js Routing Deep Dive",
        summary: "Understand the powerful routing system of Next.js App Router.",
        content: {
            en: "This article explores dynamic routes, nested layouts, and route groups in Next.js 15.",
            es: "Este artículo explora rutas dinámicas, diseños anidados y grupos de rutas en Next.js 15.",
            fr: "Cet article explore les routes dynamiques, les mises en page imbriquées et les groupes de routes dans Next.js 15.",
        },
    },
    {
        id: "2",
        title: "Understanding Server Components",
        summary: "Learn how Server Components improve performance and reduce bundle size.",
        content: {
            en: "Server Components let you render on the server by default, reducing client-side JavaScript.",
            es: "Los Server Components permiten renderizar en el servidor por defecto, reduciendo el JavaScript del cliente.",
            fr: "Les Server Components permettent un rendu côté serveur par défaut, réduisant le JavaScript côté client.",
        },
    },
    {
        id: "3",
        title: "Optimizing Performance in React",
        summary: "Best practices for fast-loading and responsive React applications.",
        content: {
            en: "Discover strategies like code-splitting, lazy loading, and memoization to improve performance.",
            es: "Descubre estrategias como la división de código, carga diferida y memoización para mejorar el rendimiento.",
            fr: "Découvrez des stratégies telles que le découpage du code, le chargement paresseux et la mémoïsation pour améliorer les performances.",
        },
    },
];
