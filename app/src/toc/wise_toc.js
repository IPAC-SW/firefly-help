
// build up your table of contents here...


const toc_quickGuide = {
    id: 'quickGuide',
    title: 'Quick Start Guide',
    href: 'wise/quickguide.html',
};

const toc_overview = {
    id: 'overview',
    title: 'Overview',
    href: 'wise/overview.html',
};

const toc_basics = {
    id: 'basics',
    title: 'Basic Features and Functions',
    href: 'wise/basics.html',
    items: [
         {
            id: 'basics.terminology',
            title: 'Terminology',
            href: 'wise/basics.html#terminology',
        },
        {
            id: 'basics.searching',
            title: 'Searches -- The basics of searching',
            href: 'wise/basics.html#searching',
        },
        {
            id: 'basics.history',
            title: 'History',
            href: 'wise/basics.html#searchHistory',
        },
        {
            id: 'basics.help',
            title: 'Help',
            href: 'wise/basics.html#help',
        },
        {
            id: 'basics.catalog',
            title: 'Catalogs',
            href: 'wise/basics.html#catalogs',
        },
        {
            id: 'basics.loadcatalog',
            title: 'Own Catalogs',
            href: 'wise/basics.html#owncatalogs',
            hidden: true,
        },
        {
            id: 'basics.download',
            title: 'Download data',
            href: 'wise/basics.html#downloads',
        },
        {
            id: 'downloads.Backgroundmonitor',
            title: 'Background Monitor',
            href: 'wise/basics.html#download',
            hidden: true,
        },
    ]
};


const toc_searching = {
    id: 'searching',
    title: 'Searches',
    href: 'wise/searching.html',
    items: [
        {
            id: 'searching.commonoptions',
            title: 'Options Common to Most Searches',
            href: 'wise/searching.html#commonoptions',
        },
        {
            id: 'searching.byPosition',
            title: 'Position Search',
            href: 'wise/searching.html#byPosition',
        },
        {
            id: 'searching.byTable',
            title: 'Searching by table',
            href: 'wise/searching.html#byTable',
        },
        {
            id: 'searching.bySolarObject',
            title: 'Solar System Object Search',
            href: 'wise/searching.html#bySSO',
        },
        {
            id: 'searching.byCoadd',
            title: 'Solar System Object Search',
            href: 'wise/searching.html#byScanID',
            hidden: true,
        },
        {
            id: 'searching.bySource',
            title: 'Source ID Search',
            href: 'wise/searching.html#byScanID',
            hidden: true,
        },
        {
            id: 'searching.byScanFrame',
            title: 'Scan/Frame/Coadd/Source ID Search',
            href: 'wise/searching.html#byScanID',
        },
    ]
};

const toc_results = {
    id: 'results',
    title: 'Search Results',
    href: 'wise/results.html',
    items: [
        {
            id: 'results.terminology',
            title: 'Terminology',
            href: 'wise/results.html#terminology',
        },
        {
            id: 'results.commonoptions',
            title: 'Common Options',
            href: 'wise/results.html#commonoptions',
        },
         {
            id: 'results.details',
            title: 'Position Search Results',
            href: 'wise/results.html#results',
        },
        {
            id: 'results.level1b',
            title: 'Columns: Level 1b',
            href: 'wise/results.html#level1b',
        },
        {
            id: 'results.level3',
            title: 'Columns: Level 3',
            href: 'wise/results.html#level3',
        },
        {
            id: 'results.solarsystemresults',
            title: 'Solar System Search Results',
            href: 'wise/results.html#solarsystemresults',
        },
        {
            id: 'results.solarsystem',
            title: 'Columns: Solar System',
            href: 'wise/results.html#solarsystem',
        },
        {
            id: 'results.filtering',
            title: 'Filtering',
            href: 'wise/results.html#filtering',
        },
        {
            id: 'results.visualization',
            title: 'Visualization',
            href: 'wise/results.html#visualization',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization',
    href: 'wise/visualization.html',
    items: [
        {
            id: 'visualization.Rotate',
            title: 'Rotate image at a angle',
            href: 'wise/visualization.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.fitsDownloadOptions',
            title: 'Save the FITS or PNG file',
            href: 'wise/visualization.html#fitsDownloadOptions',
            hidden: true,
        },
        {
            id: 'visualization.toolbox',
            title: 'Image Manipulation Tools',
            href: 'wise/visualization.html#imageoptions',
            hidden: true,
        },
        {
            id: 'visualization.overview',
            title: 'Visualization Overview',
            href: 'wise/visualization.html#overview',
        },
        {
            id: 'visualization.fitsViewer',
            title: 'Basic FITS Viewer',
            href: 'wise/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageoptions',
            title: 'Visualization Tools',
            href: 'wise/visualization.html#imageoptions',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'wise/visualization.html#footprints',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking from Pane',
            href: 'wise/visualization.html#breakingout',
        },
        {
            id: 'visualization.wcs',
            title: 'WCS Alignment',
            href: 'wise/visualization.html#wcs',
        },
        {
            id: 'visualization.artifacts',
            title: 'Artifacts',
            href: 'wise/visualization.html#artifacts',
        },
    ]
};

const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'wise/catalogs.html',
    items: [
        {
            id: 'visualization.xyplotViewer',
            title: 'Plotting Catalogs',
            href: 'wise/visualization.html#xyplots',
            hidden: true,
        },
        {
            id: 'visualization.chartoptions',
            title: 'Plotting Catalogs',
            href: 'wise/visualization.html#xyplots',
            hidden: true,
        },
        {
            id: 'catalogs.overview',
            title: 'Catalogs Overview',
            href: 'wise/catalogs.html#overview',
        },
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA catalogs',
            href: 'wise/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.owncatalogs',
            title: 'Your own catalogs',
            href: 'wise/catalogs.html#owncatalogs',
        },
        {
            id: 'catalogs.vocatalogs',
            title: 'VO catalogs',
            href: 'wise/catalogs.html#vocatalogs',
        },
        {
            id: 'catalogs.filters',
            title: 'Catalog Filters',
            href: 'wise/catalogs.html#filters',
        },
        {
            id: 'catalogs.xyplots',
            title: 'Plotting Catalogs',
            href: 'wise/catalogs.html#xyplots',
        },
        {
            id: 'catalogs.examples',
            title: 'Examples',
            href: 'wise/catalogs.html#examples',
        },
    ]
};

const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'wise/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQ',
    href: 'wise/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'Privacy',
    href: 'wise/privacy.html',
};



let myToc = [
    //{href: 'wise/overview.html', title: 'IRSA Viewer: Overview'},
    toc_quickGuide,
    toc_overview,
    toc_basics,
    toc_searching,
    toc_results,
    toc_visualization,
    toc_catalogs,
    toc_user,
    toc_faq,
    toc_privacy,
];


// export it as toc
//export const toc = [{title: 'placeholder', href: 'wise/share/about.html'}];
export default myToc;

