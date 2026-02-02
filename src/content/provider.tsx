"use client";

import React, { createContext, useContext } from "react";
import {
    SiteConfig,
    NavigationConfig,
    HomePageContent,
    AboutPageContent,
    ServicesPageContent,
    ContactPageContent,
    ProjectsPageContent,
    SectorsPageContent,
    SolutionsPageContent
} from "./schema";

import { siteConfig } from "./site-config";
import { navigation } from "./navigation";
import { homeContent } from "./pages/home";
import { servicesContent } from "./pages/services";
import { projectsContent } from "./pages/projects";
import { contactContent } from "./pages/contact";
import { sectorsContent } from "./pages/sectors";
// Placeholders
import { solutionsContent } from "./pages/solutions";
const aboutContent = {} as AboutPageContent;

interface ContentContextType {
    site: SiteConfig;
    nav: NavigationConfig;
    home: HomePageContent;
    about: AboutPageContent;
    services: ServicesPageContent;
    projects: ProjectsPageContent;
    sectors: SectorsPageContent;
    contact: ContactPageContent;
    solutions: SolutionsPageContent;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
    const value = {
        site: siteConfig,
        nav: navigation,
        home: homeContent,
        about: aboutContent,
        services: servicesContent,
        projects: projectsContent,
        sectors: sectorsContent,
        contact: contactContent,
        solutions: solutionsContent
    };

    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    );
}

export function useContent() {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error("useContent must be used within a ContentProvider");
    }
    return context;
}
