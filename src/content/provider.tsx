"use client";

import React from "react";
import { navigation } from "./navigation";
import { siteConfig } from "./site-config";
import { homeContent } from "./pages/home";
import { servicesContent } from "./pages/services";
import { sectorsContent } from "./pages/sectors";
import { solutionsContent } from "./pages/solutions";
import { partnersContent } from "./pages/partners";
import { careersContent } from "./pages/careers";
import { contactContent } from "./pages/contact";
import { projectsContent } from "./pages/projects";

// Minimal provider - being phased out in favor of direct loadStructuredContent usage
// but still used for global layout elements like Header, Footer, and Search
const ContentContext = React.createContext<{
    nav: typeof navigation;
    site: typeof siteConfig;
    home: typeof homeContent;
    services: typeof servicesContent;
    sectors: typeof sectorsContent;
    solutions: typeof solutionsContent;
    partners: typeof partnersContent;
    careers: typeof careersContent;
    contact: typeof contactContent;
    projects: typeof projectsContent;
}>({
    nav: navigation,
    site: siteConfig,
    home: homeContent,
    services: servicesContent,
    sectors: sectorsContent,
    solutions: solutionsContent,
    partners: partnersContent,
    careers: careersContent,
    contact: contactContent,
    projects: projectsContent
});

export function ContentProvider({ children }: { children: React.ReactNode }) {
    return (
        <ContentContext.Provider value={{
            nav: navigation,
            site: siteConfig,
            home: homeContent,
            services: servicesContent,
            sectors: sectorsContent,
            solutions: solutionsContent,
            partners: partnersContent,
            careers: careersContent,
            contact: contactContent,
            projects: projectsContent
        }}>
            {children}
        </ContentContext.Provider>
    );
}

export function useContent() {
    return React.useContext(ContentContext);
}
