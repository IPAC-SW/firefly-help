

// build up your table of contents here...



const toc_overview = {
    id: 'overview',
    title: 'Overview',
    href: 'ptf/overview.html',
    items: [
        {
            id: 'overview.history',
            title: 'History and Background',
            href: 'ptf/overview.html#history',
        },
        {
            id: 'overview.terminology',
            title: 'Terminology',
            href: 'ptf/overview.html#terminology',
        },
        {
            id: 'overview.searching',
            title: 'Searching Overview',
            href: 'ptf/overview.html#searching',
        },
        {
            id: 'overview.results',
            title: 'Results Overview',
            href: 'ptf/overview.html#results',
        },
        {
            id: 'overview.visualization',
            title: 'Visualization Overview',
            href: 'ptf/overview.html#visualization',
        },
        {
            id: 'overview.download',
            title: 'Downloading Data',
            href: 'ptf/overview.html#download',
        },
        {
            id: 'overview.preferences',
            title: 'User Login',
            href: 'ptf/overview.html#preferences',
        },
        {
            id: 'overview.help',
            title: 'Getting More Help',
            href: 'ptf/overview.html#help',
        },
   ]
};


const toc_basics = {
    id: 'basics',
    title: 'Basic Features and Functions',
    href: 'ptf/basics.html',
    items: [
        {
            id: 'basics.byTable',
            title: 'Searching in batch mode',
            href: 'ptf/basics.html#byTable',
            hidden: true,
        },
        {
            id: 'basics.catalog',
            title: 'Retrieving and using catalogs',
            href: 'ptf/basics.html#catalog',
            hidden: true,
        },
        {
            id: 'basics.loadcatalog',
            title: 'Own Catalogs',
            href: 'ptf/basics.html#owncatalogs',
            hidden: true,
        },
        {
            id: 'basics.searching',
            title: 'Searches -- The basics of searching',
            href: 'ptf/basics.html#searching',
        },
        {
            id: 'basics.byPTFField',
            title: 'Searching by PTF Field ID',
            href: 'ptf/basics.html#byPTFField',
        },
        {
            id: 'basics.bySSO',
            title: 'Searching by Solar System Object/Orbit',
            href: 'ptf/basics.html#bySSO',
        },
        {
            id: 'basics.history',
            title: 'Your Search History',
            href: 'ptf/basics.html#searchHistory',
        },
        {
            id: 'basics.help',
            title: 'Help',
            href: 'ptf/basics.html#help',
        },
        {
            id: 'basics.catalog',
            title: 'Catalogs',
            href: 'ptf/basics.html#catalogs',
        },
        {
            id: 'basics.download',
            title: 'Download data',
            href: 'ptf/basics.html#downloads',
        },
        {
            id: 'downloads.background',
            title: 'Background Monitor',
            href: 'ptf/basics.html#background',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization',
    href: 'ptf/visualization.html',
    items: [
        {
            id: 'visualization.overview',
            title: 'Visualization Overview',
            href: 'ptf/visualization.html#overview',
        },
        {
            id: 'visualization.fitsViewer',
            title: 'Basic FITS Viewer',
            href: 'ptf/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageoptions',
            title: 'Visualization Tools',
            href: 'ptf/visualization.html#imageoptions',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking from Pane',
            href: 'ptf/visualization.html#breakingout',
        },
    ]
};

const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'ptf/catalogs.html',
    items: [
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA catalogs',
            href: 'ptf/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.owncatalogs',
            title: 'Your own catalogs',
            href: 'ptf/catalogs.html#owncatalogs',
        },
        {
            id: 'catalogs.vocatalogs',
            title: 'VO catalogs',
            href: 'ptf/catalogs.html#vocatalogs',
        },
        {
            id: 'catalogs.columnsfilters',
            title: 'Columns and Filters',
            href: 'ptf/catalogs.html#columnsfilters',
        },
        {
            id: 'catalogs.xyplots',
            title: 'Making plots',
            href: 'ptf/catalogs.html#xyplots',
        },
        {
            id: 'catalogs.examples',
            title: 'Examples',
            href: 'ptf/catalogs.html#examples',
        },
    ]
};

const toc_downloads = {
    id: 'downloads',
    title: 'Downloads',
    href: 'ptf/downloads.html',
    items: [
        {
            id: 'downloads.overview',
            title: 'Overview',
            href: 'ptf/downloads.html#overview',
        },
        {
            id: 'downloads.downloadoptions',
            title: 'Download Options',
            href: 'ptf/downloads.html#downloadoptions',
        },
        {
            id: 'downloads.downloadScript',
            title: 'Download Script',
            href: 'ptf/downloads.html#downloadScript',
        },
    ]
};

const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'ptf/user.html',
};

const toc_faq = {
    id: 'faq',
    title: 'FAQ',
    href: 'ptf/faq.html',
};

const toc_privacy = {
    id: 'privacy',
    title: 'Privacy',
    href: 'ptf/privacy.html',
};



let myToc = [
    //{href: 'ptf/overview.html', title: 'IRSA Viewer: Overview'},
    toc_overview,
    toc_basics,
    toc_visualization,
    toc_catalogs,
    toc_downloads,
    toc_user,
    toc_faq,
    toc_privacy,
];


// export it as toc
//export const toc = [{title: 'placeholder', href: 'ptf/share/about.html'}];
export default myToc;

