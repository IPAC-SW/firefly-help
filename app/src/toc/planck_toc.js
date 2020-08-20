

// build up your table of contents here...

const toc_quickGuide = {
    id: 'quickGuide',
    title: 'Quick Start Guide',
    href: 'planck/quickguide.html',
};

const toc_overview = {
    id: 'overview',
    title: 'Overview',
    href: 'planck/overview.html',
};
const toc_basics = {
    id: 'basics',
    title: 'Basic Features and Functions',
    href: 'planck/basics.html',
    items: [
        {
            id: 'basics.loadcatalog',
            title: 'Upload your own catalogs',
            href: 'planck/basics.html#owncatalogs',
            hidden: true,
        },
        {
            id: 'basics.catalog.columns',
            title: 'Catalog columns restriction',
            href: 'planck/results.html#filter',
            hidden: true,
        },
        {
            id: 'basics.terminology',
            title: 'Planck Mission',
            href: 'planck/basics.html#terminology',
        },
        {
            id: 'basics.searching',
            title: 'Searches -- The basics of searching',
            href: 'planck/basics.html#searching',
        },
        {
            id: 'basics.searchHistory',
            title: 'Search History',
            href: 'planck/basics.html#searchHistory',
        },
        {
            id: 'basics.help',
            title: 'How to get more help',
            href: 'planck/basics.html#help',
        },
        {
            id: 'basics.catalog',
            title: 'Catalogs',
            href: 'planck/basics.html#catalogs',
        },
        {
            id: 'basics.download',
            title: 'Background Monitor',
            href: 'planck/basics.html#download',
        },
    ]
};


const toc_searching = {
    id: 'searching',
    title: 'Searching the Planck Archive',
    href: 'planck/searching.html',
    items: [
        {
            id: 'searching.byTable',
            title: 'Position Table Upload',
            href: 'planck/searching.html#byTable',
            hidden: true,
        },
        {
            id: 'searching.commonoptions',
            title: 'Options Common to Most Searches',
            href: 'planck/searching.html',
            hidden: true,
        },
        {
            id: 'searching.cutoutByPosition',
            title: 'Map Cutout Visualization',
            href: 'planck/searching.html#byPosition',
            hidden: true,
        },
        {
            id: 'searching.toiByPosition',
            title: 'TOI Search',
            href: 'planck/searching.html#toi',
            hidden: true,
        },
        {
            id: 'searching.toi',
            title: 'TOI Search',
            href: 'planck/searching.html#toi',
        },
        {
            id: 'searching.byWavelength',
            title: 'Frequency Search',
            href: 'planck/searching.html#byWavelength',
        },
        {
            id: 'searching.byPosition',
            title: 'Position Search',
            href: 'planck/searching.html#byPosition',
        },
    ]
};

const toc_downloads = {
    id: 'downloads',
    title: 'Downloads',
    href: 'planck/downloads.html',
    items: [
        {
            id: 'downloads.overview',
            title: 'Downloads Overview',
            href: 'planck/downloads.html#overview',
        },
        {
            id: 'downloads.toi',
            title: 'TOI Downloads',
            href: 'planck/downloads.html#toi',
        },
        {
            id: 'downloads.browsecatalog',
            title: 'Browse Catalogs',
            href: 'planck/downloads.html#browsecatalog',
        },
        {
            id: 'downloads.cutoutvisualization',
            title: 'Cutout Visualization',
            href: 'planck/downloads.html#cutoutvisualization',
        },
        {
            id: 'downloads.additionalcatalogs',
            title: 'Additional Catalogs',
            href: 'planck/downloads.html#additionalcatalogs',
        },
        {
            id: 'downloads.Backgroundmonitor',
            title: 'Background Monitor',
            href: 'planck/downloads.html#backgroundmonitor',
        },
        {
            id: 'downloads.DownloadScript',
            title: 'Download Script',
            href: 'planck/downloads.html#script',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization',
    href: 'planck/visualization.html',
    items: [
        {
            id: 'visualization.xyplotViewer',
            title: 'Using the Spectrum Viewer',
            href: 'planck/visualization.html',
            hidden: true,
        },
        {
            id: 'visualization.chartoptions',
            title: 'Change what is being plotted and how',
            href: 'planck/catalogs.html#xyplots',
            hidden: true,
        },
        {
            id: 'visualization.Rotate',
            title: 'Rotate image at an angle',
            href: 'planck/catalogs.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.fitsDownloadOptions',
            title: 'Save the FITS or PNG file',
            href: 'planck/catalogs.html#fitsDownloadOptions',
            hidden: true,
        },
        {
            id: 'visualization.toolbox',
            title: 'Image Manipulation Tools',
            href: 'planck/catalogs.html#toolbox',
            hidden: true,
        },
        {
            id: 'visualization.overview',
            title: 'Overview',
            href: 'planck/visualization.html#overview',
        },
        {
            id: 'visualization.fitsViewer',
            title: 'Basic FITS Viewer',
            href: 'planck/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageoptions',
            title: 'Visualization tools',
            href: 'planck/visualization.html#imageoptions',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'planck/visualization.html#footprints',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking from pane',
            href: 'planck/visualization.html#breakingout',
        },
        {
            id: 'visualization.wcs',
            title: 'WCS Alignment',
            href: 'planck/visualization.html#wcs',
        },
    ]
};
const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'planck/catalogs.html',
    items: [
        {
            id: 'visualization.xyplotViewer',
            title: 'Plotting Catalogs',
            href: 'planck/catalogs.html#xyplots',
            hidden: true,
        },
         {
            id: 'visualization.chartoptions',
            title: 'Plotting Catalogs',
            href: 'planck/catalogs.html#xyplots',
            hidden: true,
        },
        {
            id: 'catalogs.overview',
            title: 'Overview',
            href: 'planck/catalogs.html#overview',
        },
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA catalogs',
            href: 'planck/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.owncatalogs',
            title: 'Your own catalogs',
            href: 'planck/catalogs.html#owncatalogs',
        },
        {
            id: 'catalogs.vocatalogs',
            title: 'Catalogs from the VO',
            href: 'planck/catalogs.html#vocatalogs',
        },
        {
            id: 'catalogs.filters',
            title: 'Catalog Filters',
            href: 'planck/catalogs.html#filters',
        },
        {
            id: 'catalogs.xyplots',
            title: 'Plotting Catalogs',
            href: 'planck/catalogs.html#xyplots',
        },
    ]
};

const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'planck/user.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'Privacy',
    href: 'planck/privacy.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQ',
    href: 'planck/faq.html',
};


let myToc = [
    //{href: 'planck/overview.html', title: 'IRSA Viewer: Overview'},
    toc_quickGuide,
    toc_overview,
    toc_basics,
    toc_searching,
    toc_downloads,
    toc_visualization,
    toc_catalogs,
    toc_user,
    toc_faq,
    toc_privacy,
];



// export it as toc
//export const toc = [{title: 'placeholder', href: 'planck/share/about.html'}];
export default myToc;
